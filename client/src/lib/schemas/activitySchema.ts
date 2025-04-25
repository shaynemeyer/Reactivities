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
  date: z.string().min(2, { message: "Date is required" }),
  city: z
    .string()
    .min(2, { message: "City is required" })
    .max(75, { message: "City should be less than 75 characters" }),
  venue: z.string().optional(),
});

export type ActivitySchema = z.infer<typeof activitySchema>;
