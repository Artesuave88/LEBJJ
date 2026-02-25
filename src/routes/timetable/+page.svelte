<script lang="ts">
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'

  import TimetableGrid from '$lib/components/TimetableGrid.svelte'
  import Badge from '$lib/components/ui/Badge.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
  import {
    matchesAudience,
    matchesGi,
    sortByDayAndTime,
    timetableData,
    type AudienceFilter,
    type GiFilter
  } from '$lib/data/timetable'

  const audienceOptions: AudienceFilter[] = ['All', 'Adults', 'Kids']
  const giOptions: GiFilter[] = ['All', 'Gi', 'No-Gi']

  const storageKey = 'filters:/timetable'

  let audienceFilter: AudienceFilter = 'All'
  let giFilter: GiFilter = 'All'
  let hydrated = false

  onMount(() => {
    if (!browser) return

    const stored = localStorage.getItem(storageKey)
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as { audienceFilter?: AudienceFilter; giFilter?: GiFilter }
        if (parsed.audienceFilter && audienceOptions.includes(parsed.audienceFilter)) {
          audienceFilter = parsed.audienceFilter
        }
        if (parsed.giFilter && giOptions.includes(parsed.giFilter)) {
          giFilter = parsed.giFilter
        }
      } catch {
        // Ignore malformed local storage values
      }
    }

    hydrated = true
  })

  $: filteredClasses = sortByDayAndTime(
    timetableData.filter(
      (item) => matchesAudience(item, audienceFilter) && matchesGi(item, giFilter)
    )
  )

  $: if (browser && hydrated) {
    localStorage.setItem(storageKey, JSON.stringify({ audienceFilter, giFilter }))
  }
</script>

<Container class="py-10">
  <section class="space-y-6">
    <SectionHeading
      eyebrow="Weekly schedule"
      title="Timetable"
      description="Use filters to quickly find adults or kids sessions, and switch between Gi and No-Gi classes."
    />

    <div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Audience</p>
          <div class="flex flex-wrap gap-2">
            {#each audienceOptions as option}
              <button
                type="button"
                class={`rounded-full border px-4 py-2 text-sm font-semibold transition ${audienceFilter === option
                  ? 'border-red-700 bg-red-700 text-white'
                  : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400'}`}
                on:click={() => (audienceFilter = option)}
              >
                {option}
              </button>
            {/each}
          </div>
        </div>

        <div>
          <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Gi filter</p>
          <div class="flex flex-wrap gap-2">
            {#each giOptions as option}
              <button
                type="button"
                class={`rounded-full border px-4 py-2 text-sm font-semibold transition ${giFilter === option
                  ? 'border-red-700 bg-red-700 text-white'
                  : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400'}`}
                on:click={() => (giFilter = option)}
              >
                {option}
              </button>
            {/each}
          </div>
        </div>
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        <Badge variant="red">{filteredClasses.length} classes shown</Badge>
        <Badge>Mobile list on small screens</Badge>
        <Badge>Grid on tablet and desktop</Badge>
      </div>
    </div>

    <TimetableGrid classes={filteredClasses} />
  </section>
</Container>
