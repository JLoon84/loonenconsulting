// NEW: Define the structure of Markdown articles.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: "**/*.md",
  }),

  schema: z
    .object({
      // Translations of the same article share this identifier.
      translationId: z.string().trim().min(1),

      language: z.enum(["en", "de", "pt-BR"]),

      // Stable URL segment, independent of the Markdown filename.
      urlSlug: z
        .string()
        .regex(
          /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
          "Use lowercase letters, numbers, and single hyphens.",
        ),

      title: z.string().trim().min(1),
      summary: z.string().trim().min(1),

      author: z.literal("Janne Loonen"),

      // Dates are optional for drafts.
      publishedAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),

      // Topic labels should be written in the article's language.
      topics: z.array(z.string().trim().min(1)).default([]),

      // An article stays unpublished unless explicitly marked ready.
      draft: z.boolean().default(true),

      seoDescription: z.string().trim().min(1).optional(),

      // Optional link to the original LinkedIn publication.
      originalUrl: z.string().url().optional(),

      // Optional image with a meaningful localized description.
      cover: z
        .object({
          src: z.string().trim().min(1),
          alt: z.string().trim().min(1),
        })
        .optional(),
    })
    .superRefine((post, context) => {
      // Published articles must have a publication date.
      if (!post.draft && !post.publishedAt) {
        context.addIssue({
          code: "custom",
          path: ["publishedAt"],
          message: "Published articles require a publication date.",
        });
      }

      // An update cannot precede the original publication.
      if (
        post.publishedAt &&
        post.updatedAt &&
        post.updatedAt < post.publishedAt
      ) {
        context.addIssue({
          code: "custom",
          path: ["updatedAt"],
          message: "The updated date cannot precede publication.",
        });
      }
    }),
});

export const collections = {
  posts,
};