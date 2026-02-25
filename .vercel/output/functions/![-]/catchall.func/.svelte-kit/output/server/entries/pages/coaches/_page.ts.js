import { c as createSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: createSeo({
      title: "Coaches",
      description: "Meet the Long Eaton BJJ coaching team and learn about their approach to development.",
      path: "/coaches"
    })
  };
};
export {
  load
};
