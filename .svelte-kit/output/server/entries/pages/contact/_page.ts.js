import { c as createSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: createSeo({
      title: "Contact",
      description: "Get in touch with Long Eaton BJJ, view address and opening times, and send us a message.",
      path: "/contact"
    })
  };
};
export {
  load
};
