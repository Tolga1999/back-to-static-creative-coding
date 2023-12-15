// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/global.css'],

  runtimeConfig: {
    public: {
      endpoint: process.env.Hygraph_ENDPOINT,
      authToken: process.env.BEARER,
    }
  }
})
