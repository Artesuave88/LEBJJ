<script lang="ts">
  import { instructors, offersPrivateSessions, type instructor } from '$lib/data/coaches'
  import Button from '$lib/components/ui/Button.svelte'
  import Badge from '$lib/components/ui/Badge.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'

  let activeInstructor: instructor | null = null

  function openInstructor(selectedInstructor: instructor) {
    activeInstructor = selectedInstructor
  }

  function closeModal() {
    activeInstructor = null
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && activeInstructor) {
      closeModal()
    }
  }
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<Container class="py-10">
  <section class="space-y-7">
    <SectionHeading
      eyebrow="Instructor team"
      title="Experienced instructors, clear instruction"
      description="Our instructors prioritise technical clarity, safe training, and long-term progression for every student. If you want more focused support, you can also enquire about 1-to-1 private sessions with a specific instructor."
    />

    <Card class="border-zinc-200 bg-zinc-50 p-5">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-wide text-red-700">1-to-1 Privates</p>
          <h2 class="mt-2 text-xl font-bold text-zinc-950">Focused coaching with the instructor you want</h2>
          <p class="mt-2 text-sm text-zinc-700">
            Private sessions are a good fit if you want help with specific positions, competition preparation, or a
            more tailored introduction to BJJ. Open an instructor profile below to enquire directly with your preferred coach.
          </p>
        </div>
        <Button href="/contact?inquiry=private">Ask about privates</Button>
      </div>
    </Card>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each instructors as instructorProfile}
        <button type="button" class="text-left" on:click={() => openInstructor(instructorProfile)}>
          <Card class="h-full border-zinc-200 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
            <div class="aspect-[4/5] overflow-hidden rounded-xl border border-zinc-200">
              {#if instructorProfile.photo}
                <img
                  src={instructorProfile.photo}
                  alt={`${instructorProfile.name} portrait`}
                  class="h-full w-full object-cover"
                  style={instructorProfile.photoPosition
                    ? `object-position: ${instructorProfile.photoPosition};`
                    : undefined}
                  loading="lazy"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                />
              {:else}
                <div class="flex h-full w-full items-center justify-center bg-zinc-100 px-4 text-center text-sm font-semibold text-zinc-500">
                  Photo coming soon
                </div>
              {/if}
            </div>
            <h3 class="mt-4 text-lg font-bold text-zinc-950">{instructorProfile.name}</h3>
            <p class="text-sm font-semibold text-red-700">{instructorProfile.beltRank}</p>
            <p class="mt-1 text-sm text-zinc-600">{instructorProfile.role}</p>
            <p class="mt-3 text-sm text-zinc-700">{instructorProfile.shortBio}</p>
          </Card>
        </button>
      {/each}
    </div>
  </section>
</Container>

{#if activeInstructor}
  <div class="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-4 sm:items-center" role="dialog" aria-modal="true">
    <button
      type="button"
      class="absolute inset-0"
      on:click={closeModal}
      aria-label="Close instructor details"
    ></button>

    <div class="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-5 shadow-xl sm:p-7">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="text-sm font-semibold uppercase tracking-wide text-red-700">Instructor profile</p>
          <h3 class="mt-1 text-2xl font-bold text-zinc-950">{activeInstructor.name}</h3>
          <div class="mt-2 flex flex-wrap gap-2">
            <Badge variant="red">{activeInstructor.beltRank}</Badge>
            <Badge>{activeInstructor.role}</Badge>
          </div>
        </div>
        <button type="button" class="rounded-full p-2 text-zinc-500 hover:bg-zinc-100" on:click={closeModal}>
          <span class="sr-only">Close</span>
          ✕
        </button>
      </div>

      <div class="mt-5 grid gap-4 sm:grid-cols-[200px_1fr]">
        {#if activeInstructor.photo}
          <img
            src={activeInstructor.photo}
            alt={`${activeInstructor.name} portrait`}
            class="aspect-[4/5] w-full rounded-xl border border-zinc-200 object-cover"
            style={activeInstructor.photoPosition
              ? `object-position: ${activeInstructor.photoPosition};`
              : undefined}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 200px"
          />
        {:else}
          <div class="flex aspect-[4/5] w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 px-4 text-center text-sm font-semibold text-zinc-500">
            Photo coming soon
          </div>
        {/if}
        <div class="space-y-4">
          <p class="text-sm leading-relaxed text-zinc-700">{activeInstructor.fullBio}</p>
          {#if offersPrivateSessions(activeInstructor.id)}
            <div class="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p class="text-sm font-semibold text-zinc-950">Interested in a 1-to-1 private with {activeInstructor.name}?</p>
              <p class="mt-1 text-sm text-zinc-700">
                Send an enquiry and we can confirm availability, session goals, and the best fit for your level.
              </p>
              <div class="mt-3">
                <Button href={`/contact?inquiry=private&instructor=${activeInstructor.id}`}>Enquire with {activeInstructor.name}</Button>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
