import { ae as fallback, f as attr_class, af as clsx, c as slot, b as bind_props } from "./index2.js";
function Badge($$renderer, $$props) {
  let classes;
  let variant = fallback($$props["variant"], "default");
  let className = fallback($$props["class"], "");
  const variants = {
    default: "border-zinc-200 bg-white text-zinc-700",
    red: "border-red-200 bg-red-50 text-red-700",
    dark: "border-zinc-700 bg-zinc-900 text-zinc-100"
  };
  classes = `inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`;
  $$renderer.push(`<span${attr_class(clsx(classes))}><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></span>`);
  bind_props($$props, { variant, class: className });
}
export {
  Badge as B
};
