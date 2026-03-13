export type Testimonial = {
  id: string;
  name: string;
  type: "Student" | "Parent";
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "lizzie",
    name: "Lizzie.",
    type: "Student",
    quote:
      "I joined the club this summer and it has been the most friendliest BJJ place I’ve been to. It’s great for women to join, everyone is super friendly and the quality of the coaching from the professors is next level.",
  },
  {
    id: "james",
    name: "James",
    type: "Student",
    quote:
      "Ive bee wanting to learn Jiujitsu for years, and I finally bit the bullet and signed up! I can't recommend this place enough. The coaches are all top of their game with good banter, white belts get the help needed to get started the right way and they even do the first session for free. ",
  },

  {
    id: "alaon",
    name: "Alan M.",
    type: "Parent",
    quote:
      "The kids BJJ classes are brilliant! I love the way this gym really works the kids and really does skill them up quickly while keeping it really fun and engaging",
  },
];
