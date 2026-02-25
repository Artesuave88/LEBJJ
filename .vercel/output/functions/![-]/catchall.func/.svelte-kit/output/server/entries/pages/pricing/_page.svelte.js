import { d as ensure_array_like, e as escape_html, a as attr } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
const memberships = [
  {
    id: "beginner-trial",
    name: "Beginner Trial",
    price: "£XX",
    description: "A low-commitment start for new students.",
    features: [
      "Intro-friendly class access",
      "Coach guidance before first session",
      "Perfect for complete beginners"
    ],
    ctaLabel: "Start Trial"
  },
  {
    id: "monthly-unlimited",
    name: "Monthly Unlimited",
    price: "£XX / month",
    description: "Train across the full weekly timetable.",
    features: [
      "Unlimited adults classes",
      "Gi and No-Gi sessions",
      "Open mat access included"
    ],
    ctaLabel: "Join Unlimited"
  },
  {
    id: "kids-membership",
    name: "Kids Membership",
    price: "£XX / month",
    description: "Structured youth training in a safe setting.",
    features: ["Junior + teens classes", "Progressive curriculum", "Supportive learning environment"],
    ctaLabel: "Enquire Kids"
  }
];
const pricingFaqs = [
  {
    question: "Do I need any experience before joining?",
    answer: "No experience is required. Our beginner trial is designed for first-time students."
  },
  {
    question: "Can I attend both Gi and No-Gi classes?",
    answer: "Yes. Monthly memberships can include both Gi and No-Gi timetable options."
  },
  {
    question: "Are there contracts?",
    answer: "Membership terms can vary. Contact us and we will explain your options clearly."
  },
  {
    question: "What if I am only interested in kids classes?",
    answer: "The kids membership is tailored for juniors and teens with age-appropriate sessions."
  }
];
function _page($$renderer) {
  let openFaqIndex = 0;
  Container($$renderer, {
    class: "py-10",
    children: ($$renderer2) => {
      $$renderer2.push(`<section class="space-y-8">`);
      SectionHeading($$renderer2, {
        eyebrow: "Membership",
        title: "Pricing",
        description: "Clear options to get started, train consistently, or enrol your child into structured classes."
      });
      $$renderer2.push(`<!----> <div class="grid gap-4 lg:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(memberships);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let plan = each_array[$$index_1];
        Card($$renderer2, {
          class: "flex h-full flex-col border-zinc-200",
          children: ($$renderer3) => {
            $$renderer3.push(`<h3 class="text-xl font-bold text-zinc-950">${escape_html(plan.name)}</h3> <p class="mt-1 text-2xl font-bold text-red-700">${escape_html(plan.price)}</p> <p class="mt-2 text-sm text-zinc-600">${escape_html(plan.description)}</p> <ul class="mt-4 flex-1 space-y-2 text-sm text-zinc-700"><!--[-->`);
            const each_array_1 = ensure_array_like(plan.features);
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let feature = each_array_1[$$index];
              $$renderer3.push(`<li class="flex items-start gap-2"><span class="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></span> <span>${escape_html(feature)}</span></li>`);
            }
            $$renderer3.push(`<!--]--></ul> `);
            Button($$renderer3, {
              href: "/trial",
              class: "mt-6",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(plan.ctaLabel)}`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!---->`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--></div></section>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Container($$renderer, {
    class: "pb-16",
    children: ($$renderer2) => {
      $$renderer2.push(`<section class="space-y-5">`);
      SectionHeading($$renderer2, { eyebrow: "FAQ", title: "Common pricing questions" });
      $$renderer2.push(`<!----> <div class="space-y-3"><!--[-->`);
      const each_array_2 = ensure_array_like(pricingFaqs);
      for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
        let faq = each_array_2[index];
        Card($$renderer2, {
          class: "border-zinc-200 p-0",
          children: ($$renderer3) => {
            $$renderer3.push(`<button type="button" class="flex w-full items-center justify-between gap-4 p-5 text-left"${attr("aria-expanded", openFaqIndex === index)}><span class="font-semibold text-zinc-950">${escape_html(faq.question)}</span> <span class="text-2xl leading-none text-red-700">${escape_html(openFaqIndex === index ? "−" : "+")}</span></button> `);
            if (openFaqIndex === index) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="border-t border-zinc-200 px-5 py-4 text-sm text-zinc-700">${escape_html(faq.answer)}</div>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--></div></section>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
