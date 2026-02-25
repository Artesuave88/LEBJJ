import { h as head, b as bind_props, e as escape_html, a as attr, g as getContext, s as store_get, c as slot, u as unsubscribe_stores, d as ensure_array_like, f as attr_class } from "../../chunks/index2.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Container } from "../../chunks/Container.js";
import { a as SITE_NAME, b as SITE_DESCRIPTION, N as NAV_LINKS, P as PHONE_TEL, W as WHATSAPP_URL, I as INSTAGRAM_URL, F as FACEBOOK_URL, c as PHONE_LABEL } from "../../chunks/site.js";
import { c as createSeo } from "../../chunks/seo.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
function SeoHead($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let seo = $$props["seo"];
    head("1t153bb", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(seo.title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", seo.description)}/> <link rel="canonical"${attr("href", seo.canonical)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", seo.title)}/> <meta property="og:description"${attr("content", seo.description)}/> <meta property="og:url"${attr("content", seo.canonical)}/> <meta property="og:image"${attr("content", seo.ogImage)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", seo.title)}/> <meta name="twitter:description"${attr("content", seo.description)}/> <meta name="twitter:image"${attr("content", seo.ogImage)}/>`);
    });
    bind_props($$props, { seo });
  });
}
const logo = "data:image/png;base64,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";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let seo, currentPath, showMobileStickyBar, year;
    let data = $$props["data"];
    const fallbackSeo = createSeo({ title: SITE_NAME, description: SITE_DESCRIPTION, path: "/" });
    seo = data.seo ?? fallbackSeo;
    currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    showMobileStickyBar = ["/", "/timetable", "/pricing"].includes(currentPath);
    year = (/* @__PURE__ */ new Date()).getFullYear();
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&amp;family=Work+Sans:wght@400;500;600;700&amp;display=swap"/>`);
    });
    SeoHead($$renderer2, { seo });
    $$renderer2.push(`<!----> <div class="min-h-screen pb-24 md:pb-0"><header class="sticky top-0 z-40 border-b border-red-100/80 bg-white/95 backdrop-blur">`);
    Container($$renderer2, {
      class: "flex h-20 items-center justify-between gap-4",
      children: ($$renderer3) => {
        $$renderer3.push(`<a href="/" class="flex items-center gap-3"><img${attr("src", logo)} alt="Long Eaton BJJ logo" class="h-11 w-11 rounded-lg border border-zinc-200"/> <span class="text-lg font-bold text-zinc-950">Long Eaton BJJ</span></a> <nav class="hidden items-center gap-6 md:flex"><!--[-->`);
        const each_array = ensure_array_like(NAV_LINKS);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let link = each_array[$$index];
          $$renderer3.push(`<a${attr("href", link.href)}${attr_class(`text-sm font-semibold transition hover:text-red-700 ${currentPath === link.href ? "text-red-700" : "text-zinc-700"}`)}>${escape_html(link.label)}</a>`);
        }
        $$renderer3.push(`<!--]--></nav> <div class="hidden items-center gap-2 md:flex">`);
        Button($$renderer3, {
          href: "/trial",
          size: "sm",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Book a Free Trial`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Button($$renderer3, {
          href: `tel:${PHONE_TEL}`,
          size: "sm",
          variant: "secondary",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->Call`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></header> <main><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> <footer class="border-t border-zinc-200 bg-white py-10">`);
    Container($$renderer2, {
      class: "flex flex-col items-start justify-between gap-4 text-sm text-zinc-600 md:flex-row md:items-center",
      children: ($$renderer3) => {
        $$renderer3.push(`<p>© ${escape_html(year)} ${escape_html(SITE_NAME)}. All rights reserved.</p> <div class="flex items-center gap-4"><a${attr("href", WHATSAPP_URL)} target="_blank" rel="noreferrer" class="hover:text-red-700">WhatsApp</a> <a${attr("href", INSTAGRAM_URL)} target="_blank" rel="noreferrer" class="hover:text-red-700">Instagram</a> <a${attr("href", FACEBOOK_URL)} target="_blank" rel="noreferrer" class="hover:text-red-700">Facebook</a> <a${attr("href", `tel:${PHONE_TEL}`)} class="hover:text-red-700">${escape_html(PHONE_LABEL)}</a></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></footer> `);
    if (showMobileStickyBar) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur md:hidden"><div class="mx-auto flex w-full max-w-6xl items-center gap-2">`);
      Button($$renderer2, {
        href: "/trial",
        class: "flex-1",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Book Trial`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        href: `tel:${PHONE_TEL}`,
        variant: "secondary",
        class: "flex-1",
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Call`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _layout as default
};
