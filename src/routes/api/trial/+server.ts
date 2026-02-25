import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import type { RequestHandler } from './$types'

type TrialPayload = {
  name?: string
  email?: string
  phone?: string
  classId?: string
}

export const POST: RequestHandler = async ({ request }) => {
  const payload = (await request.json().catch(() => null)) as TrialPayload | null

  if (!payload || !payload.name || !payload.email || !payload.classId) {
    return json({ message: 'Name, email, and class selection are required.' }, { status: 400 })
  }

  const provider = env.TRIAL_PROVIDER || env.CONTACT_PROVIDER || 'log'
  const providerApiKey = env.TRIAL_PROVIDER_API_KEY || env.CONTACT_PROVIDER_API_KEY || ''

  console.log('[trial-submission]', {
    provider,
    hasProviderApiKey: Boolean(providerApiKey),
    name: payload.name,
    email: payload.email,
    phone: payload.phone || null,
    classId: payload.classId,
    receivedAt: new Date().toISOString()
  })

  return json({
    ok: true,
    message: 'Trial request received. We will confirm your class shortly.'
  })
}
