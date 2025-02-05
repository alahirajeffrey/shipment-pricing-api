import mongoose from "mongoose";
import { ShipmentEnum } from "../common";

const PricingSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: Object.values(ShipmentEnum) },
  price: { type: Number, required: true },
});

export const Pricing = mongoose.model("Pricing", PricingSchema);
