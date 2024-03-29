<script setup lang="ts">
const stats = [
  {
    type: 'videos',
    label: 'Video Lessons',
    value: 763
  },
  {
    type: 'courses',
    label: 'Courses',
    value: 40
  },
  {
    type: 'hours',
    label: 'Hours of content',
    value: 64
  }
] as const
</script>

<template>
  <section class="content-wrapper mt-[120px] sm:mt-[140px] md:mt-[180px]">
    <div
      class="container p-4 grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 lg:gap-14"
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

      <dl class="stats flex gap-6 sm:gap-[61px] justify-between lg:justify-end">
        <StatsSingleItem v-for="stat in stats" :key="stat.type" v-bind="stat" />
      </dl>
    </div>
  </section>
</template>
