import { z } from "zod";
import { ShipmentEnum } from "./shipment.enum";

export const addPricingValidation = z.object({
  type: z.string().min(1, { message: "Type is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
});

export const getPricingValidation = z.object({
  id: z.string().length(24, { message: "Invalid ID format" }), // MongoDB ObjectId is 24 characters
});

export const calculateShippingValidation = z.object({
  weight: z.number().min(0.1, "Weight must be greater than 0"),
  distance: z.number().min(1, "Distance must be at least 1"),
  type: z.enum([ShipmentEnum.GENERAL, ShipmentEnum.FRAGILE], {
    errorMap: () => ({
      message: "Invalid cargo type. Allowed: general, fragile.",
    }),
  }),
});
