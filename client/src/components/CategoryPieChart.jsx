import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40"];

const CategoryPieChart = ({ transactions }) => {
  const categoryData = transactions.reduce((acc, txn) => {
    acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
    return acc;
  }, {});

  const chartData = Object.entries(categoryData).map(([category, amount], index) => ({
    name: category,
    value: amount,
    color: COLORS[index % COLORS.length]
  }));

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-2">Category Breakdown</h2>
      <PieChart width={300} height={300}>
        <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
          {chartData.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default CategoryPieChart;
