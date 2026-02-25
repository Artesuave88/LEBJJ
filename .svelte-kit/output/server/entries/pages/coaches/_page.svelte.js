import { d as ensure_array_like, a as attr, e as escape_html } from "../../../chunks/index2.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
const coachPlaceholder = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20800%201000'%20role='img'%20aria-label='Coach%20placeholder'%3e%3crect%20width='800'%20height='1000'%20fill='%23f2f2f2'/%3e%3ccircle%20cx='400'%20cy='330'%20r='150'%20fill='%23d8d8d8'/%3e%3crect%20x='220'%20y='510'%20width='360'%20height='300'%20rx='150'%20fill='%23d8d8d8'/%3e%3crect%20x='110'%20y='860'%20width='580'%20height='32'%20rx='16'%20fill='%23c1c1c1'/%3e%3c/svg%3e";
const coaches = [
  {
    id: "paul-thompson",
    name: "Paul Thompson",
    beltRank: "Black Belt",
    role: "Head Coach",
    shortBio: "Leads fundamentals and adult development with a detail-first teaching style.",
    fullBio: "Paul focuses on helping new students feel comfortable quickly while building strong defensive habits. His classes are structured and progressive so every student understands not just what to do, but why it works.",
    photo: coachPlaceholder
  },
  {
    id: "katie-ward",
    name: "Katie Ward",
    beltRank: "Brown Belt",
    role: "Ladies & Kids Coach",
    shortBio: "Runs ladies and youth sessions with a calm, confidence-building approach.",
    fullBio: "Katie is known for her supportive coaching style and clear communication. She helps children and beginners build confidence through repeatable movement patterns, respect on the mat, and safe sparring habits.",
    photo: coachPlaceholder
  },
  {
    id: "dan-frost",
    name: "Dan Frost",
    beltRank: "Purple Belt",
    role: "Strength & Conditioning",
    shortBio: "Coordinates Frost-fit sessions and supports competition prep conditioning.",
    fullBio: "Dan delivers practical conditioning for grapplers: grip endurance, movement efficiency, and injury-resilient training. Sessions are designed to complement BJJ classes without overloading recovery.",
    photo: coachPlaceholder
  },
  {
    id: "elliot-reed",
    name: "Elliot Reed",
    beltRank: "Brown Belt",
    role: "Teens Coach",
    shortBio: "Helps teens transition from junior classes into all-level sessions smoothly.",
    fullBio: "Elliot specializes in bridging fundamentals and live training for teenage students. He emphasizes discipline, safe intensity, and practical techniques that carry over into the adult timetable.",
    photo: coachPlaceholder
  }
];
function _page($$renderer) {
  Container($$renderer, {
    class: "py-10",
    children: ($$renderer2) => {
      $$renderer2.push(`<section class="space-y-7">`);
      SectionHeading($$renderer2, {
        eyebrow: "Coaching team",
        title: "Experienced coaches, clear instruction",
        description: "Our coaches prioritise technical clarity, safe training, and long-term progression for every student."
      });
      $$renderer2.push(`<!----> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      const each_array = ensure_array_like(coaches);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let coach = each_array[$$index];
        $$renderer2.push(`<button type="button" class="text-left">`);
        Card($$renderer2, {
          class: "h-full border-zinc-200 p-4 transition hover:-translate-y-0.5 hover:shadow-md",
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="aspect-[4/5] overflow-hidden rounded-xl border border-zinc-200"><img${attr("src", coach.photo)}${attr("alt", `${coach.name} portrait`)} class="h-full w-full object-cover" loading="lazy" sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"/></div> <h3 class="mt-4 text-lg font-bold text-zinc-950">${escape_html(coach.name)}</h3> <p class="text-sm font-semibold text-red-700">${escape_html(coach.beltRank)}</p> <p class="mt-1 text-sm text-zinc-600">${escape_html(coach.role)}</p> <p class="mt-3 text-sm text-zinc-700">${escape_html(coach.shortBio)}</p>`);
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></button>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
export {
  _page as default
};
