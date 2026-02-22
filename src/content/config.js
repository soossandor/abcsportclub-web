import { defineCollection, z } from 'astro:content';

// Itt definiáljuk a "hirek" gyűjtemény szabályait
const hirekCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // A cím kötelező, és szöveg kell legyen
    date: z.date(),    // A dátum kötelező
    category: z.string(), // A kategória kötelező
    excerpt: z.string().optional(), // A rövid leírás (kivonat) opcionális
    thumbnail: z.string().optional(),
  }),
});

// Exportáljuk a szabályt, hogy az Astro használhassa
export const collections = {
  'hirek': hirekCollection,
};