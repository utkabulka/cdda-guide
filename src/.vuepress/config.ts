import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/cdda-guide/",

  locales: {
    "/": {
      lang: "en-US",
      title: "C:DDA Guide",
      description: "A Cataclysm: Dark Days Ahead guide for beginners",
    },
    "/ru/": {
      lang: "ru-RU",
      title: "C:DDA Гайд",
      description: "Гайд по Cataclysm: Dark Days Ahead для начинающих",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
