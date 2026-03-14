import { env } from "$env/dynamic/public";

export const SITE_NAME = "Long Eaton BJJ";
export const SITE_TAGLINE = "Brazilian Jiu-Jitsu in Long Eaton, Derbyshire";
export const SITE_DESCRIPTION =
  "Long Eaton BJJ offers beginner-friendly Brazilian Jiu-Jitsu classes for adults, kids, teens, ladies, and open mat sessions.";

export const SITE_URL = env.PUBLIC_SITE_URL?.trim() || "https://example.com";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/timetable", label: "Timetable" },
  { href: "/pricing", label: "Pricing" },
  { href: "/coaches", label: "Instructors" },
  { href: "/kids", label: "Kids" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const ADDRESS_LINES = [
  "Unit A2 West End Mills",
  "Leopold Street",
  "Long Eaton, Derbyshire",
  "England, United Kingdom",
];

export const FULL_ADDRESS =
  "Unit A2 West End Mills, Leopold Street, Long Eaton, Derbyshire, England, United Kingdom";

export const MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(FULL_ADDRESS)}`;

const configuredMapsEmbedUrl = env.PUBLIC_GOOGLE_MAPS_EMBED_URL?.trim();
export const MAPS_EMBED_URL =
  configuredMapsEmbedUrl ||
  `https://www.google.com/maps?output=embed&q=${encodeURIComponent(FULL_ADDRESS)}`;

export const WHATSAPP_NUMBER = "07765 990501";
export const WHATSAPP_E164 = "447765990501";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`;

export const PHONE_TEL = "+447765990501";
export const PHONE_LABEL = "07765 990501";

export const INSTAGRAM_URL = "https://www.instagram.com/longeatonbjj/?hl=en";
export const FACEBOOK_URL =
  "https://www.facebook.com/LongEatonBJJ/?locale=en_GB";

export const OPENING_TIMES = [
  "Monday: 5:00 PM - 8:30 PM",
  "Tuesday: 4:30 PM - 8:00 PM",
  "Wednesday: 5:00 PM - 8:30 PM",
  "Thursday: 4:30 PM - 8:00 PM",
  "Friday: 6:15 PM - 7:15 PM",
  "Saturday: 9:00 AM - 12:30 PM",
  "Sunday: 9:00 AM - 11:00 AM (Open Mat)",
];
