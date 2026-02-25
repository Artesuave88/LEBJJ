import { S as SITE_URL } from "../../../chunks/site.js";
const staticPages = ["/", "/timetable", "/pricing", "/coaches", "/kids", "/gallery", "/contact", "/trial"];
const GET = async () => {
  const lastmod = (/* @__PURE__ */ new Date()).toISOString();
  const urlEntries = staticPages.map((path) => {
    const loc = new URL(path, SITE_URL).toString();
    return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  }).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}</urlset>`;
  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8"
    }
  });
};
export {
  GET
};
