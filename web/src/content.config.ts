import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 攻略内容集合：全部为英文，存放于 src/content/guides/en/*.md
// verifiedBy 用于标注本地核验人，保持"攻略真实可核验"的信任承诺
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    verifiedBy: z.string(),
  }),
});

export const collections = { guides };
