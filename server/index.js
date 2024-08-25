import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import Razorpay from "razorpay";
import cors from "cors";
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";
import paymentRoutes from "./routes/payment.js";
import feedbackRoutes from "./routes/feedback.js";
import adminFeedbackRoutes from "./routes/admin.js";
import newsletterRoutes from "./routes/newsletter.js";

dotenv.config();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);
app.use("/api", paymentRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", adminFeedbackRoutes);
app.use("/api", newsletterRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
  connectDb();
});
