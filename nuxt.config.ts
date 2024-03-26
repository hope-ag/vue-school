// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  eslint: {},
  image: {},
  googleFonts: {
    families: {
      Rubik: [300, 400, 500, 600, 700, 800, 900]
    }
  }
})
