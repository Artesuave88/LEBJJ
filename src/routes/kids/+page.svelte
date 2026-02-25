<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import Container from '$lib/components/ui/Container.svelte'
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte'

  const benefits = [
    'Confidence and resilience through progressive skill development',
    'Improved focus, listening, and respectful behaviour',
    'Safe physical activity with qualified coaching and supervision',
    'Positive social environment with clear class structure'
  ]

  const checklist = ['Water bottle', 'Comfortable training clothes', 'Flip-flops for matside', 'A positive attitude']
</script>

<Container class="py-10">
  <section class="space-y-8">
    <SectionHeading
      eyebrow="For parents"
      title="Kids Brazilian Jiu-Jitsu"
      description="Our kids and teens classes are designed to be safe, structured, and confidence-building from the very first session."
    />

    <div class="grid gap-4 md:grid-cols-2">
      <Card class="border-zinc-200">
        <h3 class="text-xl font-bold text-zinc-950">Benefits for children</h3>
        <ul class="mt-4 space-y-2 text-sm text-zinc-700">
          {#each benefits as benefit}
            <li class="flex items-start gap-2">
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></span>
              <span>{benefit}</span>
            </li>
          {/each}
        </ul>
      </Card>

      <Card class="border-zinc-200">
        <h3 class="text-xl font-bold text-zinc-950">What to expect in the first class</h3>
        <p class="mt-3 text-sm text-zinc-700">
          We welcome your child, introduce key rules, and keep the first class simple and supportive. Coaches explain each drill clearly and pair students carefully by age and experience.
        </p>
        <h4 class="mt-5 text-base font-semibold text-zinc-950">What to bring</h4>
        <ul class="mt-2 space-y-2 text-sm text-zinc-700">
          {#each checklist as item}
            <li class="flex items-start gap-2">
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </Card>
    </div>

    <Card class="border-zinc-200">
      <h3 class="text-xl font-bold text-zinc-950">Safety and safeguarding</h3>
      <p class="mt-3 text-sm leading-relaxed text-zinc-700">
        Student wellbeing comes first. Classes are supervised, structured, and coached with age-appropriate intensity.
        We emphasise respectful behaviour, controlled practice, and clear communication with parents.
      </p>
    </Card>

    <div class="rounded-2xl border border-red-100 bg-red-50 p-6">
      <h3 class="text-xl font-bold text-zinc-950">Ready to try a class?</h3>
      <p class="mt-2 text-sm text-zinc-700">Book a free trial and we will help your child settle in from day one.</p>
      <Button href="/trial" class="mt-4">Book a Free Trial</Button>
    </div>
  </section>
</Container>
