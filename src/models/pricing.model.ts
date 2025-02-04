import mongoose from "mongoose";
import { ShipmentEnum } from "../common";

const PricingSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ShipmentEnum },
  price: { type: Number, required: true },
});

const Pricing = mongoose.model("Pricing", PricingSchema);

export default Pricing;
