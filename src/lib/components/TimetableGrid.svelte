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

  $: orderedClasses = sortByDayAndTime(classes)
  $: groupedByDay = weekDays
    .map((day) => ({ day, classes: orderedClasses.filter((item) => item.day === day) }))
    .filter((group) => group.classes.length > 0)
</script>

<div class="space-y-3 md:hidden">
  {#if orderedClasses.length === 0}
    <Card>
      <p class="text-sm text-zinc-600">No classes match your current filters.</p>
    </Card>
  {:else}
    {#each orderedClasses as classItem}
      <Card class="space-y-3 p-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-red-700">{classItem.day}</p>
            <h3 class="mt-1 text-base font-semibold text-zinc-950">{classItem.title}</h3>
          </div>
          <Badge variant={classItem.gi === 'No-Gi' ? 'dark' : 'red'}>{classItem.gi}</Badge>
        </div>
        <p class="text-sm text-zinc-700">
          {formatTime(classItem.start)} - {formatTime(classItem.end)}
          · {formatDuration(classDurationMinutes(classItem))}
        </p>
        <div class="flex flex-wrap gap-2 text-xs text-zinc-600">
          <Badge>{classItem.program}</Badge>
          {#if classItem.location}
            <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">{classItem.location}</span>
          {/if}
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
            <article class="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="font-semibold text-zinc-900">{classItem.title}</p>
                <Badge variant={classItem.gi === 'No-Gi' ? 'dark' : 'red'}>{classItem.gi}</Badge>
              </div>
              <p class="mt-1 text-sm text-zinc-700">
                {formatTime(classItem.start)} - {formatTime(classItem.end)}
                · {formatDuration(classDurationMinutes(classItem))}
              </p>
              <p class="mt-1 text-xs text-zinc-600">{classItem.program}{classItem.location ? ` · ${classItem.location}` : ''}</p>
            </article>
          {/each}
        </div>
      </Card>
    {/each}
  {/if}
</div>
