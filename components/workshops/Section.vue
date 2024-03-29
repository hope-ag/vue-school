<script setup lang="ts">
const workshope = [
  {
    title: 'Vue.js Fundamentals',
    description:
      'A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...'
  },
  {
    title: 'Vue 3 and Composition API',
    description:
      'Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...'
  },
  {
    title: 'Vue 3 and Composition API',
    description:
      'Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...'
  }
]
</script>

<template>
  <section class="mt-40">
    <div class="content-wrapper mb-16">
      <div class="container p-4 flex flex-col">
        <div class="flex justify-center lg:justify-between items-center">
          <h2 class="text-white font-bold h1 text-center lg:text-left">
            Available workshops
          </h2>
          <SharedAppButton label="See all the workshops" class="hidden lg:flex" />
        </div>
      </div>
    </div>

    <div class="relative group">
      <div class="overflow-x-scroll scroll">
        <div class="content-wrapper">
          <div class="container p-4">
            <div class="workshop-cards flex w-max gap-4 sm:gap-6 pr-4 sm:pr-6">
              <WorkshopsCard
                v-for="workshop in workshope"
                :key="workshop.title"
                v-bind="workshop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center lg:hidden mt-10 sm:mt-14">
      <SharedAppButton label="See all the workshops" />
    </div>
  </section>
</template>

<style scoped></style>
