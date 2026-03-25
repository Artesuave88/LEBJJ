<script lang="ts">
  import { galleryItems } from '$lib/data/gallery'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'

  let activeIndex = -1

  function openLightbox(index: number) {
    activeIndex = index
  }

  function closeLightbox() {
    activeIndex = -1
  }

  function previousImage() {
    activeIndex = activeIndex <= 0 ? galleryItems.length - 1 : activeIndex - 1
  }

  function nextImage() {
    activeIndex = activeIndex >= galleryItems.length - 1 ? 0 : activeIndex + 1
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (activeIndex === -1) return

    if (event.key === 'Escape') closeLightbox()
    if (event.key === 'ArrowLeft') previousImage()
    if (event.key === 'ArrowRight') nextImage()
  }
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<Container class="py-10">
  <section class="space-y-7">
    <SectionHeading
      eyebrow="Gallery"
      title="Inside Long Eaton BJJ"
    />

    <p class="text-sm text-zinc-600">
      Photography by
      <a
        href="https://www.jennymacare.com/"
        target="_blank"
        rel="noreferrer"
        class="font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-700"
      >
        Jenny Macare Photography
      </a>
    </p>

    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {#each galleryItems as item, index}
        <button
          type="button"
          class="group overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm"
          on:click={() => openLightbox(index)}
        >
          <div class="aspect-[3/2] overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              style={item.objectPosition ? `object-position: ${item.objectPosition};` : undefined}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <p class="px-4 py-3 text-sm font-semibold text-zinc-800">{item.caption}</p>
        </button>
      {/each}
    </div>
  </section>
</Container>

{#if activeIndex > -1}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true">
    <button type="button" class="absolute inset-0" on:click={closeLightbox} aria-label="Close lightbox"></button>

    <div class="relative z-10 w-full max-w-5xl">
      <img
        src={galleryItems[activeIndex].src}
        alt={galleryItems[activeIndex].alt}
        class="max-h-[78vh] w-full rounded-xl border border-white/20 object-contain"
        style={galleryItems[activeIndex].objectPosition
          ? `object-position: ${galleryItems[activeIndex].objectPosition};`
          : undefined}
      />

      <div class="mt-3 flex items-center justify-between gap-2 text-white">
        <button type="button" class="rounded-full border border-white/40 px-4 py-2 text-sm" on:click={previousImage}>
          Prev
        </button>
        <p class="text-sm">{galleryItems[activeIndex].caption}</p>
        <button type="button" class="rounded-full border border-white/40 px-4 py-2 text-sm" on:click={nextImage}>
          Next
        </button>
      </div>
    </div>
  </div>
{/if}
