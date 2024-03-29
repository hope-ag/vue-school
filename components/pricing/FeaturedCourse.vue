<script setup lang="ts">
defineProps<{
  course: globalThis.FeaturedCourse
}>()
</script>

<template>
  <NuxtLink to="/" class="flex h-20 bg-primary/20 px-4 items-center rounded-[10px]">
    <NuxtImg :src="course.image" :alt="course.title" class="object-cover h-12 w-12" />
    <div class="p-4 flex flex-col">
      <span class="text-gray text-sm">{{ course.title }}</span>
      <p class="text-white text-lg">{{ course.description }}</p>
    </div>
  </NuxtLink>
</template>
