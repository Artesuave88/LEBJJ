export type EmailProvider = 'log' | 'resend' | 'sendgrid'

type SendEmailInput = {
  provider: string
  apiKey?: string
  to?: string
  from?: string
  subject: string
  text: string
  replyTo?: string
  logLabel: string
  logPayload: Record<string, unknown>
}

type SendEmailResult = {
  ok: boolean
  message?: string
}

function normalizeProvider(value: string): EmailProvider {
  const normalized = value.trim().toLowerCase()
  if (normalized === 'resend') return 'resend'
  if (normalized === 'sendgrid') return 'sendgrid'
  return 'log'
}

async function sendWithResend(input: {
  apiKey: string
  to: string
  from: string
  subject: string
  text: string
  replyTo?: string
}): Promise<Response> {
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${input.apiKey}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      from: input.from,
      to: [input.to],
      subject: input.subject,
      text: input.text,
      reply_to: input.replyTo || undefined
    })
  })
}

async function sendWithSendgrid(input: {
  apiKey: string
  to: string
  from: string
  subject: string
  text: string
  replyTo?: string
}): Promise<Response> {
  return fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${input.apiKey}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: input.to }] }],
      from: { email: input.from },
      subject: input.subject,
      content: [{ type: 'text/plain', value: input.text }],
      reply_to: input.replyTo ? { email: input.replyTo } : undefined
    })
  })
}

export async function sendEmailNotification(input: SendEmailInput): Promise<SendEmailResult> {
  const provider = normalizeProvider(input.provider)

  if (provider === 'log') {
    console.log(input.logLabel, {
      provider,
      ...input.logPayload
    })
    return { ok: true }
  }

  const to = input.to?.trim() || ''
  if (!to) {
    return {
      ok: false,
      message: 'Missing recipient email. Set TRIAL_TO_EMAIL (or CONTACT_TO_EMAIL) in environment variables.'
    }
  }

  const apiKey = input.apiKey?.trim() || ''
  if (!apiKey) {
    const keyName = provider === 'resend' ? 'RESEND_API_KEY' : 'SENDGRID_API_KEY'
    return {
      ok: false,
      message: `Missing provider API key. Set ${keyName} (or TRIAL_PROVIDER_API_KEY).`
    }
  }

  const defaultFrom = provider === 'resend' ? 'onboarding@resend.dev' : to
  const from = input.from?.trim() || defaultFrom

  try {
    const response =
      provider === 'resend'
        ? await sendWithResend({
            apiKey,
            to,
            from,
            subject: input.subject,
            text: input.text,
            replyTo: input.replyTo
          })
        : await sendWithSendgrid({
            apiKey,
            to,
            from,
            subject: input.subject,
            text: input.text,
            replyTo: input.replyTo
          })

    if (!response.ok) {
      const responseText = await response.text()
      console.error('[email-delivery-error]', {
        provider,
        status: response.status,
        responseText
      })
      return {
        ok: false,
        message: 'Unable to send booking notification right now. Please try again shortly.'
      }
    }

    return { ok: true }
  } catch (error) {
    console.error('[email-delivery-exception]', {
      provider,
      error: error instanceof Error ? error.message : String(error)
    })
    return {
      ok: false,
      message: 'Unable to send booking notification right now. Please try again shortly.'
    }
  }
}
