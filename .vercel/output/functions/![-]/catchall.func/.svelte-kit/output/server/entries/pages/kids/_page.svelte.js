import { d as ensure_array_like, e as escape_html } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function _page($$renderer) {
  const benefits = [
    "Confidence and resilience through progressive skill development",
    "Improved focus, listening, and respectful behaviour",
    "Safe physical activity with qualified coaching and supervision",
    "Positive social environment with clear class structure"
  ];
  const checklist = [
    "Water bottle",
    "Comfortable training clothes",
    "Flip-flops for matside",
    "A positive attitude"
  ];
  Container($$renderer, {
    class: "py-10",
    children: ($$renderer2) => {
      $$renderer2.push(`<section class="space-y-8">`);
      SectionHeading($$renderer2, {
        eyebrow: "For parents",
        title: "Kids Brazilian Jiu-Jitsu",
        description: "Our kids and teens classes are designed to be safe, structured, and confidence-building from the very first session."
      });
      $$renderer2.push(`<!----> <div class="grid gap-4 md:grid-cols-2">`);
      Card($$renderer2, {
        class: "border-zinc-200",
        children: ($$renderer3) => {
          $$renderer3.push(`<h3 class="text-xl font-bold text-zinc-950">Benefits for children</h3> <ul class="mt-4 space-y-2 text-sm text-zinc-700"><!--[-->`);
          const each_array = ensure_array_like(benefits);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let benefit = each_array[$$index];
            $$renderer3.push(`<li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></span> <span>${escape_html(benefit)}</span></li>`);
          }
          $$renderer3.push(`<!--]--></ul>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Card($$renderer2, {
        class: "border-zinc-200",
        children: ($$renderer3) => {
          $$renderer3.push(`<h3 class="text-xl font-bold text-zinc-950">What to expect in the first class</h3> <p class="mt-3 text-sm text-zinc-700">We welcome your child, introduce key rules, and keep the first class simple and supportive. Coaches explain each drill clearly and pair students carefully by age and experience.</p> <h4 class="mt-5 text-base font-semibold text-zinc-950">What to bring</h4> <ul class="mt-2 space-y-2 text-sm text-zinc-700"><!--[-->`);
          const each_array_1 = ensure_array_like(checklist);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let item = each_array_1[$$index_1];
            $$renderer3.push(`<li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></span> <span>${escape_html(item)}</span></li>`);
          }
          $$renderer3.push(`<!--]--></ul>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div> `);
      Card($$renderer2, {
        class: "border-zinc-200",
        children: ($$renderer3) => {
          $$renderer3.push(`<h3 class="text-xl font-bold text-zinc-950">Safety and safeguarding</h3> <p class="mt-3 text-sm leading-relaxed text-zinc-700">Student wellbeing comes first. Classes are supervised, structured, and coached with age-appropriate intensity.
        We emphasise respectful behaviour, controlled practice, and clear communication with parents.</p>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> <div class="rounded-2xl border border-red-100 bg-red-50 p-6"><h3 class="text-xl font-bold text-zinc-950">Ready to try a class?</h3> <p class="mt-2 text-sm text-zinc-700">Book a free trial and we will help your child settle in from day one.</p> `);
      Button($$renderer2, {
        href: "/trial",
        class: "mt-4",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Book a Free Trial`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></section>`);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
