import { d as ensure_array_like, a as attr, e as escape_html } from "../../../chunks/index2.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
const image1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM4YTAwMGQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMTA2MTMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZzEpIi8+PHRleHQgeD0iNjAiIHk9IjEyMCIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSI3MiIgZm9udC1mYW1pbHk9IkFyaWFsIj5DbGFzcyBEcmlsbGluZzwvdGV4dD48L3N2Zz4K";
const image2 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTFhMWEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0YjRiNGIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZzIpIi8+PHRleHQgeD0iNjAiIHk9IjEyMCIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSI3MiIgZm9udC1mYW1pbHk9IkFyaWFsIj5LaWRzIFNlc3Npb248L3RleHQ+PC9zdmc+Cg==";
const image3 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM1ZjBhMTEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMTEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZzMpIi8+PHRleHQgeD0iNjAiIHk9IjEyMCIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSI3MiIgZm9udC1mYW1pbHk9IkFyaWFsIj5TcGFycmluZzwvdGV4dD48L3N2Zz4K";
const image4 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnNCIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmMWYxZjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmN2Q5ZGQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZzQpIi8+PHRleHQgeD0iNjAiIHk9IjEyMCIgZmlsbD0iIzliMDAwZiIgZm9udC1zaXplPSI3MiIgZm9udC1mYW1pbHk9IkFyaWFsIj5UZWFtIFBob3RvPC90ZXh0Pjwvc3ZnPgo=";
const image5 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnNSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYTBhMGYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNkOTA0MTYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZzUpIi8+PHRleHQgeD0iNjAiIHk9IjEyMCIgZmlsbD0iI2ZmZiIgZm9udC1zaXplPSI3MiIgZm9udC1mYW1pbHk9IkFyaWFsIj5Db21wZXRpdGlvbiBUZWFtPC90ZXh0Pjwvc3ZnPgo=";
const image6 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnNiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmOWY5ZjkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlZmVmZWYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9InVybCgjZzYpIi8+PHRleHQgeD0iNjAiIHk9IjEyMCIgZmlsbD0iIzliMDAwZiIgZm9udC1zaXplPSI3MiIgZm9udC1mYW1pbHk9IkFyaWFsIj5PcGVuIE1hdDwvdGV4dD48L3N2Zz4K";
const galleryItems = [
  { id: "drilling", src: image1, alt: "BJJ drilling class", caption: "Technical drilling sessions" },
  { id: "kids", src: image2, alt: "Kids BJJ class", caption: "Structured kids classes" },
  { id: "sparring", src: image3, alt: "Live sparring rounds", caption: "Controlled sparring rounds" },
  { id: "team-photo", src: image4, alt: "Team photo at the gym", caption: "Community-first gym culture" },
  { id: "competition", src: image5, alt: "Competition-focused training", caption: "Competition team preparation" },
  { id: "open-mat", src: image6, alt: "Sunday open mat training", caption: "Sunday open mat sessions" }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    Container($$renderer2, {
      class: "py-10",
      children: ($$renderer3) => {
        $$renderer3.push(`<section class="space-y-7">`);
        SectionHeading($$renderer3, {
          eyebrow: "Gallery",
          title: "Inside Long Eaton BJJ",
          description: "A snapshot of training, coaching, and community moments across the week."
        });
        $$renderer3.push(`<!----> <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        const each_array = ensure_array_like(galleryItems);
        for (let index = 0, $$length = each_array.length; index < $$length; index++) {
          let item = each_array[index];
          $$renderer3.push(`<button type="button" class="group overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm"><div class="aspect-[3/2] overflow-hidden"><img${attr("src", item.src)}${attr("alt", item.alt)} class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"/></div> <p class="px-4 py-3 text-sm font-semibold text-zinc-800">${escape_html(item.caption)}</p></button>`);
        }
        $$renderer3.push(`<!--]--></div></section>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
