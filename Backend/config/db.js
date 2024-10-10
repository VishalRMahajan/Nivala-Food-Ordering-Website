import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URI = process.env.DB_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};