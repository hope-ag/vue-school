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
  <section class="content-wrapper mt-16 sm:mt-20 md:mt-28">
    <div class="container p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="text text-center lg:text-left">
        <h2
          class="font-medium text-base sm:text-lg md:text-2xl bg-gradient-to-r from-primary to-secondary-light text-transparent bg-clip-text mb-3"
        >
          YOUR #1 SOURCE OF VUE.JS COURSES
        </h2>
        <h3 class="font-bold text-4xl sm:text-5xl md:text-6xl">
          <span class="bg-gradient-to-r from-primary to-secondary-light bg-clip-text">
            Full Stack
            <span class="text-transparent">Vue</span>
          </span>
          <span
            class="bg-gradient-to-r from-primary to-secondary-light text-transparent bg-clip-text"
          >
            Training
          </span>
          Solutions
        </h3>
      </div>

      <dl class="stats flex gap-6 justify-between">
        <StatsSingleItem v-for="stat in stats" :key="stat.type" v-bind="stat" />
      </dl>
    </div>
  </section>
</template>
