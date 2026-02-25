import { a as attr, e as escape_html, d as ensure_array_like } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
import { s as sortByDayAndTime, t as timetableData, g as getClassLabelForSelect } from "../../../chunks/timetable.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const classOptions = sortByDayAndTime(timetableData.filter((item) => item.program !== "Open Mat"));
    let form = { name: "", email: "", phone: "", classId: "" };
    let errors = {};
    let submitState = "idle";
    Container($$renderer2, {
      class: "py-10",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="space-y-8">`);
        SectionHeading($$renderer3, {
          eyebrow: "Book a Free Trial",
          title: "Start your first class",
          description: "Pick a session from the timetable and send your details. We will confirm your trial quickly."
        });
        $$renderer3.push(`<!----> <div class="grid gap-4 md:grid-cols-3">`);
        Card($$renderer3, {
          class: "border-zinc-200",
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="text-sm font-semibold uppercase tracking-wide text-red-700">Step 1</p> <h3 class="mt-2 text-lg font-bold text-zinc-950">Choose your class</h3> <p class="mt-2 text-sm text-zinc-700">Select a suitable class from the trial form below.</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card($$renderer3, {
          class: "border-zinc-200",
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="text-sm font-semibold uppercase tracking-wide text-red-700">Step 2</p> <h3 class="mt-2 text-lg font-bold text-zinc-950">Arrive 10 mins early</h3> <p class="mt-2 text-sm text-zinc-700">We will welcome you, explain basics, and get you settled in.</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Card($$renderer3, {
          class: "border-zinc-200",
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="text-sm font-semibold uppercase tracking-wide text-red-700">Step 3</p> <h3 class="mt-2 text-lg font-bold text-zinc-950">Borrow kit if needed</h3> <p class="mt-2 text-sm text-zinc-700">Bring water and comfortable clothes. We can help with training kit options.</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div> `);
        Card($$renderer3, {
          class: "border-zinc-200",
          children: ($$renderer4) => {
            $$renderer4.push(`<form class="grid gap-4" novalidate=""><div class="grid gap-4 sm:grid-cols-2"><label class="grid gap-2 text-sm font-medium text-zinc-800">Name <input class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500" type="text"${attr("value", form.name)} placeholder="Your name"${attr("aria-invalid", Boolean(errors.name))}/> `);
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
            $$renderer4.push(`<!--]--></label></div> <div class="grid gap-4 sm:grid-cols-2"><label class="grid gap-2 text-sm font-medium text-zinc-800">Phone (optional) <input class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500" type="tel"${attr("value", form.phone)} placeholder="07765 990501"/></label> <label class="grid gap-2 text-sm font-medium text-zinc-800">Choose class `);
            $$renderer4.select(
              {
                class: "h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500",
                value: form.classId,
                "aria-invalid": Boolean(errors.classId)
              },
              ($$renderer5) => {
                $$renderer5.option({ value: "" }, ($$renderer6) => {
                  $$renderer6.push(`Select a class`);
                });
                $$renderer5.push(`<!--[-->`);
                const each_array = ensure_array_like(classOptions);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let item = each_array[$$index];
                  $$renderer5.option({ value: item.id }, ($$renderer6) => {
                    $$renderer6.push(`${escape_html(getClassLabelForSelect(item))}`);
                  });
                }
                $$renderer5.push(`<!--]-->`);
              }
            );
            $$renderer4.push(` `);
            if (errors.classId) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<span class="text-xs text-red-700">${escape_html(errors.classId)}</span>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></label></div> <div class="flex flex-wrap items-center gap-3">`);
            Button($$renderer4, {
              type: "submit",
              disabled: submitState === "submitting",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html("Book Trial")}`);
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
