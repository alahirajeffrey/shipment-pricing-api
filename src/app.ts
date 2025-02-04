import mongoose from "mongoose";
import { config } from "./config";
import app from "./server";

async () => {
  mongoose
    .connect(config.MONGO_URI)
    .then(() => {
      "Mongodb connected";
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    });
};

app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}`);
});
