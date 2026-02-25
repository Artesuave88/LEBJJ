import { a as SITE_NAME, b as SITE_DESCRIPTION } from "../../chunks/site.js";
import { c as createSeo } from "../../chunks/seo.js";
const load = () => {
  return {
    seo: createSeo({
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      path: "/"
    })
  };
};
export {
  load
};
