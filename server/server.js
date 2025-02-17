import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import transactionRoutes from "./routes/transactions.js";
import budgetRoutes from "./routes/budget.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/transactions", transactionRoutes);
app.use("/api/budget", budgetRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

export default app;  // Export app for serverless
