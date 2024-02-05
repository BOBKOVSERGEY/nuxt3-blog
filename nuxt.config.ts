import { resolve } from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
