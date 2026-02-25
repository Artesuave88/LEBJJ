<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'
  import { memberships, pricingFaqs } from '$lib/data/pricing'

  let openFaqIndex = 0

  function toggleFaq(index: number) {
    openFaqIndex = openFaqIndex === index ? -1 : index
  }
</script>

<Container class="py-10">
  <section class="space-y-8">
    <SectionHeading
      eyebrow="Membership"
      title="Pricing"
      description="Clear options to get started, train consistently, or enrol your child into structured classes."
    />

    <div class="grid gap-4 lg:grid-cols-3">
      {#each memberships as plan}
        <Card class="flex h-full flex-col border-zinc-200">
          <h3 class="text-xl font-bold text-zinc-950">{plan.name}</h3>
          <p class="mt-1 text-2xl font-bold text-red-700">{plan.price}</p>
          <p class="mt-2 text-sm text-zinc-600">{plan.description}</p>

          <ul class="mt-4 flex-1 space-y-2 text-sm text-zinc-700">
            {#each plan.features as feature}
              <li class="flex items-start gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></span>
                <span>{feature}</span>
              </li>
            {/each}
          </ul>

          <Button href="/trial" class="mt-6">{plan.ctaLabel}</Button>
        </Card>
      {/each}
    </div>
  </section>
</Container>

<Container class="pb-16">
  <section class="space-y-5">
    <SectionHeading eyebrow="FAQ" title="Common pricing questions" />

    <div class="space-y-3">
      {#each pricingFaqs as faq, index}
        <Card class="border-zinc-200 p-0">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 p-5 text-left"
            on:click={() => toggleFaq(index)}
            aria-expanded={openFaqIndex === index}
          >
            <span class="font-semibold text-zinc-950">{faq.question}</span>
            <span class="text-2xl leading-none text-red-700">{openFaqIndex === index ? '−' : '+'}</span>
          </button>
          {#if openFaqIndex === index}
            <div class="border-t border-zinc-200 px-5 py-4 text-sm text-zinc-700">{faq.answer}</div>
          {/if}
        </Card>
      {/each}
    </div>
  </section>
</Container>
