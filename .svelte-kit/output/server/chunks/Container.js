import { ae as fallback, ag as element, b as bind_props, c as slot, f as attr_class } from "./index2.js";
function Container($$renderer, $$props) {
  let as = fallback($$props["as"], "div");
  let className = fallback($$props["class"], "");
  element(
    $$renderer,
    as,
    () => {
      $$renderer.push(`${attr_class(`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`)}`);
    },
    () => {
      $$renderer.push(`<!--[-->`);
      slot($$renderer, $$props, "default", {});
      $$renderer.push(`<!--]-->`);
    }
  );
  bind_props($$props, { as, class: className });
}
export {
  Container as C
};
