import { S as SITE_URL } from "../../../chunks/site.js";
const GET = async () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", SITE_URL).toString()}
`;
  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
};
export {
  GET
};
