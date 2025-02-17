import { useState } from "react";
import { addTransaction } from "../api";

const categories = ["Food", "Rent", "Shopping", "Travel", "Entertainment", "Others"];

const TransactionForm = ({ onTransactionAdded }) => {
  const [formData, setFormData] = useState({ amount: "", date: "", description: "", category: "Food" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction(formData);
    setFormData({ amount: "", date: "", description: "", category: "Food" });
    onTransactionAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded-lg space-y-3">
      <input type="number" placeholder="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} className="w-full p-2 border rounded-lg" required />
      
      <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full p-2 border rounded-lg" required />
      
      <input type="text" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-2 border rounded-lg" required />

      <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full p-2 border rounded-lg">
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
