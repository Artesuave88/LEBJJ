import type { RequestHandler } from './$types'
import { SITE_URL } from '$lib/config/site'

const staticPages = ['/', '/timetable', '/pricing', '/coaches', '/kids', '/gallery', '/contact', '/trial']

export const prerender = true

export const GET: RequestHandler = async () => {
  const lastmod = new Date().toISOString().split('T')[0]

  const urlEntries = staticPages
    .map((path) => {
      const loc = new URL(path, SITE_URL).toString()
      return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}</urlset>`

  return new Response(xml, {
    headers: {
      'cache-control': 'public, max-age=0, s-maxage=3600',
      'content-type': 'application/xml; charset=utf-8'
    }
  })
}
