import { c as createSeo } from "../../../chunks/seo.js";
const load = () => {
  return {
    seo: createSeo({
      title: "Kids BJJ",
      description: "A parent-focused overview of our kids and teens BJJ classes, safety standards, and first class expectations.",
      path: "/kids"
    })
  };
};
export {
  load
};
