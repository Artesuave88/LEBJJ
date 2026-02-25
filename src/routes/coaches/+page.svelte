<script lang="ts">
  import { coaches, type Coach } from '$lib/data/coaches'
  import Badge from '$lib/components/ui/Badge.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'

  let activeCoach: Coach | null = null

  function openCoach(coach: Coach) {
    activeCoach = coach
  }

  function closeModal() {
    activeCoach = null
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && activeCoach) {
      closeModal()
    }
  }
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<Container class="py-10">
  <section class="space-y-7">
    <SectionHeading
      eyebrow="Coaching team"
      title="Experienced coaches, clear instruction"
      description="Our coaches prioritise technical clarity, safe training, and long-term progression for every student."
    />

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each coaches as coach}
        <button type="button" class="text-left" on:click={() => openCoach(coach)}>
          <Card class="h-full border-zinc-200 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
            <div class="aspect-[4/5] overflow-hidden rounded-xl border border-zinc-200">
              <img
                src={coach.photo}
                alt={`${coach.name} portrait`}
                class="h-full w-full object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
              />
            </div>
            <h3 class="mt-4 text-lg font-bold text-zinc-950">{coach.name}</h3>
            <p class="text-sm font-semibold text-red-700">{coach.beltRank}</p>
            <p class="mt-1 text-sm text-zinc-600">{coach.role}</p>
            <p class="mt-3 text-sm text-zinc-700">{coach.shortBio}</p>
          </Card>
        </button>
      {/each}
    </div>
  </section>
</Container>

{#if activeCoach}
  <div class="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-4 sm:items-center" role="dialog" aria-modal="true">
    <button type="button" class="absolute inset-0" on:click={closeModal} aria-label="Close coach details"></button>

    <div class="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-5 shadow-xl sm:p-7">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wide text-red-700">Coach profile</p>
          <h3 class="mt-1 text-2xl font-bold text-zinc-950">{activeCoach.name}</h3>
          <div class="mt-2 flex flex-wrap gap-2">
            <Badge variant="red">{activeCoach.beltRank}</Badge>
            <Badge>{activeCoach.role}</Badge>
          </div>
        </div>
        <button type="button" class="rounded-full p-2 text-zinc-500 hover:bg-zinc-100" on:click={closeModal}>
          <span class="sr-only">Close</span>
          ✕
        </button>
      </div>

      <div class="mt-5 grid gap-4 sm:grid-cols-[200px_1fr]">
        <img
          src={activeCoach.photo}
          alt={`${activeCoach.name} portrait`}
          class="aspect-[4/5] w-full rounded-xl border border-zinc-200 object-cover"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, 200px"
        />
        <p class="text-sm leading-relaxed text-zinc-700">{activeCoach.fullBio}</p>
      </div>
    </div>
  </div>
{/if}
