import { json } from "@sveltejs/kit";
import { b as private_env } from "../../../../chunks/shared-server.js";
const POST = async ({ request }) => {
  const payload = await request.json().catch(() => null);
  if (!payload || !payload.name || !payload.email || !payload.message) {
    return json({ message: "Name, email, and message are required." }, { status: 400 });
  }
  const provider = private_env.CONTACT_PROVIDER || "log";
  const providerApiKey = private_env.CONTACT_PROVIDER_API_KEY || "";
  console.log("[contact-submission]", {
    provider,
    hasProviderApiKey: Boolean(providerApiKey),
    name: payload.name,
    email: payload.email,
    phone: payload.phone || null,
    message: payload.message,
    receivedAt: (/* @__PURE__ */ new Date()).toISOString()
  });
  return json({
    ok: true,
    message: "Thanks. We received your message and will reply soon."
  });
};
export {
  POST
};
