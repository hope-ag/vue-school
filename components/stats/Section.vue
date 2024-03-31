<script setup lang="ts">
defineProps<{
  stats?: globalThis.Stats | null
}>()
</script>

<template>
  <section class="content-wrapper mt-[120px] sm:mt-[140px] md:mt-[180px]">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 lg:gap-14"
    >
      <div class="text text-center lg:text-left">
        <h2 class="font-medium text-base sm:text-lg md:text-2xl gradient-text mb-3">
          YOUR #1 SOURCE OF VUE.JS COURSES
        </h2>
        <h3 class="h1">
          <span class="bg-gradient-to-r from-primary to-secondary-light bg-clip-text">
            Full Stack
            <span class="text-transparent">Vue</span>
          </span>
          <span class="gradient-text"> Training </span>
          Solutions
        </h3>
      </div>

      <p v-if="!stats" class="text-red-500">There was an error getting data</p>
      <dl v-else class="stats flex gap-6 sm:gap-[61px] justify-center lg:justify-end">
        <StatsSingleItem :value="stats.lessons" type="lessons" label="Video Lessons" />
        <StatsSingleItem :value="stats.courses" type="courses" label="Courses" />
        <StatsSingleItem :value="stats.hours" type="hours" label="15 Hours" />
      </dl>
    </div>
  </section>
</template>
