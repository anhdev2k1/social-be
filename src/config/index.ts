import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URL as string)
  console.log("Connected to MongoDB successfully!!");

}

export default main;
