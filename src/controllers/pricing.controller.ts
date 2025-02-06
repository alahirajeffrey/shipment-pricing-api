import { Request, Response } from "express";
import { Pricing } from "../models";
import {
  addPricingValidation,
  getPricingByTypeValidation,
  getPricingValidation,
  handleZodError,
} from "../common";
import { ZodError } from "zod";

// get pricing by type
export const getPricingByType = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const validatedParams = getPricingByTypeValidation.parse(req.params);
    const pricing = await Pricing.findOne({ type: validatedParams.type });

    if (!pricing) {
      return res.status(404).json({ message: "Pricing not found" });
    }

    return res.status(200).json(pricing);
  } catch (error: any) {
    if (error instanceof ZodError) {
      const errors = handleZodError(error);
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }
    return res
      .status(500)
      .json({ message: "Error fetching pricing", error: error.message });
  }
};

// add pricing controller
export const addPricing = async (req: Request, res: Response): Promise<any> => {
  try {
    const validatedData = addPricingValidation.parse(req.body);

    // check if pricing already exists
    const pricingExists = await Pricing.findOne({ type: validatedData.type });
    if (pricingExists) {
      return res
        .status(400)
        .json({ message: "Pricing already exists for this type" });
    }

    const newPricing = new Pricing(validatedData);
    await newPricing.save();

    return res
      .status(201)
      .json({ message: "Pricing added successfully", data: newPricing });
  } catch (error: any) {
    if (error instanceof ZodError) {
      const errors = handleZodError(error);
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }
    return res
      .status(500)
      .json({ message: "Error adding pricing", error: error.message });
  }
};

// get all pricing controller
export const getAllPricing = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const pricing = await Pricing.find();
    return res.status(200).json(pricing);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Error fetching pricing", error: error.message });
  }
};

// get single pricing controller
export const getPricingById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const validatedParams = getPricingValidation.parse(req.params);
    const pricing = await Pricing.findById(validatedParams.id);

    if (!pricing) {
      return res.status(404).json({ message: "Pricing not found" });
    }

    res.status(200).json(pricing);
  } catch (error: any) {
    if (error instanceof ZodError) {
      const errors = handleZodError(error);
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }
    return res
      .status(500)
      .json({ message: "Error fetching pricing", error: error.message });
  }
};

// update pricing controller
export const updatePricing = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const validatedParams = getPricingValidation.parse(req.params);
    const validatedData = addPricingValidation.partial().parse(req.body); // Allow partial updates

    const updatedPricing = await Pricing.findByIdAndUpdate(
      validatedParams.id,
      validatedData,
      { new: true, runValidators: true }
    );

    if (!updatedPricing) {
      return res.status(404).json({ message: "Pricing not found" });
    }

    return res
      .status(200)
      .json({ message: "Pricing updated successfully", data: updatedPricing });
  } catch (error: any) {
    if (error instanceof ZodError) {
      const errors = handleZodError(error);
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }
    return res
      .status(500)
      .json({ message: "Error updating pricing", error: error.message });
  }
};

// delete pricing controller
export const deletePricing = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const validatedParams = getPricingValidation.parse(req.params);

    const deletedPricing = await Pricing.findByIdAndDelete(validatedParams.id);

    if (!deletedPricing) {
      return res.status(404).json({ message: "Pricing not found" });
    }

    return res.status(200).json({ message: "Pricing deleted successfully" });
  } catch (error: any) {
    if (error instanceof ZodError) {
      const errors = handleZodError(error);
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }
    return res
      .status(500)
      .json({ message: "Error deleting pricing", error: error.message });
  }
};
