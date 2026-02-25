<script lang="ts">
  export let href: string | null = null
  export let target: string | undefined = undefined
  export let rel: string | undefined = undefined
  export let type: 'button' | 'submit' | 'reset' = 'button'
  export let disabled = false
  export let variant: 'primary' | 'secondary' | 'ghost' = 'primary'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  let className = ''
  export { className as class }

  const variantClasses = {
    primary:
      'border-transparent bg-red-700 text-white hover:bg-red-800 focus-visible:ring-red-500 disabled:bg-red-300',
    secondary:
      'border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 focus-visible:ring-zinc-500 disabled:text-zinc-400',
    ghost:
      'border-transparent bg-transparent text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-400 disabled:text-zinc-400'
  }

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-base'
  }

  $: classes = `inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
</script>

{#if href}
  <a href={href} target={target} rel={rel} class={classes} aria-disabled={disabled}>
    <slot />
  </a>
{:else}
  <button type={type} class={classes} disabled={disabled}>
    <slot />
  </button>
{/if}
