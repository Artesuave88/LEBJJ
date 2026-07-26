<script lang="ts">
  import Badge from '$lib/components/ui/Badge.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import {
    classDurationMinutes,
    formatDuration,
    formatTime,
    sortByDayAndTime,
    weekDays,
    type Program,
    type TimetableClass
  } from '$lib/data/timetable'

  export let classes: TimetableClass[] = []

  const programColours: Record<Program, { surface: string; accent: string; badge: string; dot: string }> = {
    Adults: {
      surface: 'border-red-200 bg-red-50',
      accent: 'border-l-red-600',
      badge: 'border-red-200 bg-red-100 text-red-800',
      dot: 'bg-red-600'
    },
    Ladies: {
      surface: 'border-fuchsia-200 bg-fuchsia-50',
      accent: 'border-l-fuchsia-600',
      badge: 'border-fuchsia-200 bg-fuchsia-100 text-fuchsia-800',
      dot: 'bg-fuchsia-600'
    },
    Kids: {
      surface: 'border-sky-200 bg-sky-50',
      accent: 'border-l-sky-600',
      badge: 'border-sky-200 bg-sky-100 text-sky-800',
      dot: 'bg-sky-600'
    },
    Intermediate: {
      surface: 'border-violet-200 bg-violet-50',
      accent: 'border-l-violet-600',
      badge: 'border-violet-200 bg-violet-100 text-violet-800',
      dot: 'bg-violet-600'
    },
    Fitness: {
      surface: 'border-amber-200 bg-amber-50',
      accent: 'border-l-amber-500',
      badge: 'border-amber-200 bg-amber-100 text-amber-900',
      dot: 'bg-amber-500'
    },
    'Open Mat': {
      surface: 'border-emerald-200 bg-emerald-50',
      accent: 'border-l-emerald-600',
      badge: 'border-emerald-200 bg-emerald-100 text-emerald-800',
      dot: 'bg-emerald-600'
    }
  }

  const programLabels: Record<Program, string> = {
    Adults: 'Adults',
    Ladies: 'Ladies',
    Kids: 'Juniors',
    Intermediate: 'Intermediate',
    Fitness: 'Fitness',
    'Open Mat': 'Open Mat'
  }

  $: orderedClasses = sortByDayAndTime(classes)
  $: groupedByDay = weekDays
    .map((day) => ({ day, classes: orderedClasses.filter((item) => item.day === day) }))
    .filter((group) => group.classes.length > 0)
  $: visiblePrograms = (Object.keys(programColours) as Program[]).filter((program) =>
    orderedClasses.some((item) => item.program === program)
  )

  function giBadgeVariant(gi: TimetableClass['gi']): 'default' | 'red' | 'dark' {
    if (gi === 'No-Gi') return 'dark'
    if (gi === 'Gi') return 'red'
    return 'default'
  }
</script>

{#if visiblePrograms.length > 0}
  <div class="mb-4 flex flex-wrap gap-x-4 gap-y-2" aria-label="Class colour key">
    {#each visiblePrograms as program}
      <div class="flex items-center gap-2 text-sm font-medium text-zinc-700">
        <span class={`h-3 w-3 rounded-full ${programColours[program].dot}`}></span>
        <span>{programLabels[program]}</span>
      </div>
    {/each}
  </div>
{/if}

<div class="space-y-3 md:hidden">
  {#if orderedClasses.length === 0}
    <Card>
      <p class="text-sm text-zinc-600">No classes match your current filters.</p>
    </Card>
  {:else}
    {#each orderedClasses as classItem}
      <Card class={`space-y-3 border-l-4 p-4 ${programColours[classItem.program].accent}`}>
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
        <div class="flex flex-wrap gap-2 text-xs text-zinc-600">
          <Badge class={programColours[classItem.program].badge}>{programLabels[classItem.program]}</Badge>
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
            <article class={`rounded-xl border border-l-4 p-3 ${programColours[classItem.program].surface} ${programColours[classItem.program].accent}`}>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="font-semibold text-zinc-900">{classItem.title}</p>
                <Badge variant={giBadgeVariant(classItem.gi)}>{classItem.gi}</Badge>
              </div>
              <p class="mt-1 text-sm text-zinc-700">
                {formatTime(classItem.start)} - {formatTime(classItem.end)}
                · {formatDuration(classDurationMinutes(classItem))}
              </p>
              <p class="mt-1 text-xs font-medium text-zinc-700">{programLabels[classItem.program]}</p>
            </article>
          {/each}
        </div>
      </Card>
    {/each}
  {/if}
</div>
