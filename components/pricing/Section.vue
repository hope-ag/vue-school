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
    <div class="w-screen overflow-x-hidden">
      <SharedWave1Opaque
        class="absolute top-16 sm:top-48 lg:top-20 w-[200vw] sm:w-full inset-0 h-screen lg:h-auto -left-[80vw] sm:left-0"
      />
      <SharedWave2Opaque
        class="absolute top-[500px] sm:top-[440px] md:top-[600px] lg:top-[440px] w-[200vw] sm:w-full inset-0 -inset-x-6 h-screen lg:h-auto -left-[70vw] sm:left-0"
      />
    </div>
    <div class="content-wrapper relative">
      <h2 class="h1 text-center max-w-2xl mx-auto">
        Discounted <span class="gradient-text">Corporate</span>
        <span class="gradient-text"> Training</span> Bundles
      </h2>
      <div class="grid items-center lg:items-start lg:grid-cols-3 gap-6 pt-32">
        <PricingCard
          v-for="plan in sortedPlans"
          :key="plan.name"
          :plan="plan"
          class="mx-auto w-full lg:mx-0"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
