<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  label?: string
}>()
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-2 rounded-[10px] text-gray-3 px-10 py-4 font-medium"
    :class="{
      'bg-primary': !variant || variant === 'primary',
      'bg-secondary': variant === 'secondary'
    }"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
