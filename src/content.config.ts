import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    heroImg: z.url().optional(),
    imageAlt: z.string().min(1).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
