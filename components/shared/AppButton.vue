<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  label?: string
}>()
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-2 rounded-[10px] text-gray-3 px-10 py-4 font-medium duration-200"
    :class="{
      'bg-primary hover:bg-primary/80 active:bg-primary/70':
        !variant || variant === 'primary',
      'bg-secondary hover:bg-secondary-light active:bg-secondary': variant === 'secondary'
    }"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
