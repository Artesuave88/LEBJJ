import { p as public_env } from "./shared-server.js";
const SITE_NAME = "Long Eaton BJJ";
const SITE_DESCRIPTION = "Long Eaton BJJ offers beginner-friendly Brazilian Jiu-Jitsu classes for adults, kids, teens, ladies, and open mat sessions.";
const SITE_URL = public_env.PUBLIC_SITE_URL?.trim() || "https://example.com";
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/timetable", label: "Timetable" },
  { href: "/pricing", label: "Pricing" },
  { href: "/coaches", label: "Coaches" },
  { href: "/kids", label: "Kids" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];
const ADDRESS_LINES = [
  "Unit A2 West End Mills",
  "Leopold Street",
  "Long Eaton, Derbyshire",
  "England, United Kingdom"
];
const FULL_ADDRESS = "Unit A2 West End Mills, Leopold Street, Long Eaton, Derbyshire, England, United Kingdom";
const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(FULL_ADDRESS)}`;
const WHATSAPP_E164 = "447765990501";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`;
const PHONE_TEL = "+447765990501";
const PHONE_LABEL = "07765 990501";
const INSTAGRAM_URL = "https://www.instagram.com/longeatonbjj/?hl=en";
const FACEBOOK_URL = "https://www.facebook.com/LongEatonBJJ/?locale=en_GB";
const OPENING_TIMES = [
  "Monday: 5:00 PM - 8:30 PM",
  "Tuesday: 4:30 PM - 8:00 PM",
  "Wednesday: 5:00 PM - 8:30 PM",
  "Thursday: 4:30 PM - 8:00 PM",
  "Friday: 6:15 PM - 7:15 PM",
  "Saturday: 9:00 AM - 12:30 PM",
  "Sunday: 9:00 AM - 11:00 AM (Open Mat)"
];
export {
  ADDRESS_LINES as A,
  FACEBOOK_URL as F,
  INSTAGRAM_URL as I,
  MAPS_URL as M,
  NAV_LINKS as N,
  OPENING_TIMES as O,
  PHONE_TEL as P,
  SITE_URL as S,
  WHATSAPP_URL as W,
  SITE_NAME as a,
  SITE_DESCRIPTION as b,
  PHONE_LABEL as c
};
