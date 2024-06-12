// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/fonts"],
  fonts: {
    // You can provide overrides for individual families
    families: [
      // only resolve this font with the `google` provider
      { name: 'Sometype Mono', provider: 'google' },
    ],
  }
})
