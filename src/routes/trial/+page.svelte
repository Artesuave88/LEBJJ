<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
  import {
    getClassLabelForSelect,
    sortByDayAndTime,
    timetableData,
    type TimetableClass
  } from '$lib/data/timetable'

  type TrialForm = {
    name: string
    email: string
    phone: string
    classId: string
  }

  type TrialErrors = Partial<Record<keyof TrialForm, string>>

  const classOptions: TimetableClass[] = sortByDayAndTime(
    timetableData.filter((item) => item.program !== 'Open Mat')
  )

  let form: TrialForm = {
    name: '',
    email: '',
    phone: '',
    classId: ''
  }

  let errors: TrialErrors = {}
  let submitState: 'idle' | 'submitting' | 'success' | 'error' = 'idle'
  let statusMessage = ''

  function validateEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  function validateForm(): boolean {
    const nextErrors: TrialErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    if (form.email && !validateEmail(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!form.classId) nextErrors.classId = 'Please choose a class.'

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
      const response = await fetch('/api/trial', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const payload = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to book trial right now.')
      }

      submitState = 'success'
      statusMessage = payload.message || 'Great, your trial request has been sent.'
      form = { name: '', email: '', phone: '', classId: '' }
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
      eyebrow="Book a Free Trial"
      title="Start your first class"
      description="Pick a session from the timetable and send your details. We will confirm your trial quickly."
    />

    <div class="grid gap-4 md:grid-cols-3">
      <Card class="border-zinc-200">
        <p class="text-sm font-semibold uppercase tracking-wide text-red-700">Step 1</p>
        <h3 class="mt-2 text-lg font-bold text-zinc-950">Choose your class</h3>
        <p class="mt-2 text-sm text-zinc-700">Select a suitable class from the trial form below.</p>
      </Card>
      <Card class="border-zinc-200">
        <p class="text-sm font-semibold uppercase tracking-wide text-red-700">Step 2</p>
        <h3 class="mt-2 text-lg font-bold text-zinc-950">Arrive 10 mins early</h3>
        <p class="mt-2 text-sm text-zinc-700">We will welcome you, explain basics, and get you settled in.</p>
      </Card>
      <Card class="border-zinc-200">
        <p class="text-sm font-semibold uppercase tracking-wide text-red-700">Step 3</p>
        <h3 class="mt-2 text-lg font-bold text-zinc-950">Borrow kit if needed</h3>
        <p class="mt-2 text-sm text-zinc-700">Bring water and comfortable clothes. We can help with training kit options.</p>
      </Card>
    </div>

    <Card class="border-zinc-200">
      <form class="grid gap-4" on:submit={handleSubmit} novalidate>
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

        <div class="grid gap-4 sm:grid-cols-2">
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
            Choose class
            <select
              class="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-red-500"
              bind:value={form.classId}
              aria-invalid={Boolean(errors.classId)}
            >
              <option value="">Select a class</option>
              {#each classOptions as item}
                <option value={item.id}>{getClassLabelForSelect(item)}</option>
              {/each}
            </select>
            {#if errors.classId}<span class="text-xs text-red-700">{errors.classId}</span>{/if}
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={submitState === 'submitting'}>
            {submitState === 'submitting' ? 'Sending...' : 'Book Trial'}
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
