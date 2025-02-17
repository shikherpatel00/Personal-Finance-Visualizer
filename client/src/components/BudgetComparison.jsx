import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function BudgetComparison({ budgets, transactions }) {
  const data = budgets.map((budget) => {
    const spent = transactions
      .filter((txn) => txn.category === budget.category)
      .reduce((sum, txn) => sum + txn.amount, 0);

    return { category: budget.category, Budget: budget.amount, Spent: spent };
  });

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Budget vs. Actual Spending</h2>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Budget" fill="#8884d8" />
        <Bar dataKey="Spent" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default BudgetComparison;
