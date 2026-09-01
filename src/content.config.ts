import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared frontmatter shape for both collections. Each Markdown file is one
// entry; "lang" decides which locale it renders under. A French translation
// of a journal entry is a separate file with the same "slug" convention and
// lang: 'fr' — Astro treats them as distinct pages, linked manually for now.
const entrySchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  lang: z.enum(['en', 'fr']),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: entrySchema,
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: entrySchema,
});

export const collections = { journal, blog };
