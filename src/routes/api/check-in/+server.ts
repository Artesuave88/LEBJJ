import { env } from "$env/dynamic/private";
import { json } from "@sveltejs/kit";
import { getClassLabelForSelect, timetableData } from "$lib/data/timetable";
import { hasCheckInAccess } from "$lib/server/check-in-access";
import { getGymWeekDay } from "$lib/utils/date";
import type { RequestHandler } from "./$types";

type CheckInPayload = {
  name?: string;
  classId?: string;
  website?: string;
};

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
    return json({ ok: true, message: "You are checked in. Enjoy the class!" });
  }

  if (!name || !classId) {
    return json({ message: "Your name and class are required." }, { status: 400 });
  }

  if (name.length > 100) {
    return json({ message: "Please enter a shorter name." }, { status: 400 });
  }

  const selectedClass = timetableData.find((item) => item.id === classId);
  if (!selectedClass) {
    return json({ message: "Please choose a valid class." }, { status: 400 });
  }

  if (selectedClass.day !== getGymWeekDay()) {
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

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        secret: webhookSecret,
        name,
        classId,
        classLabel: getClassLabelForSelect(selectedClass),
        checkedInAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets webhook returned ${response.status}`);
    }

    const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!result?.ok) throw new Error(result?.error || "Google Sheets did not confirm the check-in");
  } catch (error) {
    console.error("[check-in] Unable to save attendance", error);
    return json(
      { message: "We couldn't save your check-in. Please try again or speak to a coach." },
      { status: 502 },
    );
  }

  return json({ ok: true, message: "You are checked in. Enjoy the class!" });
};
