/* eslint-disable no-undef */
import { config } from "dotenv";

// Ensure the correct .env file is loaded based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || "development"}.local`;
console.log(`Loading environment variables from: ${envFile}`);

config({ path: envFile });

export const PORT = process.env.PORT || 5500; // Fallback to 5500 if undefined

console.log(`Server running on port: ${PORT}`);
