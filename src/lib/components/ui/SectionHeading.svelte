<script lang="ts">
  export let eyebrow = ''
  export let title = ''
  export let description = ''
  let className = ''
  export { className as class }
</script>

<div class={`space-y-3 ${className}`}>
  {#if eyebrow}
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">{eyebrow}</p>
  {/if}
  <h2 class="text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">{title}</h2>
  {#if description}
    <p class="max-w-3xl text-zinc-600">{description}</p>
  {/if}
</div>
