import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "$lib/config/site";

export type SeoMeta = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
};

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

type RouteSeoInput = {
  title: string;
  description: string;
  image?: string;
};

const HOME_DESCRIPTION = `${SITE_NAME} - ${SITE_TAGLINE}. ${SITE_DESCRIPTION}`;

const ROUTE_SEO: Record<string, RouteSeoInput> = {
  "/": {
    title: SITE_NAME,
    description: HOME_DESCRIPTION,
  },
  "/timetable": {
    title: "Timetable",
    description:
      "View the full weekly Long Eaton BJJ timetable for adults, kids, teens, ladies, and open mat.",
  },
  "/coaches": {
    title: "Instructors",
    description:
      "Meet the Long Eaton BJJ instructor team and learn about their approach to development.",
  },
  "/kids": {
    title: "Kids BJJ",
    description:
      "A parent-focused overview of our kids and teens BJJ classes, safety standards, and first class expectations.",
  },
  "/gallery": {
    title: "Gallery",
    description:
      "Browse Long Eaton BJJ gallery images from classes, community events, and open mat sessions.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Get in touch with Long Eaton BJJ, view address and opening times, and send us a message.",
  },
  "/trial": {
    title: "Book a Free Trial",
    description:
      "Book your free trial class at Long Eaton BJJ and choose a timetable slot that suits you.",
  },
};

function normalizePath(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

export function createSeo({
  title,
  description,
  path,
  image = "/favicon.png",
}: SeoInput): SeoMeta {
  const normalizedPath = normalizePath(path);
  const canonical = new URL(normalizedPath, SITE_URL).toString();
  const ogImage = new URL(image, SITE_URL).toString();

  return {
    title: title === SITE_NAME ? title : `${title} | ${SITE_NAME}`,
    description,
    canonical,
    ogImage,
  };
}

export function createRouteSeo(path: string): SeoMeta {
  const normalizedPath = normalizePath(path);
  const routeSeo = ROUTE_SEO[normalizedPath];

  if (routeSeo) {
    return createSeo({
      path: normalizedPath,
      ...routeSeo,
    });
  }

  return createSeo({
    title: SITE_NAME,
    description: HOME_DESCRIPTION,
    path: normalizedPath,
  });
}
