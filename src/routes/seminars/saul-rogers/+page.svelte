<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import { ADDRESS_LINES, MAPS_URL } from '$lib/config/site'
  import seminarHero from '$lib/assets/saul-rogers-seminar-hero.png'

  type RegistrationForm = {
    name: string
    email: string
    phone: string
  }

  type RegistrationErrors = Partial<Record<keyof RegistrationForm, string>>

  let form: RegistrationForm = { name: '', email: '', phone: '' }
  let errors: RegistrationErrors = {}
  let submitState: 'idle' | 'submitting' | 'success' | 'error' = 'idle'
  let statusMessage = ''

  function validateForm(): boolean {
    const nextErrors: RegistrationErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
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
      const response = await fetch('/api/seminar-registration', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form)
      })
      const payload = (await response.json()) as { message?: string }
      if (!response.ok) throw new Error(payload.message || 'Unable to send your registration right now.')

      submitState = 'success'
      statusMessage = payload.message || 'Your registration request has been sent.'
      form = { name: '', email: '', phone: '' }
      errors = {}
    } catch (error) {
      submitState = 'error'
      statusMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
    }
  }
</script>

<Container class="py-8 sm:py-12">
  <section class="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 text-white shadow-xl">
    <div class="grid lg:grid-cols-[1.35fr_0.65fr]">
      <div class="relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <img src={seminarHero} alt="Saul Rogers wearing a gi and holding his European Jiu-Jitsu gold medal" class="absolute inset-0 h-full w-full object-cover object-center opacity-80" loading="eager" />
        <div class="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/65 to-zinc-950/10"></div>
        <div class="absolute -left-24 top-12 h-72 w-72 rounded-full bg-red-700/20 blur-3xl"></div>
        <div class="relative">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-red-400">Long Eaton BJJ presents</p>
          <h1 class="mt-5 max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Saul Rogers
          </h1>
          <p class="mt-5 text-xl font-semibold text-zinc-300 sm:text-2xl">No-Gi seminar · Attacking the front headlock</p>
          <p class="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Three hours of No-Gi technical instruction, live drilling, sparring and coaching, followed by time for questions.
            Open to everyone and suitable for all levels.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <Button href="#register" size="lg">Request a place</Button>
            <Button
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              size="lg"
              variant="ghost"
              class="directions-button border-white/50 bg-black/45 !text-white"
            >
              Get directions <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>
      </div>

      <div class="grid content-center gap-6 border-t border-zinc-800 bg-white/[0.04] p-6 sm:p-10 lg:border-l lg:border-t-0">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">Date</p>
          <p class="mt-1 text-xl font-bold">Saturday 12 September 2026</p>
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">Time</p>
          <p class="mt-1 text-xl font-bold">11:15am · Three hours</p>
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">Price</p>
          <p class="mt-1 text-3xl font-bold">£25 <span class="text-base font-medium text-zinc-400">in advance</span></p>
          <p class="mt-1 text-sm text-zinc-400">£30 on the door, subject to available places</p>
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-400">Venue</p>
          <div class="mt-1 text-sm leading-relaxed text-zinc-300">
            {#each ADDRESS_LINES as line}<p>{line}</p>{/each}
          </div>
        </div>
      </div>
    </div>
  </section>
</Container>

<style>
  :global(.directions-button:hover) {
    background: rgb(0 0 0 / 0.65) !important;
    border-color: rgb(255 255 255 / 0.7) !important;
    color: white !important;
  }
</style>

<Container class="pb-16">
  <section class="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
    <div class="space-y-4">
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">What to expect</p>
      <h2 class="text-3xl font-bold text-zinc-950">A focused afternoon of practical No-Gi grappling</h2>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {#each ['Detailed technique and concepts', 'Live drilling', 'Sparring with coaching and feedback', 'Questions and answers'] as item}
          <div class="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 text-sm font-semibold text-zinc-800">
            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-50 text-red-700">✓</span>
            {item}
          </div>
        {/each}
      </div>
    </div>

    <div id="register" class="scroll-mt-28">
    <Card class="border-zinc-200 p-6 sm:p-8">
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">Registration</p>
      <h2 class="mt-2 text-3xl font-bold text-zinc-950">Request your place</h2>
      <p class="mt-2 text-sm leading-relaxed text-zinc-600">
        No payment is taken on this website. Door entry is £30 and subject to available places. The club will contact
        you to confirm availability and arrange advance payment.
        Your place is not confirmed until you hear from us.
      </p>

      {#if submitState === 'success'}
        <div class="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5" role="status">
          <h3 class="font-bold text-green-900">Registration request received</h3>
          <p class="mt-1 text-sm text-green-800">{statusMessage}</p>
          <Button class="mt-4" variant="secondary" on:click={() => (submitState = 'idle')}>Register another person</Button>
        </div>
      {:else}
        <form class="mt-6 grid gap-4" on:submit={handleSubmit} novalidate>
          <label class="grid gap-2 text-sm font-medium text-zinc-800">
            Name
            <input class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500" type="text" autocomplete="name" bind:value={form.name} aria-invalid={Boolean(errors.name)} />
            {#if errors.name}<span class="text-xs text-red-700">{errors.name}</span>{/if}
          </label>
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-medium text-zinc-800">
              Email
              <input class="h-11 min-w-0 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500" type="email" autocomplete="email" bind:value={form.email} aria-invalid={Boolean(errors.email)} />
              {#if errors.email}<span class="text-xs text-red-700">{errors.email}</span>{/if}
            </label>
            <label class="grid gap-2 text-sm font-medium text-zinc-800">
              Phone <span class="font-normal text-zinc-500">(optional)</span>
              <input class="h-11 min-w-0 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500" type="tel" autocomplete="tel" bind:value={form.phone} />
            </label>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <Button type="submit" disabled={submitState === 'submitting'}>
              {submitState === 'submitting' ? 'Sending…' : 'Request a place'}
            </Button>
            {#if submitState === 'error'}<p class="text-sm font-medium text-red-700" role="alert">{statusMessage}</p>{/if}
          </div>
        </form>
      {/if}
    </Card>
    </div>
  </section>
</Container>
