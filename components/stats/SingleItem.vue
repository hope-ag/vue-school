<script setup lang="ts">
const VideoIcon = defineAsyncComponent(() => import('@/components/icons/Video.vue'))
const ClockIcon = defineAsyncComponent(() => import('@/components/icons/Clock.vue'))
const BookIcon = defineAsyncComponent(() => import('@/components/icons/Book.vue'))

const props = defineProps<{
  type: 'videos' | 'courses' | 'hours'
  label: string
  value: number
}>()

const icon = computed(() => {
  switch (props.type) {
    case 'videos':
      return VideoIcon
    case 'courses':
      return BookIcon
    case 'hours':
      return ClockIcon
    default:
      return 'div'
  }
})
</script>

<template>
  <div class="flex flex-col-reverse items-center group">
    <dt class="flex items-center gap-2">
      <component :is="icon" class="group-hover:text-primary duration-200" />
      <span class="text-sm">{{ label }}</span>
    </dt>
    <dd class="gradient-text font-medium text-[64px] sm:text-[90px]">
      {{ value }}
    </dd>
  </div>
</template>
