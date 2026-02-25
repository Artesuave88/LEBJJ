import { json } from "@sveltejs/kit";
const GET = async () => {
  return json({
    ok: true,
    service: "long-eaton-bjj-site",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
export {
  GET
};
