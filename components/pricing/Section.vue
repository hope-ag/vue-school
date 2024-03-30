<script setup lang="ts">
const props = defineProps<{
  plans?: globalThis.PricingItem[] | null
}>()

const weights = {
  basic: 1,
  professional: 2,
  basic2: 3
}
const sortedPlans = computed(() => {
  if (!props.plans) return
  return [...props.plans].sort((a, b) => weights[a.key] - weights[b.key])
})
</script>

<template>
  <section class="relative mt-[120px] sm:mt-[140px] lg:mt-[200px]">
    <SharedWave1Opaque class="absolute top-28 sm:top-48 lg:top-20 w-full inset-0" />
    <SharedWave2Opaque class="absolute top-[440px] left-0 w-full inset-0 -inset-x-6" />
    <div class="content-wrapper relative">
      <h2 class="h1 text-center max-w-2xl mx-auto">
        Discounted <span class="gradient-text">Corporate</span>
        <span class="gradient-text"> Training</span> Bundles
      </h2>
      <div class="grid items-center lg:items-start lg:grid-cols-3 gap-6 pt-32">
        <PricingCard v-for="plan in sortedPlans" :key="plan.name" :plan="plan" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
