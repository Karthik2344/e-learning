import mongoose from "mongoose";

export const connectDb = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Elearn");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
