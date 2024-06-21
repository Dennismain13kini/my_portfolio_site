import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: z.string(),
      draft: z.boolean().optional().default(false),
      category: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
};
