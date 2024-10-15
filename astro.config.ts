import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import astroLayouts from "astro-layouts";
import codeTitle from "remark-code-title";
import icon from "astro-icon";

// https://astro.build/config
const config = defineConfig({
  site: "https://nofuss.pages.dev/",
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "slack-dark",
    },
    remarkPlugins: [
      [
        astroLayouts,
        {
          default: "@/layouts/Layout.astro",
          "pages/blog/**": "@/layouts/BlogLayout.astro",
        },
      ],
      codeTitle,
    ],
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    icon({
      include: {
        "akar-icons": ["*"],
        charm: ["*"],
        eva: ["*"],
        lucide: ["*"],
        ph: ["*"],
        ri: ["*"],
      },
    }),
  ],
});

export default config;
