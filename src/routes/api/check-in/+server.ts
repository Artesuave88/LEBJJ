import { env } from "$env/dynamic/private";
import { json } from "@sveltejs/kit";
import { getClassLabelForSelect, timetableData } from "$lib/data/timetable";
import { hasCheckInAccess } from "$lib/server/check-in-access";
import { getGymDateKey, getGymWeekDay } from "$lib/utils/date";
import type { RequestHandler } from "./$types";

type CheckInPayload = {
  name?: string;
  classId?: string;
  website?: string;
};

type CheckInResult = {
  ok?: boolean;
  duplicate?: boolean;
  error?: string;
};

const CHECK_IN_SUCCESS_MESSAGE = "You are checked in. Enjoy the class!";
const CHECK_IN_DUPLICATE_MESSAGE = "You are already checked in for this class today.";

// Apps Script can take longer than eight seconds to start and acquire the sheet lock.
const WEBHOOK_TIMEOUT_MS = 25_000;
const WEBHOOK_ATTEMPTS = 2;

// Allow both attempts to finish, with time left to return the result to the browser.
export const config = { maxDuration: 60 };

export const POST: RequestHandler = async ({ cookies, request, url }) => {
  const origin = request.headers.get("origin");
  if (origin && origin !== url.origin) {
    return json({ message: "This check-in request was not accepted." }, { status: 403 });
  }

  const accessToken = env.CHECK_IN_QR_TOKEN?.trim() || "";
  if (!accessToken || !hasCheckInAccess(cookies, accessToken)) {
    return json({ message: "Scan the gym QR code to access check-in." }, { status: 403 });
  }

  const payload = (await request.json().catch(() => null)) as CheckInPayload | null;
  const name = payload?.name?.trim() || "";
  const classId = payload?.classId?.trim() || "";

  // Quietly accept bot submissions without writing them to the sheet.
  if (payload?.website) {
    return json({ ok: true, message: CHECK_IN_SUCCESS_MESSAGE });
  }

  if (!name || !classId) {
    return json({ message: "Your name and a class or Visitor are required." }, { status: 400 });
  }

  if (name.length > 100) {
    return json({ message: "Please enter a shorter name." }, { status: 400 });
  }

  const selectedClass = timetableData.find((item) => item.id === classId);
  const isVisitor = classId === "visitor";

  if (!selectedClass && !isVisitor) {
    return json({ message: "Please choose a valid class." }, { status: 400 });
  }

  if (selectedClass && selectedClass.day !== getGymWeekDay()) {
    return json({ message: "Please choose one of today's classes." }, { status: 400 });
  }

  const webhookUrl = env.GOOGLE_SHEETS_CHECK_IN_URL?.trim();
  const webhookSecret = env.GOOGLE_SHEETS_CHECK_IN_SECRET?.trim();

  if (!webhookUrl || !webhookSecret) {
    console.error("[check-in] Google Sheets webhook is not configured");
    return json(
      { message: "Check-in is not available yet. Please speak to a coach." },
      { status: 503 },
    );
  }

  let duplicate = false;

  try {
    const checkedInAt = new Date();
    const normalizedName = name.toLocaleLowerCase("en-GB").replace(/\s+/g, " ");
    const requestBody = JSON.stringify({
      secret: webhookSecret,
      name,
      classId,
      classLabel: isVisitor ? "Visitor" : getClassLabelForSelect(selectedClass!),
      checkedInAt: checkedInAt.toISOString(),
      // Reusing this key makes a retry safe if the sheet write succeeds but its response is lost.
      idempotencyKey: `${getGymDateKey(checkedInAt)}:${classId}:${normalizedName}`,
    });

    let lastError: unknown;
    for (let attempt = 0; attempt < WEBHOOK_ATTEMPTS; attempt += 1) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: requestBody,
          signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
        });

        if (!response.ok) {
          throw new Error(`Google Sheets webhook returned ${response.status}`);
        }

        const result = (await response.json().catch(() => null)) as CheckInResult | null;
        if (!result?.ok) {
          throw new Error(result?.error || "Google Sheets did not confirm the check-in");
        }

        duplicate = result.duplicate === true;
        lastError = undefined;
        break;
      } catch (error) {
        lastError = error;
      }
    }

    if (lastError) throw lastError;
  } catch (error) {
    console.error("[check-in] Unable to save attendance", error);
    return json(
      { message: "We couldn't save your check-in. Please try again or speak to a coach." },
      { status: 502 },
    );
  }

  return json({
    ok: true,
    duplicate,
    message: duplicate ? CHECK_IN_DUPLICATE_MESSAGE : CHECK_IN_SUCCESS_MESSAGE,
  });
};
