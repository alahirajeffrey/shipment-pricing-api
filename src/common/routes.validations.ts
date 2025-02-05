import { z } from "zod";

export const addPricingValidation = z.object({
  type: z.string().min(1, { message: "Type is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
});

export const getPricingValidation = z.object({
  id: z.string().length(24, { message: "Invalid ID format" }), // MongoDB ObjectId is 24 characters
});
