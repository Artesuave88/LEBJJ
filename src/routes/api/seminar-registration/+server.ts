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

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const replyUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Saul Rogers seminar registration")}`;

  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f5;padding:32px 12px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid #e4e4e7;border-radius:18px;overflow:hidden;">
          <tr>
            <td style="background:#111113;padding:32px;">
              <p style="margin:0 0 12px;color:#ff606c;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Long Eaton BJJ · New registration</p>
              <h1 style="margin:0;color:#ffffff;font-size:30px;line-height:1.15;">Saul Rogers</h1>
              <p style="margin:8px 0 0;color:#d4d4d8;font-size:17px;line-height:1.5;">No-Gi · Attacking the Front Headlock</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#fff1f2;border:1px solid #fecdd3;border-radius:12px;">
                <tr>
                  <td style="padding:18px;">
                    <p style="margin:0 0 5px;color:#9f1239;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Event details</p>
                    <p style="margin:0;color:#18181b;font-size:15px;font-weight:700;line-height:1.55;">Saturday 12 September 2026 · 11:15am</p>
                    <p style="margin:3px 0 0;color:#52525b;font-size:14px;line-height:1.5;">£25 in advance · £30 on the door, subject to available places</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 32px 4px;">
              <h2 style="margin:0 0 16px;font-size:20px;color:#18181b;">Attendee details</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:15px;line-height:1.5;">
                <tr><td style="padding:9px 0;color:#71717a;width:90px;border-bottom:1px solid #eeeeef;">Name</td><td style="padding:9px 0;font-weight:700;border-bottom:1px solid #eeeeef;">${safeName}</td></tr>
                <tr><td style="padding:9px 0;color:#71717a;border-bottom:1px solid #eeeeef;">Email</td><td style="padding:9px 0;border-bottom:1px solid #eeeeef;"><a href="mailto:${safeEmail}" style="color:#b91c1c;text-decoration:none;">${safeEmail}</a></td></tr>
                <tr><td style="padding:9px 0;color:#71717a;">Phone</td><td style="padding:9px 0;">${safePhone}</td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 30px;">
              <a href="${replyUrl}" style="display:inline-block;background:#b91c1c;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:13px 22px;border-radius:999px;">Reply to attendee</a>
              <p style="margin:18px 0 0;color:#71717a;font-size:13px;line-height:1.5;">No payment has been taken. Contact the attendee to confirm their place and arrange advance payment.</p>
            </td>
          </tr>
          <tr>
            <td style="background:#fafafa;border-top:1px solid #eeeeef;padding:16px 32px;color:#a1a1aa;font-size:11px;">Submitted ${escapeHtml(receivedAt)} via the Long Eaton BJJ website</td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;

  const result = await sendEmailNotification({
    provider,
    apiKey: providerApiKey,
    to,
    from,
    replyTo: email,
    subject: `Saul Rogers Seminar Registration - ${name}`,
    html,
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
