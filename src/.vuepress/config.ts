import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/cdda-guide/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Русский",
      description: "vuepress-theme-hope",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
