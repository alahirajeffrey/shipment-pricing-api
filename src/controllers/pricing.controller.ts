// import dependencies
import { Request, Response } from "express";
import { Pricing } from "../models";
import { addPricingValidation, getPricingValidation } from "../common";

// add pricing controller
export const addPricing = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = addPricingValidation.parse(req.body);

    const newPricing = new Pricing(validatedData);
    await newPricing.save();

    res
      .status(201)
      .json({ message: "Pricing added successfully", data: newPricing });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error adding pricing", error: error.message });
  }
};

// get all pricing controller
export const getAllPricing = async (req: Request, res: Response) => {
  try {
    const pricing = await Pricing.find();
    res.status(200).json(pricing);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error fetching pricing", error: error.message });
  }
};

// get single pricing controller
export const getPricingById = async (req: Request, res: Response) => {
  try {
    const validatedParams = getPricingValidation.parse(req.params);
    const pricing = await Pricing.findById(validatedParams.id);

    if (!pricing) {
      return res.status(404).json({ message: "Pricing not found" });
    }

    res.status(200).json(pricing);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error fetching pricing", error: error.message });
  }
};

// update pricing controller
export const updatePricing = async (req: Request, res: Response) => {
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

    res
      .status(200)
      .json({ message: "Pricing updated successfully", data: updatedPricing });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating pricing", error: error.message });
  }
};

// delete pricing controller
export const deletePricing = async (req: Request, res: Response) => {
  try {
    const validatedParams = getPricingValidation.parse(req.params);

    const deletedPricing = await Pricing.findByIdAndDelete(validatedParams.id);

    if (!deletedPricing) {
      return res.status(404).json({ message: "Pricing not found" });
    }

    res.status(200).json({ message: "Pricing deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting pricing", error: error.message });
  }
};
