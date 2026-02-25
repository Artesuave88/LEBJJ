<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
  import { ADDRESS_LINES, MAPS_URL, OPENING_TIMES, PHONE_LABEL, PHONE_TEL, WHATSAPP_URL } from '$lib/config/site'

  type ContactForm = {
    name: string
    email: string
    phone: string
    message: string
  }

  type ContactErrors = Partial<Record<keyof ContactForm, string>>

  let form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  let errors: ContactErrors = {}
  let submitState: 'idle' | 'submitting' | 'success' | 'error' = 'idle'
  let statusMessage = ''

  function validateEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  function validateForm(): boolean {
    const nextErrors: ContactErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    if (form.email && !validateEmail(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!form.message.trim()) nextErrors.message = 'Please include a short message.'

    errors = nextErrors
    return Object.keys(nextErrors).length === 0
  }

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    submitState = 'idle'
    statusMessage = ''

    if (!validateForm()) return

    submitState = 'submitting'

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const payload = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to submit the form right now.')
      }

      submitState = 'success'
      statusMessage = payload.message || 'Thanks. We have received your message.'
      form = { name: '', email: '', phone: '', message: '' }
      errors = {}
    } catch (error) {
      submitState = 'error'
      statusMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
    }
  }
</script>

<Container class="py-10">
  <section class="space-y-8">
    <SectionHeading
      eyebrow="Contact"
      title="Get in touch"
      description="Send us a message and we will help you choose the right class for your level."
    />

    <div class="grid gap-4 lg:grid-cols-2">
      <Card class="border-zinc-200">
        <h3 class="text-xl font-bold text-zinc-950">Visit the gym</h3>
        <div class="mt-3 space-y-1 text-sm text-zinc-700">
          {#each ADDRESS_LINES as line}
            <p>{line}</p>
          {/each}
        </div>

        <h4 class="mt-5 font-semibold text-zinc-900">Opening times</h4>
        <ul class="mt-2 space-y-1 text-sm text-zinc-700">
          {#each OPENING_TIMES as slot}
            <li>{slot}</li>
          {/each}
        </ul>

        <div class="mt-5 flex flex-wrap gap-2">
          <Button href={MAPS_URL} target="_blank" rel="noreferrer">Open map</Button>
          <Button href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="secondary">WhatsApp</Button>
          <Button href={`tel:${PHONE_TEL}`} variant="secondary">Call {PHONE_LABEL}</Button>
        </div>
      </Card>

      <Card class="border-zinc-200">
        <div class="aspect-video rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4">
          <div class="flex h-full flex-col items-center justify-center gap-2 text-center">
            <p class="text-sm font-semibold text-zinc-800">Map embed placeholder</p>
            <p class="text-xs text-zinc-600">Replace with Google Maps iframe when ready.</p>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" class="text-sm font-semibold text-red-700 hover:underline">
              Open in Google Maps
            </a>
          </div>
        </div>
      </Card>
    </div>

    <Card class="border-zinc-200">
      <h3 class="text-xl font-bold text-zinc-950">Send us a message</h3>

      <form class="mt-4 grid gap-4" on:submit={handleSubmit} novalidate>
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="grid gap-2 text-sm font-medium text-zinc-800">
            Name
            <input
              class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500"
              type="text"
              bind:value={form.name}
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
            />
            {#if errors.name}<span class="text-xs text-red-700">{errors.name}</span>{/if}
          </label>

          <label class="grid gap-2 text-sm font-medium text-zinc-800">
            Email
            <input
              class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500"
              type="email"
              bind:value={form.email}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
            />
            {#if errors.email}<span class="text-xs text-red-700">{errors.email}</span>{/if}
          </label>
        </div>

        <label class="grid gap-2 text-sm font-medium text-zinc-800">
          Phone (optional)
          <input
            class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500"
            type="tel"
            bind:value={form.phone}
            placeholder="07765 990501"
          />
        </label>

        <label class="grid gap-2 text-sm font-medium text-zinc-800">
          Message
          <textarea
            class="min-h-32 rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:border-red-500"
            bind:value={form.message}
            placeholder="Tell us which class you are interested in"
            aria-invalid={Boolean(errors.message)}
          ></textarea>
          {#if errors.message}<span class="text-xs text-red-700">{errors.message}</span>{/if}
        </label>

        <div class="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={submitState === 'submitting'}>
            {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>

          {#if submitState === 'success'}
            <p class="text-sm font-medium text-green-700">{statusMessage}</p>
          {:else if submitState === 'error'}
            <p class="text-sm font-medium text-red-700">{statusMessage}</p>
          {/if}
        </div>
      </form>
    </Card>
  </section>
</Container>
