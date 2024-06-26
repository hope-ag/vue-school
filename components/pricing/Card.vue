<script setup lang="ts">
const BasicPlanIcon = defineAsyncComponent(
  () => import('@/components/icons/BasicPlan.vue')
)
const ProfessionalPlanIcon = defineAsyncComponent(
  () => import('@/components/icons/ProfessionalPlan.vue')
)
const BasicPlan2Icon = defineAsyncComponent(
  () => import('@/components/icons/BasicPlan2.vue')
)

const props = defineProps<{
  plan: globalThis.PricingItem
}>()

const selected = ref(12)

const icon = computed(() => {
  switch (props.plan.key) {
    case 'basic':
      return BasicPlanIcon
    case 'professional':
      return ProfessionalPlanIcon
    case 'basic2':
      return BasicPlan2Icon
    default:
      return 'div'
  }
})

const featuredCourse = {
  title: 'Enough time to watch:',
  description: 'The Vue 3 Masterclass',
  image: '/featured-course.png'
}
</script>

<template>
  <div
    class="bg-gradient-to-b from-white/20 hover:from-white/40 duration-300 to-transparent p-px rounded-[30px] h-max max-w-[640px] hover:-translate-y-1"
  >
    <div class="p-6 sm:py-10 rounded-[30px] bg-surface-light/90">
      <div class="flex items-center gap-4 mb-10">
        <component :is="icon" class="flex-shrink-0" />
        <h3 class="font-bold text-[22px]">{{ plan.name }}</h3>
      </div>

      <p class="text-primary mb-6">{{ plan.description }}</p>

      <ul aria-label="List of features" class="space-y-4 mb-6">
        <li
          v-for="feature in plan.features"
          :key="feature.name"
          class="flex items-center gap-2 hover:translate-x-0.5 duration-300"
          :class="!feature.enabled ? 'opacity-20' : ''"
          :aria-label="feature.name"
          :aria-disabled="!feature.enabled"
        >
          <IconsCheck class="text-primary" aria-hidden="true" />
          <span
            class="text-primary flex-1 text-sm"
            :class="feature.emphasized ? 'font-bold' : ''"
            >{{ feature.name }}</span
          >
          <IconsInfo class="text-gray-2" aria-hidden="true" />
        </li>
      </ul>

      <PricingFeaturedCourse
        v-if="plan.key === 'professional'"
        :course="featuredCourse"
        class="mb-6"
      />

      <div class="p-5 rounded-2xl bg-gray-3 mb-10">
        <div class="price mb-6 flex items-center gap-2">
          <span class="text-white font-circular-sans text-4xl font-bold">
            {{ formatCurrency(plan.price, false) + ' ' }}
          </span>
          <span class="text-[#A0A8C3] font-inter"> / seat / month</span>
        </div>

        <h4 class="text-white font-bold mb-4">How many licenses do you need?</h4>
        <div class="mb-4">
          <SharedSlider
            id="licenses"
            v-model="selected"
            :min="5"
            :max="20"
            aria-label="Number of licenses"
            class="w-full"
          />
          <div aria-hidden="true" class="flex justify-between mt-4 text-sm text-gray-2">
            <span>5</span>
            <span>20</span>
          </div>
        </div>
        <div
          aria-label="Number of selected seats and discount"
          class="flex items-center justify-between"
        >
          <div class="px-3.5 py-1 bg-[#0E0E10]/20 rounded-lg">
            <p aria-label="seats" class="flex items-center gap-2">
              <NuxtImg
                src="/people.svg"
                height="16"
                width="19"
                alt="seats icon"
                aria-hidden="true"
              />
              <span class="font-bold text-2xl text-[#E8E6E6]">
                {{ selected }}
              </span>
              <span class="text-[#979FAD]">seats</span>
            </p>
          </div>
          <p aria-label="discount" class="text-primary font-medium">26% discount</p>
        </div>
      </div>

      <SharedAppButton label="Start Learning" class="w-full" />
      <NuxtLink to="/" class="text-primary block text-center mt-6 font-medium">
        Refer your manager
      </NuxtLink>
    </div>
  </div>
</template>
