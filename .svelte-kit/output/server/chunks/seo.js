import { S as SITE_URL, a as SITE_NAME } from "./site.js";
function normalizePath(path) {
  return path.startsWith("/") ? path : `/${path}`;
}
function createSeo({ title, description, path, image = "/favicon.png" }) {
  const normalizedPath = normalizePath(path);
  const canonical = new URL(normalizedPath, SITE_URL).toString();
  const ogImage = new URL(image, SITE_URL).toString();
  return {
    title: title === SITE_NAME ? title : `${title} | ${SITE_NAME}`,
    description,
    canonical,
    ogImage
  };
}
export {
  createSeo as c
};
