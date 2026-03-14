<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import { SITE_NAME } from '$lib/config/site'

  export let status: number

  $: isNotFound = status === 404
  $: title = isNotFound ? 'Page Not Found' : 'Something Went Wrong'
  $: message =
"Looks like this page tapped out."
</script>

<svelte:head>
  <title>{title} | {SITE_NAME}</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Container class="py-20 sm:py-28">
  {#if isNotFound}
    <section class="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div class="bg-zinc-950 px-8 py-10 text-center sm:px-12">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">Error {status}</p>
        <h1 class="mt-3 text-4xl font-bold text-white sm:text-5xl">404</h1>
        <p class="mt-4 text-lg text-zinc-200">This page has gone full ninja and slipped out the side door.</p>
      </div>

      <div class="px-8 py-10 text-center sm:px-12">
        <h2 class="text-2xl font-bold text-zinc-950 sm:text-3xl">{title}</h2>
        <p class="mt-4 text-base text-zinc-700">{message}</p>

        <div class="mt-8 grid gap-4 text-left sm:grid-cols-3">
          <Card class="border-red-100 bg-red-50/70 p-5">
            <p class="text-sm font-semibold text-zinc-950">Try a reset</p>
            <p class="mt-2 text-sm text-zinc-700">Head back home and start from a strong base.</p>
          </Card>
          <Card class="border-zinc-200 bg-zinc-50 p-5">
            <p class="text-sm font-semibold text-zinc-950">Pass to the next page</p>
            <p class="mt-2 text-sm text-zinc-700">The timetable and coaches pages are usually the best next move.</p>
          </Card>
          <Card class="border-zinc-200 bg-zinc-50 p-5">
            <p class="text-sm font-semibold text-zinc-950">Need a training partner?</p>
            <p class="mt-2 text-sm text-zinc-700">If something seems broken, send a quick message and we’ll sort it.</p>
          </Card>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back Home</Button>
          <Button href="/timetable" variant="secondary">View Timetable</Button>
          <Button href="/contact" variant="ghost">Report a Broken Link</Button>
        </div>
      </div>
    </section>
  {:else}
    <section class="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm sm:p-12">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">Error {status}</p>
      <h1 class="mt-3 text-3xl font-bold text-zinc-950 sm:text-4xl">{title}</h1>
      <p class="mt-4 text-base text-zinc-700">{message}</p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back Home</Button>
        <Button href="/trial" variant="secondary">Book Trial</Button>
      </div>
    </section>
  {/if}
</Container>
