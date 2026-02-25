import { c as createSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: createSeo({
      title: "Gallery",
      description: "Browse Long Eaton BJJ gallery images from classes, community events, and open mat sessions.",
      path: "/gallery"
    })
  };
};
export {
  load
};
