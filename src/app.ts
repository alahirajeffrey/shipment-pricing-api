import mongoose from "mongoose";
import { config } from "./config";
import app from "./server";

// Connect to MongoDB
mongoose
  .connect(config.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server only after successful connection
    app.listen(config.PORT, () => {
      console.log(`Server running on http://localhost:${config.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
