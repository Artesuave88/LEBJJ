import { ae as fallback, f as attr_class, e as escape_html, b as bind_props } from "./index2.js";
function SectionHeading($$renderer, $$props) {
  let eyebrow = fallback($$props["eyebrow"], "");
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let className = fallback($$props["class"], "");
  $$renderer.push(`<div${attr_class(`space-y-3 ${className}`)}>`);
  if (eyebrow) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">${escape_html(eyebrow)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <h2 class="text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">${escape_html(title)}</h2> `);
  if (description) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p class="max-w-3xl text-zinc-600">${escape_html(description)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { eyebrow, title, description, class: className });
}
export {
  SectionHeading as S
};
