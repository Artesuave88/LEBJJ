import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
  return json({
    ok: true,
    service: 'long-eaton-bjj-site',
    timestamp: new Date().toISOString()
  })
}
