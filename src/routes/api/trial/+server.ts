import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import { getClassLabelForSelect, timetableData } from '$lib/data/timetable'
import { sendEmailNotification } from '$lib/server/email-delivery'
import type { RequestHandler } from './$types'

type TrialPayload = {
  name?: string
  email?: string
  phone?: string
  classId?: string
}

export const POST: RequestHandler = async ({ request }) => {
  const payload = (await request.json().catch(() => null)) as TrialPayload | null

  const name = payload?.name?.trim() || ''
  const email = payload?.email?.trim() || ''
  const phone = payload?.phone?.trim() || ''
  const classId = payload?.classId?.trim() || ''

  if (!name || !email || !classId) {
    return json({ message: 'Name, email, and class selection are required.' }, { status: 400 })
  }

  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailLooksValid) {
    return json({ message: 'Please provide a valid email address.' }, { status: 400 })
  }

  const selectedClass = timetableData.find((item) => item.id === classId)
  if (!selectedClass) {
    return json({ message: 'Please choose a valid class from the timetable.' }, { status: 400 })
  }

  const provider = env.TRIAL_PROVIDER || env.CONTACT_PROVIDER || 'log'
  const providerApiKey =
    env.TRIAL_PROVIDER_API_KEY ||
    env.CONTACT_PROVIDER_API_KEY ||
    env.RESEND_API_KEY ||
    env.SENDGRID_API_KEY ||
    ''
  const to = env.TRIAL_TO_EMAIL || env.CONTACT_TO_EMAIL || ''
  const from = env.TRIAL_FROM_EMAIL || env.CONTACT_FROM_EMAIL || ''
  const classLabel = getClassLabelForSelect(selectedClass)
  const receivedAt = new Date().toISOString()

  const text = [
    'New free trial booking request',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Class: ${classLabel}`,
    `Class ID: ${classId}`,
    `Submitted: ${receivedAt}`
  ].join('\n')

  const deliveryResult = await sendEmailNotification({
    provider,
    apiKey: providerApiKey,
    to,
    from,
    subject: `Free Trial Booking - ${name}`,
    text,
    replyTo: email,
    logLabel: '[trial-submission]',
    logPayload: {
      hasProviderApiKey: Boolean(providerApiKey),
      name,
      email,
      phone: phone || null,
      classId,
      classLabel,
      receivedAt
    }
  })

  if (!deliveryResult.ok) {
    return json({ message: deliveryResult.message || 'Unable to process trial request right now.' }, { status: 500 })
  }

  return json({
    ok: true,
    message: 'Trial request received. We will confirm your class shortly.'
  })
}
