// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fonts: {
    families: [
      { name: "Fira Sans Condensed", provider: "google" },
      { name: "Open Sans", provider: "google" },
    ],
  },
  image: {
    cloudinary :{
      baseURL: 'https://res.cloudinary.com/dtuexazs1/image/upload'
    }
  }
});
