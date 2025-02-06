import { Request, Response } from "express";
import { ZodError } from "zod";
import { calculateShippingValidation, handleZodError } from "../common";
import { Pricing } from "../models";

export const calculateShippingCost = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const validatedData = calculateShippingValidation.parse(req.body);
    const { distance, type, weight } = validatedData;

    const pricing = await Pricing.findOne({ type });
    if (!pricing) return res.status(404).json({ message: "Pricing not found" });

    const cost = pricing.price * weight * distance;

    res.status(200).json({ cost: cost });
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = handleZodError(error);
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }
  }
};
