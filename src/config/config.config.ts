import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT as string,
  MONGO_URI: process.env.MONGO_URI as string,
};
