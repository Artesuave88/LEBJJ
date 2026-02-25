<script lang="ts">
  let className = ''
  export { className as class }
</script>

<div class={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ${className}`}>
  <slot />
</div>
