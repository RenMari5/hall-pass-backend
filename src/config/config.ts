import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  mongoUri: process.env.MONGO_URI as string,
  port: process.env.PORT || 8000,
};
