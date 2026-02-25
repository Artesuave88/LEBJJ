<script lang="ts">
  export let as: keyof HTMLElementTagNameMap = 'div'
  let className = ''
  export { className as class }
</script>

<svelte:element this={as} class={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
  <slot />
</svelte:element>
