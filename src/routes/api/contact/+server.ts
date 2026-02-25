import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import type { RequestHandler } from './$types'

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export const POST: RequestHandler = async ({ request }) => {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null

  if (!payload || !payload.name || !payload.email || !payload.message) {
    return json({ message: 'Name, email, and message are required.' }, { status: 400 })
  }

  const provider = env.CONTACT_PROVIDER || 'log'
  const providerApiKey = env.CONTACT_PROVIDER_API_KEY || ''

  console.log('[contact-submission]', {
    provider,
    hasProviderApiKey: Boolean(providerApiKey),
    name: payload.name,
    email: payload.email,
    phone: payload.phone || null,
    message: payload.message,
    receivedAt: new Date().toISOString()
  })

  return json({
    ok: true,
    message: 'Thanks. We received your message and will reply soon.'
  })
}
