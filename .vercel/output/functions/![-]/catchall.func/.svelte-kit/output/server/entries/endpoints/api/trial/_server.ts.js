import { json } from "@sveltejs/kit";
import { b as private_env } from "../../../../chunks/shared-server.js";
const POST = async ({ request }) => {
  const payload = await request.json().catch(() => null);
  if (!payload || !payload.name || !payload.email || !payload.classId) {
    return json({ message: "Name, email, and class selection are required." }, { status: 400 });
  }
  const provider = private_env.TRIAL_PROVIDER || private_env.CONTACT_PROVIDER || "log";
  const providerApiKey = private_env.TRIAL_PROVIDER_API_KEY || private_env.CONTACT_PROVIDER_API_KEY || "";
  console.log("[trial-submission]", {
    provider,
    hasProviderApiKey: Boolean(providerApiKey),
    name: payload.name,
    email: payload.email,
    phone: payload.phone || null,
    classId: payload.classId,
    receivedAt: (/* @__PURE__ */ new Date()).toISOString()
  });
  return json({
    ok: true,
    message: "Trial request received. We will confirm your class shortly."
  });
};
export {
  POST
};
