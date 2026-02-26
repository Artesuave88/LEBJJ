<script lang="ts">
  import '../app.css'

  import SeoHead from '$lib/components/SeoHead.svelte'
  import Button from '$lib/components/ui/Button.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import logo from '$lib/assets/lebjj-logo.png'
  import {
    FACEBOOK_URL,
    INSTAGRAM_URL,
    NAV_LINKS,
    PHONE_LABEL,
    PHONE_TEL,
    SITE_DESCRIPTION,
    SITE_NAME,
    WHATSAPP_URL
  } from '$lib/config/site'
  import { createSeo, type SeoMeta } from '$lib/utils/seo'
  import { page } from '$app/stores'

  export let data: {
    seo?: SeoMeta
  }

  const fallbackSeo = createSeo({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: '/'
  })

  $: seo = data.seo ?? fallbackSeo
  $: currentPath = $page.url.pathname
  $: showMobileStickyBar = ['/', '/timetable', '/pricing'].includes(currentPath)
  $: year = new Date().getFullYear()

  let mobileMenuOpen = false

  $: if (currentPath) {
    mobileMenuOpen = false
  }
</script>

<SeoHead {seo} />

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
  />
</svelte:head>

<div class="min-h-screen pb-24 md:pb-0">
  <header class="sticky top-0 z-40 border-b border-red-100/80 bg-white/95 backdrop-blur">
    <Container class="flex h-20 items-center justify-between gap-4">
      <a href="/" class="flex items-center gap-3">
        <img src={logo} alt="Long Eaton BJJ logo" class="h-11 w-11 rounded-lg border border-zinc-200" />
        <span class="text-lg font-bold text-zinc-950">Long Eaton BJJ</span>
      </a>

      <nav class="hidden items-center gap-6 md:flex">
        {#each NAV_LINKS as link}
          <a
            href={link.href}
            class={`text-sm font-semibold transition hover:text-red-700 ${currentPath === link.href ? 'text-red-700' : 'text-zinc-700'}`}
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <Button href="/trial" size="sm">Book a Free Trial</Button>
        <Button href={`tel:${PHONE_TEL}`} size="sm" variant="secondary">Call</Button>
      </div>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-800 transition hover:bg-zinc-100 md:hidden"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-nav"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        {#if mobileMenuOpen}
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        {:else}
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        {/if}
      </button>
    </Container>

    {#if mobileMenuOpen}
      <div id="mobile-nav" class="border-t border-zinc-200 bg-white md:hidden">
        <Container class="space-y-3 py-3">
          <nav class="flex flex-col gap-1">
            {#each NAV_LINKS as link}
              <a
                href={link.href}
                class={`rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-zinc-100 ${
                  currentPath === link.href ? 'bg-red-50 text-red-700' : 'text-zinc-700'
                }`}
                on:click={() => (mobileMenuOpen = false)}
              >
                {link.label}
              </a>
            {/each}
          </nav>
          <div class="grid grid-cols-2 gap-2">
            <Button href="/trial" size="sm" on:click={() => (mobileMenuOpen = false)}>Book Trial</Button>
            <Button href={`tel:${PHONE_TEL}`} size="sm" variant="secondary" on:click={() => (mobileMenuOpen = false)}
              >Call</Button
            >
          </div>
        </Container>
      </div>
    {/if}
  </header>

  <main>
    <slot />
  </main>

  <footer class="border-t border-zinc-200 bg-white py-10">
    <Container class="flex flex-col items-start justify-between gap-4 text-sm text-zinc-600 md:flex-row md:items-center">
      <p>© {year} {SITE_NAME}. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" class="hover:text-red-700">WhatsApp</a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" class="hover:text-red-700">Instagram</a>
        <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" class="hover:text-red-700">Facebook</a>
        <a href={`tel:${PHONE_TEL}`} class="hover:text-red-700">{PHONE_LABEL}</a>
      </div>
    </Container>
  </footer>

  {#if showMobileStickyBar}
    <div class="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div class="mx-auto flex w-full max-w-6xl items-center gap-2">
        <Button href="/trial" class="flex-1">Book Trial</Button>
        <Button href={`tel:${PHONE_TEL}`} variant="secondary" class="flex-1">Call</Button>
      </div>
    </div>
  {/if}
</div>
