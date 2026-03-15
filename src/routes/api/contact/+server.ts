import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { offersPrivateSessions, privateInstructors } from "$lib/data/coaches";
import { formatSubmissionTimestamp } from "$lib/utils/date";
import { sendEmailNotification } from "$lib/server/email-delivery";
import type { RequestHandler } from "./$types";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  preferredInstructor?: string;
  message?: string;
};

export const POST: RequestHandler = async ({ request }) => {
  const payload = (await request
    .json()
    .catch(() => null)) as ContactPayload | null;

  const name = payload?.name?.trim() || "";
  const email = payload?.email?.trim() || "";
  const phone = payload?.phone?.trim() || "";
  const inquiryType = payload?.inquiryType?.trim() || "general";
  const preferredInstructor = payload?.preferredInstructor?.trim() || "";
  const message = payload?.message?.trim() || "";

  if (!name || !email || !message) {
    return json(
      { message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailLooksValid) {
    return json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (inquiryType === "private") {
    if (!preferredInstructor) {
      return json(
        {
          message:
            "Please choose an instructor for the private-session enquiry.",
        },
        { status: 400 },
      );
    }

    if (!offersPrivateSessions(preferredInstructor)) {
      return json(
        {
          message: `Private sessions are currently limited to ${privateInstructors.map((instructor) => instructor.name).join(", ")}.`,
        },
        { status: 400 },
      );
    }
  }

  const provider = env.CONTACT_PROVIDER || env.TRIAL_PROVIDER || "log";
  const providerApiKey =
    env.CONTACT_PROVIDER_API_KEY ||
    env.TRIAL_PROVIDER_API_KEY ||
    env.RESEND_API_KEY ||
    env.SENDGRID_API_KEY ||
    "";
  const to = env.CONTACT_TO_EMAIL || env.TRIAL_TO_EMAIL || "";
  const from = env.CONTACT_FROM_EMAIL || env.TRIAL_FROM_EMAIL || "";
  const receivedAt = formatSubmissionTimestamp(new Date());

  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Enquiry type: ${inquiryType}`,
    `Preferred instructor: ${preferredInstructor || "No preference"}`,
    `Message: ${message}`,
    `Submitted: ${receivedAt}`,
  ].join("\n");

  const deliveryResult = await sendEmailNotification({
    provider,
    apiKey: providerApiKey,
    to,
    from,
    subject: `Contact Form - ${name}`,
    text,
    replyTo: email,
    logLabel: "[contact-submission]",
    logPayload: {
      hasProviderApiKey: Boolean(providerApiKey),
      name,
      email,
      phone: phone || null,
      inquiryType,
      preferredInstructor: preferredInstructor || null,
      message,
      receivedAt,
    },
  });

  if (!deliveryResult.ok) {
    return json(
      {
        message:
          deliveryResult.message || "Unable to submit the form right now.",
      },
      { status: 500 },
    );
  }

  return json({
    ok: true,
    message: "Thanks. We received your message and will reply soon.",
  });
};
