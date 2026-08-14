<script lang="ts">
  import seminarHero from '$lib/assets/saul-rogers-seminar-hero.png'
  import { testimonials } from '$lib/data/testimonials'
  import Badge from '$lib/components/ui/Badge.svelte'
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'

  const seminarDetails = [
    'No-Gi seminar',
    'Saturday 12 September',
    '11:15am',
    '£25 advance',
    '£30 on the door · subject to availability',
    'All levels welcome'
  ]

  const features = [
    {
      title: 'Community that keeps you consistent',
      copy: 'Friendly training partners, clear standards, and a room where beginners can grow without ego.'
    },
    {
      title: 'Structured instruction each week',
      copy: 'Every class has a focus, so you always know what you are building and why it matters.'
    },
    {
      title: 'Fundamentals first, then progression',
      copy: 'Strong defensive and positional foundations before advanced layers, giving long-term confidence.'
    },
    {
      title: 'Competition team support',
      copy: 'If you want to compete, we provide instructor-led preparation sessions and practical match strategy.'
    }
  ]
</script>

<Container class="py-8 sm:py-12">
  <section class="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 shadow-xl">
    <img
      src={seminarHero}
      alt="Saul Rogers wearing a gi and holding his European Jiu-Jitsu gold medal"
      class="absolute inset-0 h-full w-full object-cover object-center opacity-80"
      loading="eager"
      sizes="100vw"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/10"></div>

    <div class="relative z-10 px-6 py-14 sm:px-10 sm:py-20 lg:max-w-3xl lg:px-14">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Long Eaton BJJ presents</p>
      <h1 class="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        Saul Rogers
      </h1>
      <p class="mt-3 text-xl font-semibold text-zinc-100 sm:text-2xl">No-Gi seminar · Attacking the front headlock</p>
      <p class="mt-4 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
        A three-hour BJJ seminar covering technical instruction, live drilling, sparring and coaching, followed by time
        for questions.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <Button href="/seminars/saul-rogers#register" size="lg">Request a place</Button>
        <Button
          href="/seminars/saul-rogers"
          size="lg"
          variant="ghost"
          class="homepage-seminar-button border-white/50 bg-black/45 !text-white"
        >
          Seminar details
        </Button>
      </div>

      <div class="mt-8 flex flex-wrap gap-2">
        {#each seminarDetails as detail}
          <Badge variant="dark">{detail}</Badge>
        {/each}
      </div>
    </div>
  </section>
</Container>

<style>
  :global(.homepage-seminar-button:hover) {
    background: rgb(0 0 0 / 0.65) !important;
    border-color: rgb(255 255 255 / 0.7) !important;
    color: white !important;
  }
</style>

<Container class="pb-14">
  <section class="space-y-7 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
    <SectionHeading
      eyebrow="Why train here"
      title="A proven path from first class to confident grappler"
      description="Long Eaton BJJ combines technical instruction with a welcoming team culture. Whether your goal is fitness, self-defence, or competition, the structure is designed to help you improve every week."
    />

    <div class="grid gap-4 sm:grid-cols-2">
      {#each features as feature}
        <Card class="h-full border-zinc-200 p-5">
          <h3 class="text-lg font-semibold text-zinc-950">{feature.title}</h3>
          <p class="mt-2 text-sm text-zinc-600">{feature.copy}</p>
        </Card>
      {/each}
    </div>
  </section>
</Container>

<Container class="pb-16">
  <section class="space-y-6">
    <SectionHeading
      eyebrow="Testimonials"
      title="What students and parents say"
      description="Real feedback from people training with us each week."
    />

    <div class="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
      {#each testimonials as testimonial}
        <Card class="min-w-[85%] snap-start border-zinc-200 p-5 sm:min-w-[60%] md:min-w-0">
          <Badge variant="red">{testimonial.type}</Badge>
          <p class="mt-3 text-sm text-zinc-700">“{testimonial.quote}”</p>
          <p class="mt-4 text-sm font-semibold text-zinc-950">{testimonial.name}</p>
        </Card>
      {/each}
    </div>
  </section>
</Container>
