<script lang="ts">
  import heroImage from '$lib/assets/hero-placeholder.svg'
  import { testimonials } from '$lib/data/testimonials'
  import Badge from '$lib/components/ui/Badge.svelte'
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'

  const trustIndicators = ['Beginner friendly', 'Kids classes', 'Gi & No-Gi']

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
      src={heroImage}
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-70"
      loading="eager"
      sizes="100vw"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-red-900/30"></div>

    <div class="relative z-10 px-6 py-14 sm:px-10 sm:py-20 lg:max-w-3xl lg:px-14">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-red-200">Long Eaton, Derbyshire</p>
      <h1 class="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        Train Brazilian Jiu-Jitsu with Purpose
      </h1>
      <p class="mt-4 max-w-2xl text-base text-zinc-200 sm:text-lg">
        Build confidence, fitness, and real grappling skill with instructor-led guidance that is beginner-friendly and
        progression-focused.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <Button href="/trial" size="lg">Book a Free Trial</Button>
        <Button href="/timetable" size="lg" variant="secondary">View Timetable</Button>
      </div>

      <div class="mt-8 flex flex-wrap gap-2">
        {#each trustIndicators as indicator}
          <Badge variant="dark">{indicator}</Badge>
        {/each}
      </div>
    </div>
  </section>
</Container>

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
