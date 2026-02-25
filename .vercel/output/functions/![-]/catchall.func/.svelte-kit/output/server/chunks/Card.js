import { ae as fallback, f as attr_class, c as slot, b as bind_props } from "./index2.js";
function Card($$renderer, $$props) {
  let className = fallback($$props["class"], "");
  $$renderer.push(`<div${attr_class(`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ${className}`)}><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { class: className });
}
export {
  Card as C
};
