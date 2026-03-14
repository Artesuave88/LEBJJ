import type { RequestHandler } from "./$types";
import { SITE_URL } from "$lib/config/site";

export const prerender = true;

export const GET: RequestHandler = async () => {
  const sitemap = new URL("/sitemap.xml", SITE_URL).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;

  return new Response(body, {
    headers: {
      "cache-control": "public, max-age=0, s-maxage=3600",
      "content-type": "text/plain; charset=utf-8",
    },
  });
};
