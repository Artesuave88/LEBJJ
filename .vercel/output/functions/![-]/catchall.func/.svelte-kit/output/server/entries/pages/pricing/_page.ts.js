import { c as createSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: createSeo({
      title: "Pricing",
      description: "Simple Long Eaton BJJ membership options and FAQs to help you choose the right plan.",
      path: "/pricing"
    })
  };
};
export {
  load
};
