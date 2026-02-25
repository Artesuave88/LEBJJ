import { c as createSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: createSeo({
      title: "Book a Free Trial",
      description: "Book your free trial class at Long Eaton BJJ and choose a timetable slot that suits you.",
      path: "/trial"
    })
  };
};
export {
  load
};
