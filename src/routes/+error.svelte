<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import { SITE_NAME } from '$lib/config/site'

  export let error: App.Error
  export let status: number

  $: isNotFound = status === 404
  $: title = isNotFound ? 'Page Not Found' : 'Something Went Wrong'
  $: message = isNotFound
    ? "The page you requested does not exist or has moved."
    : error?.message || 'An unexpected error occurred while loading this page.'
</script>

<svelte:head>
  <title>{title} | {SITE_NAME}</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Container class="py-20 sm:py-28">
  <section class="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm sm:p-12">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">Error {status}</p>
    <h1 class="mt-3 text-3xl font-bold text-zinc-950 sm:text-4xl">{title}</h1>
    <p class="mt-4 text-base text-zinc-700">{message}</p>

    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <Button href="/">Back Home</Button>
      <Button href="/trial" variant="secondary">Book Trial</Button>
    </div>
  </section>
</Container>
