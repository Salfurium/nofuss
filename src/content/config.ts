import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.date(),
    heroImg: z.string().url().optional(),
    imageAlt: z.string().min(1).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
