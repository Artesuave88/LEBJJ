import { ae as fallback, d as ensure_array_like, e as escape_html, b as bind_props, f as attr_class } from "../../../chunks/index2.js";
import { B as Badge } from "../../../chunks/Badge.js";
import { C as Card } from "../../../chunks/Card.js";
import { s as sortByDayAndTime, w as weekDays, f as formatTime, a as formatDuration, c as classDurationMinutes, t as timetableData, m as matchesAudience, b as matchesGi } from "../../../chunks/timetable.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
function TimetableGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let orderedClasses, groupedByDay;
    let classes = fallback($$props["classes"], () => [], true);
    orderedClasses = sortByDayAndTime(classes);
    groupedByDay = weekDays.map((day) => ({
      day,
      classes: orderedClasses.filter((item) => item.day === day)
    })).filter((group) => group.classes.length > 0);
    $$renderer2.push(`<div class="space-y-3 md:hidden">`);
    if (orderedClasses.length === 0) {
      $$renderer2.push("<!--[-->");
      Card($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="text-sm text-zinc-600">No classes match your current filters.</p>`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(orderedClasses);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let classItem = each_array[$$index];
        Card($$renderer2, {
          class: "space-y-3 p-4",
          children: ($$renderer3) => {
            $$renderer3.push(`<div class="flex items-start justify-between gap-3"><div><p class="text-xs font-semibold uppercase tracking-wider text-red-700">${escape_html(classItem.day)}</p> <h3 class="mt-1 text-base font-semibold text-zinc-950">${escape_html(classItem.title)}</h3></div> `);
            Badge($$renderer3, {
              variant: classItem.gi === "No-Gi" ? "dark" : "red",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(classItem.gi)}`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----></div> <p class="text-sm text-zinc-700">${escape_html(formatTime(classItem.start))} - ${escape_html(formatTime(classItem.end))}
          · ${escape_html(formatDuration(classDurationMinutes(classItem)))}</p> <div class="flex flex-wrap gap-2 text-xs text-zinc-600">`);
            Badge($$renderer3, {
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(classItem.program)}`);
              },
              $$slots: { default: true }
            });
            $$renderer3.push(`<!----> `);
            if (classItem.location) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">${escape_html(classItem.location)}</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <div class="hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">`);
    if (groupedByDay.length === 0) {
      $$renderer2.push("<!--[-->");
      Card($$renderer2, {
        class: "md:col-span-2 xl:col-span-3",
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="text-sm text-zinc-600">No classes match your current filters.</p>`);
        },
        $$slots: { default: true }
      });
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(groupedByDay);
      for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
        let dayGroup = each_array_1[$$index_2];
        Card($$renderer2, {
          class: "space-y-3 p-4",
          children: ($$renderer3) => {
            $$renderer3.push(`<h3 class="text-lg font-bold text-zinc-950">${escape_html(dayGroup.day)}</h3> <div class="space-y-3"><!--[-->`);
            const each_array_2 = ensure_array_like(dayGroup.classes);
            for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
              let classItem = each_array_2[$$index_1];
              $$renderer3.push(`<article class="rounded-xl border border-zinc-200 bg-zinc-50 p-3"><div class="flex flex-wrap items-center justify-between gap-2"><p class="font-semibold text-zinc-900">${escape_html(classItem.title)}</p> `);
              Badge($$renderer3, {
                variant: classItem.gi === "No-Gi" ? "dark" : "red",
                children: ($$renderer4) => {
                  $$renderer4.push(`<!---->${escape_html(classItem.gi)}`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push(`<!----></div> <p class="mt-1 text-sm text-zinc-700">${escape_html(formatTime(classItem.start))} - ${escape_html(formatTime(classItem.end))}
                · ${escape_html(formatDuration(classDurationMinutes(classItem)))}</p> <p class="mt-1 text-xs text-zinc-600">${escape_html(classItem.program)}${escape_html(classItem.location ? ` · ${classItem.location}` : "")}</p></article>`);
            }
            $$renderer3.push(`<!--]--></div>`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { classes });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredClasses;
    const audienceOptions = ["All", "Adults", "Kids"];
    const giOptions = ["All", "Gi", "No-Gi"];
    let audienceFilter = "All";
    let giFilter = "All";
    filteredClasses = sortByDayAndTime(timetableData.filter((item) => matchesAudience() && matchesGi()));
    Container($$renderer2, {
      class: "py-10",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="space-y-6">`);
        SectionHeading($$renderer3, {
          eyebrow: "Weekly schedule",
          title: "Timetable",
          description: "Use filters to quickly find adults or kids sessions, and switch between Gi and No-Gi classes."
        });
        $$renderer3.push(`<!----> <div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p class="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Audience</p> <div class="flex flex-wrap gap-2"><!--[-->`);
        const each_array = ensure_array_like(audienceOptions);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let option = each_array[$$index];
          $$renderer3.push(`<button type="button"${attr_class(`rounded-full border px-4 py-2 text-sm font-semibold transition ${audienceFilter === option ? "border-red-700 bg-red-700 text-white" : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"}`)}>${escape_html(option)}</button>`);
        }
        $$renderer3.push(`<!--]--></div></div> <div><p class="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Gi filter</p> <div class="flex flex-wrap gap-2"><!--[-->`);
        const each_array_1 = ensure_array_like(giOptions);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let option = each_array_1[$$index_1];
          $$renderer3.push(`<button type="button"${attr_class(`rounded-full border px-4 py-2 text-sm font-semibold transition ${giFilter === option ? "border-red-700 bg-red-700 text-white" : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"}`)}>${escape_html(option)}</button>`);
        }
        $$renderer3.push(`<!--]--></div></div></div> <div class="mt-4 flex flex-wrap gap-2">`);
        Badge($$renderer3, {
          variant: "red",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(filteredClasses.length)} classes shown`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Badge($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Mobile list on small screens`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Badge($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Grid on tablet and desktop`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div></div> `);
        TimetableGrid($$renderer3, { classes: filteredClasses });
        $$renderer3.push(`<!----></section>`);
      },
      $$slots: { default: true }
    });
  });
}
export {
  _page as default
};
