import { ae as fallback, a as attr, f as attr_class, af as clsx, c as slot, b as bind_props } from "./index2.js";
function Button($$renderer, $$props) {
  let classes;
  let href = fallback($$props["href"], null);
  let target = fallback($$props["target"], void 0);
  let rel = fallback($$props["rel"], void 0);
  let type = fallback($$props["type"], "button");
  let disabled = fallback($$props["disabled"], false);
  let variant = fallback($$props["variant"], "primary");
  let size = fallback($$props["size"], "md");
  let className = fallback($$props["class"], "");
  const variantClasses = {
    primary: "border-transparent bg-red-700 text-white hover:bg-red-800 focus-visible:ring-red-500 disabled:bg-red-300",
    secondary: "border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 focus-visible:ring-zinc-500 disabled:text-zinc-400",
    ghost: "border-transparent bg-transparent text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-400 disabled:text-zinc-400"
  };
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base"
  };
  classes = `inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<a${attr("href", href)}${attr("target", target)}${attr("rel", rel)}${attr_class(clsx(classes))}${attr("aria-disabled", disabled)}><!--[-->`);
    slot($$renderer, $$props, "default", {});
    $$renderer.push(`<!--]--></a>`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<button${attr("type", type)}${attr_class(clsx(classes))}${attr("disabled", disabled, true)}><!--[-->`);
    slot($$renderer, $$props, "default", {});
    $$renderer.push(`<!--]--></button>`);
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, {
    href,
    target,
    rel,
    type,
    disabled,
    variant,
    size,
    class: className
  });
}
export {
  Button as B
};
