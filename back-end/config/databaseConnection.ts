//import {Error} from "mongoose"; err: Error. ...
import mongoose from "mongoose";
require('dotenv').config();

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB is connected");
    
  } catch (err: any) {
    console.error(err.message);
  }
};