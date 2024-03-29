<script setup lang="ts">
const plans: globalThis.PricingItem[] = [
  {
    name: 'Basic',
    id: 'basic',
    description: 'Includes 1 year access to:',
    price: 5000,
    features: [
      {
        enabled: true,
        name: 'All Video Courses'
      },
      {
        enabled: true,
        name: 'Vue.Js Master class'
      },
      {
        enabled: true,
        name: 'Developer assist Slack channel'
      },
      {
        enabled: false,
        name: 'Live Weekly QnA'
      },
      {
        enabled: false,
        name: '1 x ws ticket per license'
      }
    ]
  },
  {
    name: 'Professional',
    id: 'professional',
    description: 'Includes 1 year access to:',
    price: 5000,
    featuredCourse: {
      title: 'Enough time to watch:',
      description: 'The Vue 3 Masterclass',
      image: '/featured-course.png'
    },
    features: [
      {
        enabled: true,
        name: 'All Video Courses'
      },
      {
        enabled: true,
        name: 'Vue.Js Master class'
      },
      {
        enabled: true,
        name: 'Developer assist Slack channel'
      },
      {
        enabled: true,
        name: 'Live Weekly QnA'
      },
      {
        enabled: true,
        name: '1 x ws ticket per license'
      }
    ]
  },
  {
    name: 'Basic',
    id: 'basic2',
    description: 'Includes 1 year access to:',
    price: 5000,
    features: [
      {
        enabled: true,
        name: 'All Video Courses'
      },
      {
        enabled: true,
        name: 'Vue.Js Master class'
      },
      {
        enabled: true,
        name: 'Developer assist Slack channel'
      },
      {
        enabled: true,
        name: 'Live Weekly QnA'
      },
      {
        enabled: true,
        name: '4 x ws ticket per license'
      }
    ]
  }
]
</script>

<template>
  <section class="relative mt-[120px] sm:mt-[140px] lg:mt-[200px]">
    <SharedWave1Opaque class="absolute top-28 sm:top-48 lg:top-20 w-full inset-0" />
    <SharedWave2Opaque class="absolute top-[440px] left-0 w-full inset-0 -inset-x-6" />
    <div class="content-wrapper relative">
      <div class="container p-4">
        <h2 class="h1 text-center max-w-2xl mx-auto">
          Discounted <span class="gradient-text">Corporate</span>
          <span class="gradient-text"> Training</span> Bundles
        </h2>
        <div class="grid items-center lg:items-start lg:grid-cols-3 gap-6 pt-32">
          <PricingCard v-for="plan in plans" :key="plan.name" :plan="plan" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
