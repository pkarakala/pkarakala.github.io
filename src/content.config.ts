import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const externalUrl = z.url({ protocol: /^https$/ });
const assetPath = z.string().regex(/^\/assets\/[^?#]+$/, 'Use a root-relative /assets/ path');
export const workGroups = ['Photonics & optical links', 'ML systems', 'Quantum'] as const;
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    anchorAliases: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).default([]),
    group: z.enum(workGroups),
    summary: z.string().min(1).max(400),
    metric: z.object({ value: z.string().min(1).max(24), label: z.string().min(1).max(90) }).optional(),
    built: z.string().min(1).max(400).optional(),
    evidence: z.object({ statement: z.string().min(1).max(320), label: z.string().min(1).optional(), url: z.union([externalUrl, assetPath]).optional() }).optional(),
    category: z.enum(['Research', 'Coursework', 'Independent project', 'Project']),
    context: z.string().optional(),
    date: z.string().optional(),
    role: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    attribution: z.string().optional(),
    status: z.string().optional(),
    order: z.number().int(),
    featuredOrder: z.number().int().positive().optional(),
    repository: externalUrl.optional(),
    reports: z.array(z.object({ label: z.string().min(1), url: assetPath, hindsight: z.string().min(1).max(600).optional() })).default([]),
    reportHeading: z.string().min(1).optional(),
    related: z.array(z.object({ label: z.string().min(1), url: externalUrl })).default([]),
    cover: z.object({ src: assetPath, alt: z.string().min(1), caption: z.string().min(1), width: z.number().int().positive(), height: z.number().int().positive() }).optional(),
    video: z.object({ src: z.string().regex(/^\/assets\/video\/[^?#]+\.mp4$/), poster: assetPath, duration: z.string().regex(/^\d+:\d{2}$/), width: z.number().int().positive(), height: z.number().int().positive(), description: z.string().min(1) }).optional(),
    draft: z.boolean().default(false),
  }),
});
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.coerce.date(),
    draft: z.boolean().default(true),
  }),
});
export const collections = { work, notes };
