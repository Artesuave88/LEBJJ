<script lang="ts">
  export let variant: 'default' | 'red' | 'dark' = 'default'
  let className = ''
  export { className as class }

  const variants = {
    default: 'border-zinc-200 bg-white text-zinc-700',
    red: 'border-red-200 bg-red-50 text-red-700',
    dark: 'border-zinc-700 bg-zinc-900 text-zinc-100'
  }

  $: classes = `inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`
</script>

<span class={classes}>
  <slot />
</span>
