<script lang="ts">
  import Badge from '$lib/components/ui/Badge.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import {
    classDurationMinutes,
    formatDuration,
    formatTime,
    sortByDayAndTime,
    weekDays,
    type TimetableClass
  } from '$lib/data/timetable'

  export let classes: TimetableClass[] = []

  type ClassColour = 'Adults Gi' | 'Adults No-Gi' | 'Ladies' | 'Juniors' | 'Intermediate' | 'Fitness' | 'Open Mat'

  const classColours: Record<ClassColour, { surface: string; accent: string; badge: string }> = {
    'Adults Gi': {
      surface: 'border-zinc-300 bg-zinc-50',
      accent: 'border-l-zinc-800',
      badge: 'border-zinc-300 bg-zinc-200 text-zinc-900'
    },
    'Adults No-Gi': {
      surface: 'border-emerald-200 bg-emerald-50',
      accent: 'border-l-emerald-600',
      badge: 'border-emerald-200 bg-emerald-100 text-emerald-800'
    },
    Ladies: {
      surface: 'border-purple-200 bg-purple-50',
      accent: 'border-l-purple-700',
      badge: 'border-purple-200 bg-purple-100 text-purple-800'
    },
    Juniors: {
      surface: 'border-sky-200 bg-sky-50',
      accent: 'border-l-sky-600',
      badge: 'border-sky-200 bg-sky-100 text-sky-800'
    },
    Intermediate: {
      surface: 'border-pink-200 bg-pink-50',
      accent: 'border-l-pink-600',
      badge: 'border-pink-200 bg-pink-100 text-pink-800'
    },
    Fitness: {
      surface: 'border-orange-200 bg-orange-50',
      accent: 'border-l-orange-500',
      badge: 'border-orange-200 bg-orange-100 text-orange-900'
    },
    'Open Mat': {
      surface: 'border-red-200 bg-red-50',
      accent: 'border-l-red-600',
      badge: 'border-red-200 bg-red-100 text-red-800'
    }
  }

  function classColour(classItem: TimetableClass): ClassColour {
    if (classItem.program === 'Adults') return classItem.gi === 'Gi' ? 'Adults Gi' : 'Adults No-Gi'
    if (classItem.program === 'Kids') return 'Juniors'
    return classItem.program
  }

  $: orderedClasses = sortByDayAndTime(classes)
  $: groupedByDay = weekDays
    .map((day) => ({ day, classes: orderedClasses.filter((item) => item.day === day) }))
    .filter((group) => group.classes.length > 0)

  function giBadgeVariant(gi: TimetableClass['gi']): 'default' | 'red' | 'dark' {
    if (gi === 'No-Gi') return 'dark'
    if (gi === 'Gi') return 'red'
    return 'default'
  }
</script>

<div class="space-y-3 md:hidden">
  {#if orderedClasses.length === 0}
    <Card>
      <p class="text-sm text-zinc-600">No classes match your current filters.</p>
    </Card>
  {:else}
    {#each orderedClasses as classItem}
      <Card class={`space-y-3 border-l-4 p-4 ${classColours[classColour(classItem)].accent}`}>
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-red-700">{classItem.day}</p>
            <h3 class="mt-1 text-base font-semibold text-zinc-950">{classItem.title}</h3>
          </div>
          <Badge variant={giBadgeVariant(classItem.gi)}>{classItem.gi}</Badge>
        </div>
        <p class="text-sm text-zinc-700">
          {formatTime(classItem.start)} - {formatTime(classItem.end)}
          · {formatDuration(classDurationMinutes(classItem))}
        </p>
        {#if classItem.note}
          <p class="text-xs font-semibold text-amber-800">{classItem.note}</p>
        {/if}
        <div class="flex flex-wrap gap-2 text-xs text-zinc-600">
          <Badge class={classColours[classColour(classItem)].badge}>{classColour(classItem)}</Badge>
        </div>
      </Card>
    {/each}
  {/if}
</div>

<div class="hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
  {#if groupedByDay.length === 0}
    <Card class="md:col-span-2 xl:col-span-3">
      <p class="text-sm text-zinc-600">No classes match your current filters.</p>
    </Card>
  {:else}
    {#each groupedByDay as dayGroup}
      <Card class="space-y-3 p-4">
        <h3 class="text-lg font-bold text-zinc-950">{dayGroup.day}</h3>
        <div class="space-y-3">
          {#each dayGroup.classes as classItem}
            <article class={`rounded-xl border border-l-4 p-3 ${classColours[classColour(classItem)].surface} ${classColours[classColour(classItem)].accent}`}>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="font-semibold text-zinc-900">{classItem.title}</p>
                <Badge variant={giBadgeVariant(classItem.gi)}>{classItem.gi}</Badge>
              </div>
              <p class="mt-1 text-sm text-zinc-700">
                {formatTime(classItem.start)} - {formatTime(classItem.end)}
                · {formatDuration(classDurationMinutes(classItem))}
              </p>
              {#if classItem.note}
                <p class="mt-1 text-xs font-semibold text-amber-800">{classItem.note}</p>
              {/if}
              <p class="mt-1 text-xs font-medium text-zinc-700">{classColour(classItem)}</p>
            </article>
          {/each}
        </div>
      </Card>
    {/each}
  {/if}
</div>
