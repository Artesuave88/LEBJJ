import type { RequestHandler } from './$types'
import { SITE_URL } from '$lib/config/site'

export const GET: RequestHandler = async () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', SITE_URL).toString()}\n`

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8'
    }
  })
}
