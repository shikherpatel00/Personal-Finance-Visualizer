import mongoose from "mongoose"

const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }
});

export default mongoose.model("Transaction", TransactionSchema);
