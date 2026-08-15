<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
  import { formatTime, sortByDayAndTime, timetableData, type WeekDay } from '$lib/data/timetable'

  export let data: { today: WeekDay }

  let name = ''
  let classId = ''
  let website = ''
  let submitState: 'idle' | 'submitting' | 'success' | 'error' = 'idle'
  let statusMessage = ''

  const classOptions = sortByDayAndTime(timetableData.filter((item) => item.day === data.today))

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    statusMessage = ''

    if (!name.trim() || !classId) {
      submitState = 'error'
      statusMessage = 'Enter your name and choose the class you are attending.'
      return
    }

    submitState = 'submitting'

    try {
      const response = await fetch('/api/check-in', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, classId, website })
      })
      const payload = (await response.json()) as { message?: string }

      if (!response.ok) throw new Error(payload.message || 'Unable to check in right now.')

      submitState = 'success'
      statusMessage = payload.message || 'You are checked in. Enjoy the class!'
      name = ''
      classId = ''
      website = ''
    } catch (error) {
      submitState = 'error'
      statusMessage = error instanceof Error ? error.message : 'Unable to check in right now.'
    }
  }
</script>

<svelte:head>
  <meta name="robots" content="noindex, nofollow, noarchive" />
</svelte:head>

<Container class="py-10">
  <section class="mx-auto max-w-2xl space-y-8">
    <SectionHeading
      eyebrow="Class attendance"
      title="Check into class"
      description="Enter your name and select the class you are attending today."
    />

    <Card class="border-zinc-200 p-6 sm:p-8">
      {#if submitState === 'success'}
        <div class="rounded-2xl border border-green-200 bg-green-50 p-6 text-center" role="status">
          <div class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-700 text-white">
            <svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path d="m5 12 4 4L19 6" />
            </svg>
          </div>
          <h2 class="mt-4 text-2xl font-bold text-zinc-950">Check-in complete</h2>
          <p class="mt-2 text-sm font-medium text-green-800">{statusMessage}</p>
          <Button class="mt-6" type="button" on:click={() => (submitState = 'idle')}>Check in another person</Button>
        </div>
      {:else}
        <form class="grid gap-6" on:submit={handleSubmit} novalidate>
          <label class="grid gap-2 text-sm font-semibold text-zinc-800">
            Your full name
            <input
              class="h-14 w-full rounded-xl border border-zinc-300 px-4 text-lg outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
              type="text"
              bind:value={name}
              autocomplete="name"
              maxlength="100"
              placeholder="Enter your name"
              disabled={submitState === 'submitting'}
            />
          </label>

          <label class="grid gap-2 text-sm font-semibold text-zinc-800">
            {data.today}'s class
            <select
              class="h-14 w-full rounded-xl border border-zinc-300 bg-white px-4 text-base outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
              bind:value={classId}
              disabled={submitState === 'submitting'}
            >
              <option value="">Choose your class</option>
              {#each classOptions as item}
                <option value={item.id}>{formatTime(item.start)} - {item.title}</option>
              {/each}
            </select>
          </label>

          <label class="hidden" aria-hidden="true">
            Website
            <input type="text" bind:value={website} tabindex="-1" autocomplete="off" />
          </label>

          <Button type="submit" class="min-h-14 text-base" disabled={submitState === 'submitting'}>
            {submitState === 'submitting' ? 'Checking in...' : 'Check into class'}
          </Button>

          {#if submitState === 'error'}
            <p class="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800" role="alert">
              {statusMessage}
            </p>
          {/if}
        </form>
      {/if}
    </Card>

    <p class="text-center text-xs text-zinc-500">
      Your check-in is used only to maintain the club's attendance records.
    </p>
  </section>
</Container>
