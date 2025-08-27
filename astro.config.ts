import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import astroLayouts from "astro-layouts";
import codeTitle from "remark-code-title";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
const config = defineConfig({
  site: "https://nofuss.salfurium.eu/",
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
  vite: {
    plugins: [tailwindcss()],
  },
});

export default config;
