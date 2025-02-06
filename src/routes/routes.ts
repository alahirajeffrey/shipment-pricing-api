import express from "express";
import {
  addPricing,
  getPricingById,
  getAllPricing,
  updatePricing,
  deletePricing,
} from "../controllers";
import { calculateShippingCost } from "../controllers/shipment.controller";

const router = express.Router();

router.post("pricing", addPricing);
router.get("/pricing/:id", getPricingById);
router.get("/pricing", getAllPricing);
router.patch("/pricing/:id", updatePricing);
router.delete("/pricing", deletePricing);
router.post("/shipping/calculate", calculateShippingCost);

export { router };
