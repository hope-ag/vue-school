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
    'Basic to advanced Vue.js training from core team members & industry experts. In-depth lessons with weekly updates on Pinia, Typescript, Vue Use, Laravel, & more',
  keywords: 'Vue, E-learning, Nuxt, Laravel, Vue School, Nuxt3, Pinia, Vue lessons',
  robots: 'index, follow',
  author: 'Hope Agyaba, Vue School'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

const query = groq`{
  "heroContent": *[_type == "heroContent"],
  "pricingPlan": *[_type == "pricingPlan"],
  "stats": *[_type == "stats"]
}`

const sanity = useSanity()

const { data } = await useAsyncData('articles', () =>
  sanity.fetch<{ 
    heroContent: globalThis.HeroContent[],
    pricingPlan: globalThis.PricingItem[],
    stats: globalThis.Stats[]
  }>(query)
)
</script>

<template>
  <main class="overflow-x-hidden">
    <HeroSection :hero-content="data?.heroContent" />
    <AboutSection />
    <StatsSection :stats="data?.stats" />
    <PricingSection :plans="data?.pricingPlan" />
    <WorkshopsSection />
    <FooterSection />
  </main>
</template>
