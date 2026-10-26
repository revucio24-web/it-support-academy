import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lektionen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lektionen' }),
  schema: z.object({
    title: z.string(),
    level: z.union([z.literal(1), z.literal(2)]),
    module: z.number(),
    last_verified: z.coerce.string(),
    windows_version: z.string(),
    schwerpunkt: z.array(z.string()).default([]),
    sources: z.array(z.object({
      url: z.string(),
      abrufdatum: z.coerce.string(),
    })),
  }),
});

export const collections = { lektionen };
