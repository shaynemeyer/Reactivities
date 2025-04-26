import { z } from "zod";

export const activitySchema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(2, { message: "Title is required" })
    .max(100, { message: "Title should be less than 100 characters" }),
  description: z
    .string()
    .min(2, { message: "Description is required" })
    .max(250, { message: "Description should be less than 250 characters" }),
  category: z
    .string()
    .min(2, { message: "Category is required" })
    .max(50, { message: "Category should be less than 50 characters" }),
  date: z.coerce.date({ message: "Date is required" }),
  location: z.object({
    venue: z.string().min(2, { message: "Venue is required" }),
    city: z.string().optional(),
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
  }),
});

export type ActivitySchema = z.infer<typeof activitySchema>;
