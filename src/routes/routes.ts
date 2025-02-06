import express from "express";
import {
  addPricing,
  getPricingById,
  getAllPricing,
  updatePricing,
  deletePricing,
  getPricingByType,
} from "../controllers";
import { calculateShippingCost } from "../controllers/shipment.controller";

const router = express.Router();

router.post("/pricing", addPricing);
router.get("/pricing/type/:type", getPricingByType);
router.get("/pricing/:id", getPricingById);
router.get("/pricing", getAllPricing);
router.patch("/pricing/:id", updatePricing);
router.delete("/pricing/:id", deletePricing);
router.post("/shipment/calculate", calculateShippingCost);

export { router };
