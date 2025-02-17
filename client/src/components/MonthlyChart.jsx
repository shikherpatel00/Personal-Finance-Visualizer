import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const MonthlyChart = ({ transactions }) => {
  const data = transactions.reduce((acc, txn) => {
    const month = new Date(txn.date).toLocaleString("default", { month: "short" });
    acc[month] = (acc[month] || 0) + txn.amount;
    return acc;
  }, {});

  const chartData = Object.entries(data).map(([month, amount]) => ({ month, amount }));

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-2">Monthly Expenses</h2>
      <BarChart width={500} height={300} data={chartData} className="mx-auto">
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default MonthlyChart;
