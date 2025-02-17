import { useState } from "react";

const categories = ["Food", "Rent", "Shopping", "Travel", "Entertainment", "Others"];

function BudgetForm({ onAddBudget }) {
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");
  const [operation, setOperation] = useState("add");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !amount) return;
    onAddBudget(category, parseFloat(amount));
    setCategory("Food");
    setAmount("");
    setOperation("add");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg mb-4">
      <h2 className="text-lg font-semibold mb-2">Set Budget</h2>

      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded-lg">
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Add Budget
      </button>
    </form>
  );
}

export default BudgetForm;
