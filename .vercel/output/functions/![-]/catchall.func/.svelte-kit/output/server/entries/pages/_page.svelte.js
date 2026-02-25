import { a as attr, d as ensure_array_like, e as escape_html } from "../../chunks/index2.js";
import { B as Badge } from "../../chunks/Badge.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
import { C as Container } from "../../chunks/Container.js";
import { S as SectionHeading } from "../../chunks/SectionHeading.js";
const heroImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAwIDkwMCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJCSkogdHJhaW5pbmcgcGxhY2Vob2xkZXIiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAiIHgyPSIxIiB5MT0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTcwNDA2Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMmQwOTBmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBkMGQwZCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0ic3BvdCIgY3g9IjUwJSIgY3k9IjQwJSIgcj0iNTUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y1Mzc0YSIgc3RvcC1vcGFjaXR5PSIwLjY1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2Y1Mzc0YSIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI5MDAiIGZpbGw9InVybCgjYmcpIi8+CiAgPHJlY3Qgd2lkdGg9IjE2MDAiIGhlaWdodD0iOTAwIiBmaWxsPSJ1cmwoI3Nwb3QpIi8+CiAgPGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjYiIGZpbGw9Im5vbmUiPgogICAgPHBhdGggZD0iTTEyMCA3NDBDMzAwIDYxMCA0NjAgNTkwIDYyMCA1MDBzMjUwLTI0MCA0MjAtMjkwIDI4MC00MCA0NDAgMjAiLz4KICAgIDxwYXRoIGQ9Ik0xMjAgODIwQzMwMCA3MDAgNDYwIDY4MCA2MjAgNTkwczI1MC0yNDAgNDIwLTI5MCAyODAtNDAgNDQwIDIwIi8+CiAgPC9nPgogIDx0ZXh0IHg9IjEyMCIgeT0iMTcwIiBmaWxsPSIjZmZmNmY3IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iOTIiIGZvbnQtd2VpZ2h0PSI3MDAiPkxvbmcgRWF0b24gQkpKPC90ZXh0PgogIDx0ZXh0IHg9IjEyMCIgeT0iMjQ1IiBmaWxsPSIjZmZkOGRkIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDAiPkJyYXppbGlhbiBKaXUtSml0c3UgVHJhaW5pbmc8L3RleHQ+Cjwvc3ZnPgo=";
const testimonials = [
  {
    id: "tom",
    name: "Tom R.",
    type: "Student",
    quote: "Started as a total beginner. The coaching is clear, structured, and genuinely welcoming."
  },
  {
    id: "ashley",
    name: "Ashley P.",
    type: "Parent",
    quote: "My son has grown in confidence massively. The kids classes are organised and supportive."
  },
  {
    id: "james",
    name: "James M.",
    type: "Student",
    quote: "Great mix of fundamentals and live rounds. You always leave class with a clear focus."
  },
  {
    id: "nicola",
    name: "Nicola B.",
    type: "Parent",
    quote: "Excellent coaching standards and a safe environment. Communication with parents is very good."
  },
  {
    id: "ryan",
    name: "Ryan K.",
    type: "Student",
    quote: "No-Gi and Gi timetable is ideal. Plenty of sessions to train around work."
  },
  {
    id: "georgia",
    name: "Georgia L.",
    type: "Student",
    quote: "The ladies sessions are friendly and technical. Brilliant place to build confidence quickly."
  }
];
function _page($$renderer) {
  const trustIndicators = ["Beginner friendly", "Kids classes", "Gi & No-Gi"];
  const features = [
    {
      title: "Community that keeps you consistent",
      copy: "Friendly training partners, clear standards, and a room where beginners can grow without ego."
    },
    {
      title: "Structured coaching each week",
      copy: "Every class has a focus, so you always know what you are building and why it matters."
    },
    {
      title: "Fundamentals first, then progression",
      copy: "Strong defensive and positional foundations before advanced layers, giving long-term confidence."
    },
    {
      title: "Competition team support",
      copy: "If you want to compete, we provide coaching, preparation sessions, and practical match strategy."
    }
  ];
  Container($$renderer, {
    class: "py-8 sm:py-12",
    children: ($$renderer2) => {
      $$renderer2.push(`<section class="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 shadow-xl"><img${attr("src", heroImage)} alt="" class="absolute inset-0 h-full w-full object-cover opacity-70" loading="eager" sizes="100vw" aria-hidden="true"/> <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-red-900/30"></div> <div class="relative z-10 px-6 py-14 sm:px-10 sm:py-20 lg:max-w-3xl lg:px-14"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">Long Eaton, Derbyshire</p> <h1 class="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Train Brazilian Jiu-Jitsu with Purpose</h1> <p class="mt-4 max-w-2xl text-base text-zinc-200 sm:text-lg">Build confidence, fitness, and real grappling skill with coaching that is beginner-friendly and
        progression-focused.</p> <div class="mt-8 flex flex-wrap gap-3">`);
      Button($$renderer2, {
        href: "/trial",
        size: "lg",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Book a Free Trial`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        href: "/timetable",
        size: "lg",
        variant: "secondary",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->View Timetable`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div> <div class="mt-8 flex flex-wrap gap-2"><!--[-->`);
      const each_array = ensure_array_like(trustIndicators);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let indicator = each_array[$$index];
        Badge($$renderer2, {
          variant: "dark",
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->${escape_html(indicator)}`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]--></div></div></section>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Container($$renderer, {
    class: "pb-14",
    children: ($$renderer2) => {
      $$renderer2.push(`<section class="space-y-7 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">`);
      SectionHeading($$renderer2, {
        eyebrow: "Why train here",
        title: "A proven path from first class to confident grappler",
        description: "Long Eaton BJJ combines technical coaching with a welcoming team culture. Whether your goal is fitness, self-defence, or competition, the structure is designed to help you improve every week."
      });
      $$renderer2.push(`<!----> <div class="grid gap-4 sm:grid-cols-2"><!--[-->`);
      const each_array_1 = ensure_array_like(features);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let feature = each_array_1[$$index_1];
        Card($$renderer2, {
          class: "h-full border-zinc-200 p-5",
          children: ($$renderer3) => {
            $$renderer3.push(`<h3 class="text-lg font-semibold text-zinc-950">${escape_html(feature.title)}</h3> <p class="mt-2 text-sm text-zinc-600">${escape_html(feature.copy)}</p>`);
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
      $$renderer2.push(`<section class="space-y-6">`);
      SectionHeading($$renderer2, {
        eyebrow: "Testimonials",
        title: "What students and parents say",
        description: "Real feedback from people training with us each week."
      });
      $$renderer2.push(`<!----> <div class="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0"><!--[-->`);
      const each_array_2 = ensure_array_like(testimonials);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let testimonial = each_array_2[$$index_2];
        Card($$renderer2, {
          class: "min-w-[85%] snap-start border-zinc-200 p-5 sm:min-w-[60%] md:min-w-0",
          children: ($$renderer3) => {
            Badge($$renderer3, {
              variant: "red",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(testimonial.type)}`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> <p class="mt-3 text-sm text-zinc-700">“${escape_html(testimonial.quote)}”</p> <p class="mt-4 text-sm font-semibold text-zinc-950">${escape_html(testimonial.name)}</p>`);
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
