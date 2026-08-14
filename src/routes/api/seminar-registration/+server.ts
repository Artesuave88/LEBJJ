import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { sendEmailNotification } from "$lib/server/email-delivery";
import { formatSubmissionTimestamp } from "$lib/utils/date";
import type { RequestHandler } from "./$types";

type RegistrationPayload = {
  name?: string;
  email?: string;
  phone?: string;
};

export const POST: RequestHandler = async ({ request }) => {
  const payload = (await request.json().catch(() => null)) as RegistrationPayload | null;
  const name = payload?.name?.trim() || "";
  const email = payload?.email?.trim() || "";
  const phone = payload?.phone?.trim() || "";

  if (!name || !email) {
    return json({ message: "Name and email are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  const provider = env.SEMINAR_PROVIDER || env.CONTACT_PROVIDER || env.TRIAL_PROVIDER || "log";
  const providerApiKey =
    env.SEMINAR_PROVIDER_API_KEY || env.CONTACT_PROVIDER_API_KEY || env.TRIAL_PROVIDER_API_KEY ||
    env.RESEND_API_KEY || env.SENDGRID_API_KEY || "";
  const to = env.SEMINAR_TO_EMAIL || env.CONTACT_TO_EMAIL || env.TRIAL_TO_EMAIL || "";
  const from = env.SEMINAR_FROM_EMAIL || env.CONTACT_FROM_EMAIL || env.TRIAL_FROM_EMAIL || "";
  const receivedAt = formatSubmissionTimestamp(new Date());

  const result = await sendEmailNotification({
    provider,
    apiKey: providerApiKey,
    to,
    from,
    replyTo: email,
    subject: `Saul Rogers Seminar Registration - ${name}`,
    text: [
      "New seminar registration request",
      "",
      "Seminar: Saul Rogers — No-Gi: Attacking the Front Headlock",
      "Date: Saturday 12 September 2026 at 11:15am",
      "Price: £25 in advance; £30 on the door, subject to available places",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Submitted: ${receivedAt}`,
      "",
      "No payment has been taken. Contact the attendee to confirm their place and arrange advance payment.",
    ].join("\n"),
    logLabel: "[seminar-registration]",
    logPayload: { hasProviderApiKey: Boolean(providerApiKey), name, email, phone: phone || null, receivedAt },
  });

  if (!result.ok) {
    return json({ message: result.message || "Unable to send your registration right now." }, { status: 500 });
  }

  return json({
    ok: true,
    message: "We’ll contact you to confirm availability and arrange advance payment. No payment has been taken.",
  });
};
