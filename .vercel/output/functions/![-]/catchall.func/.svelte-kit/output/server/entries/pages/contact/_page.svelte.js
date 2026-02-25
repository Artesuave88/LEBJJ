import { d as ensure_array_like, e as escape_html, a as attr } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
import { M as MAPS_URL, W as WHATSAPP_URL, P as PHONE_TEL, A as ADDRESS_LINES, O as OPENING_TIMES, c as PHONE_LABEL } from "../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let form = { name: "", email: "", phone: "", message: "" };
    let errors = {};
    let submitState = "idle";
    Container($$renderer2, {
      class: "py-10",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="space-y-8">`);
        SectionHeading($$renderer3, {
          eyebrow: "Contact",
          title: "Get in touch",
          description: "Send us a message and we will help you choose the right class for your level."
        });
        $$renderer3.push(`<!----> <div class="grid gap-4 lg:grid-cols-2">`);
        Card($$renderer3, {
          class: "border-zinc-200",
          children: ($$renderer4) => {
            $$renderer4.push(`<h3 class="text-xl font-bold text-zinc-950">Visit the gym</h3> <div class="mt-3 space-y-1 text-sm text-zinc-700"><!--[-->`);
            const each_array = ensure_array_like(ADDRESS_LINES);
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let line = each_array[$$index];
              $$renderer4.push(`<p>${escape_html(line)}</p>`);
            }
            $$renderer4.push(`<!--]--></div> <h4 class="mt-5 font-semibold text-zinc-900">Opening times</h4> <ul class="mt-2 space-y-1 text-sm text-zinc-700"><!--[-->`);
            const each_array_1 = ensure_array_like(OPENING_TIMES);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let slot = each_array_1[$$index_1];
              $$renderer4.push(`<li>${escape_html(slot)}</li>`);
            }
            $$renderer4.push(`<!--]--></ul> <div class="mt-5 flex flex-wrap gap-2">`);
            Button($$renderer4, {
              href: MAPS_URL,
              target: "_blank",
              rel: "noreferrer",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Open map`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Button($$renderer4, {
              href: WHATSAPP_URL,
              target: "_blank",
              rel: "noreferrer",
              variant: "secondary",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->WhatsApp`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            Button($$renderer4, {
              href: `tel:${PHONE_TEL}`,
              variant: "secondary",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Call ${escape_html(PHONE_LABEL)}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card($$renderer3, {
          class: "border-zinc-200",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="aspect-video rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4"><div class="flex h-full flex-col items-center justify-center gap-2 text-center"><p class="text-sm font-semibold text-zinc-800">Map embed placeholder</p> <p class="text-xs text-zinc-600">Replace with Google Maps iframe when ready.</p> <a${attr("href", MAPS_URL)} target="_blank" rel="noreferrer" class="text-sm font-semibold text-red-700 hover:underline">Open in Google Maps</a></div></div>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> `);
        Card($$renderer3, {
          class: "border-zinc-200",
          children: ($$renderer4) => {
            $$renderer4.push(`<h3 class="text-xl font-bold text-zinc-950">Send us a message</h3> <form class="mt-4 grid gap-4" novalidate=""><div class="grid gap-4 sm:grid-cols-2"><label class="grid gap-2 text-sm font-medium text-zinc-800">Name <input class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500" type="text"${attr("value", form.name)} placeholder="Your name"${attr("aria-invalid", Boolean(errors.name))}/> `);
            if (errors.name) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<span class="text-xs text-red-700">${escape_html(errors.name)}</span>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></label> <label class="grid gap-2 text-sm font-medium text-zinc-800">Email <input class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500" type="email"${attr("value", form.email)} placeholder="you@example.com"${attr("aria-invalid", Boolean(errors.email))}/> `);
            if (errors.email) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<span class="text-xs text-red-700">${escape_html(errors.email)}</span>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></label></div> <label class="grid gap-2 text-sm font-medium text-zinc-800">Phone (optional) <input class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500" type="tel"${attr("value", form.phone)} placeholder="07765 990501"/></label> <label class="grid gap-2 text-sm font-medium text-zinc-800">Message <textarea class="min-h-32 rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:border-red-500" placeholder="Tell us which class you are interested in"${attr("aria-invalid", Boolean(errors.message))}>`);
            const $$body = escape_html(form.message);
            if ($$body) {
              $$renderer4.push(`${$$body}`);
            }
            $$renderer4.push(`</textarea> `);
            if (errors.message) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<span class="text-xs text-red-700">${escape_html(errors.message)}</span>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></label> <div class="flex flex-wrap items-center gap-3">`);
            Button($$renderer4, {
              type: "submit",
              disabled: submitState === "submitting",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html("Send Message")}`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> `);
            {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div></form>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></section>`);
      },
      $$slots: { default: true }
    });
  });
}
export {
  _page as default
};
