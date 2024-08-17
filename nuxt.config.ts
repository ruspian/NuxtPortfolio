// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // menambahkan plugin/module tailwindcss
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],
  colorMode: {
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: {
        default: 'monokai',
        dark: 'github-dark',
        light: 'github-light',
      },
    },
  },
});
