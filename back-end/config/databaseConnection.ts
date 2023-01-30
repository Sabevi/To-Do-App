import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB is connected");
    
  } catch (err: any) {
    console.error(err.message);
  }
};