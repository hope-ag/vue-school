<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Vue School | The #1 source for learning Vue.js from experts',
  description:
    'Basic to advanced Vue.js training from core team members & industry experts. In-depth lessons with weekly updates on Pinia, Typescript, Vue Use, Laravel, & more',
  ogSiteName: 'Vue School',
  ogUrl: config.baseUrl,
  ogLocale: 'en_EN',
  ogDescription:
    'Basic to advanced Vue.js training from core team members & industry experts. In-depth lessons with weekly updates on Pinia, Typescript, Vue Use, Laravel, & more',
  twitterDescription:
    'Basic to advanced Vue.js training from core team members & industry experts. In-depth lessons with weekly updates on Pinia, Typescript, Vue Use, Laravel, & more'
})
</script>

<template>
  <main class="overflow-x-hidden">
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <PricingSection />
    <WorkshopsSection />
    <FooterSection />
  </main>
</template>
