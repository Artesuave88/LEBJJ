import { SITE_NAME, SITE_URL } from '$lib/config/site'

export type SeoMeta = {
  title: string
  description: string
  canonical: string
  ogImage: string
}

type SeoInput = {
  title: string
  description: string
  path: string
  image?: string
}

function normalizePath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`
}

export function createSeo({ title, description, path, image = '/favicon.png' }: SeoInput): SeoMeta {
  const normalizedPath = normalizePath(path)
  const canonical = new URL(normalizedPath, SITE_URL).toString()
  const ogImage = new URL(image, SITE_URL).toString()

  return {
    title: title === SITE_NAME ? title : `${title} | ${SITE_NAME}`,
    description,
    canonical,
    ogImage
  }
}
