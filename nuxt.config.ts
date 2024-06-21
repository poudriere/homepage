// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/specific.css"],
  modules: ["@nuxt/fonts", '@vesp/nuxt-fontawesome', "@nuxt/ui"],
  fonts: {
    // You can provide overrides for individual families
    families: [
      // only resolve this font with the `google` provider
      { name: 'Sometype Mono', provider: 'google' },
    ],
  },
  fontawesome: {
    icons: {
	    solid: ["triangle-exclamation"]
    }
  },
  colorMode: {
    preference: 'light'
  }
})