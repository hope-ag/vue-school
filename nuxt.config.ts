// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxtjs/sanity'
  ],
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  eslint: {},
  image: {},
  googleFonts: {
    families: {
      Rubik: [300, 400, 500, 600, 700, 800, 900],
      Inter: [300, 400, 500, 600, 700, 800, 900]
    }
  },
  css: ['~/assets/main.css'],
  runtimeConfig: {
    baseUrl: '',
    public: {
      baseUrl: ''
    }
  },
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET
  }
})
