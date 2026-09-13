// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const programs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/programs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Deskripsi singkat 1 baris untuk "siapa yang cocok"
    audience: z.string(),
    image: z.string().optional(),
    iconName: z.string().default("BookOpen"),
    badge: z.string().optional(),
    // Detail program
    duration: z.string(),
    format: z.enum(["Offline", "Online", "Hybrid", "Self-paced"]),
    price: z.string().optional(),
    highlights: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const careers = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/careers" }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      "Manufaktur",
      "Jasa",
      "Perawatan",
      "Konstruksi",
      "Pertanian & Perikanan",
    ]),
    iconName: z.string(),
    image: z.string().optional(),
    salaryRange: z.string(),
    quota: z.enum(["Kuota terbuka", "Kuota terbatas", "Kuota penuh"]),
    description: z.string(),
    responsibilities: z.array(z.string()),
    requirements: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const activities = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/activities" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    quote: z.string().optional(),
    quoteAuthor: z.string().optional(),
    iconName: z.string().default("Camera"),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/testimonials",
  }),
  schema: z.object({
    name: z.string(),
    city: z.string().optional(),
    company: z.string().optional(),
    quote: z.string(),
    type: z.enum(['text', 'video']).default('text'),
    videoUrl: z.string().optional(),
    poster: z.string().optional(),
    photo: z.string().optional(),
    // category tetap ada tapi opsional — dipakai untuk grouping kalau perlu
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  programs,
  careers,
  activities,
  testimonials,
};
