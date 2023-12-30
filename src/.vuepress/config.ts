import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/cdda-guide/",

  locales: {
    "/": {
      lang: "en-US",
      title: "C:DDA Guide",
      description: "A guide for beginners for Cataclysm: Dark Days Ahead",
    },
    "/ru/": {
      lang: "ru-RU",
      title: "C:DDA Гайд",
      description: "Гайд для начинающих для Cataclysm: Dark Days Ahead",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
