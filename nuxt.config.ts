// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@pinia/nuxt", "dayjs-nuxt", "@nuxt/eslint"],
  compatibilityDate: "2024-10-30",
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  eslint: {
    // options here
  },
  nitro: {
    routeRules: {
      "/proxy/**": { proxy: "https://pokemon.fantasticmao.cn/pokemon/**" },
    },
  },
  runtimeConfig: {
    public: {
      baseURL:
        process.env.BASE_URL || "https://pokemon.fantasticmao.cn/pokemon/",
    },
  },
});
