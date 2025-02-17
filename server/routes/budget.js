import express from "express";
import Budget from "../models/Budget.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { category, amount } = req.body;
  try {
    let existingBudget = await Budget.findOne({ category });

    if (existingBudget) {
      // If the budget exists, update the limit by adding the new amount
      existingBudget.amount += amount;
      await existingBudget.save();
      return res.status(200).json(existingBudget);
    }
    else{
      const newBudget = new Budget({ category, amount });
      await newBudget.save();
      res.json(newBudget);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
