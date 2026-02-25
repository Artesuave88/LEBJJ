import { c as createSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: createSeo({
      title: "Timetable",
      description: "View the full weekly Long Eaton BJJ timetable for adults, kids, teens, ladies, and open mat.",
      path: "/timetable"
    })
  };
};
export {
  load
};
