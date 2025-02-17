// import { useState, useEffect } from "react";
// import TransactionForm from "./components/TransactionForm";
// import TransactionList from "./components/TransactionList";
// import MonthlyChart from "./components/MonthlyChart";
// import CategoryPieChart from "./components/CategoryPieChart";
// import { getTransactions } from "./api";

// function App() {
//   const [transactions, setTransactions] = useState([]);

//   const fetchTransactions = async () => {
//     const res = await getTransactions();
//     setTransactions(res.data);
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const totalExpenses = transactions.reduce((sum, txn) => sum + txn.amount, 0);

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 bg-green-50">
//       <h1 className="text-2xl font-bold mb-4">Personal Finance Visualizer</h1>


//       {/* Summary Cards */}
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="bg-white p-4 shadow-md rounded-lg text-center">
//           <h2 className="text-lg font-semibold">Total Expenses</h2>
//           <p className="text-xl font-bold">{totalExpenses} ₹</p>
//         </div>
//         <div className="bg-white p-4 shadow-md rounded-lg text-center">
//           <h2 className="text-lg font-semibold">Most Recent</h2>
//           <p>{transactions.length > 0 ? `${transactions[0].amount} ₹ - ${transactions[0].category}` : "No Transactions"}</p>
//         </div>
//       </div>

//       <TransactionForm onTransactionAdded={fetchTransactions} />
//       <TransactionList transactions={transactions} onTransactionDeleted={fetchTransactions} />
//       <MonthlyChart transactions={transactions} />
//       <CategoryPieChart transactions={transactions} />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import MonthlyChart from "./components/MonthlyChart";
import CategoryPieChart from "./components/CategoryPieChart";
import { getTransactions, getBudgets, setBudget } from "./api";
import BudgetForm from "./components/BudgetForm";
import BudgetComparison from "./components/BudgetComparison";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const fetchData = async () => {
    try {
      const [txnRes, budgetRes] = await Promise.all([getTransactions(), getBudgets()]);
      setTransactions(txnRes.data);
      setBudgets(budgetRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddBudget = async (category, amount) => {
    await setBudget({ category, amount });
    fetchData();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Visualizer</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 shadow-md rounded-lg text-center">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-xl font-bold">{transactions.reduce((sum, txn) => sum + txn.amount, 0)} ₹</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-lg text-center">
          <h2 className="text-lg font-semibold">Most Recent</h2>
          <p>{transactions.length > 0 ? `${transactions[0].amount} ₹ - ${transactions[0].category}` : "No Transactions"}</p>
        </div>
      </div>

      <TransactionForm onTransactionAdded={fetchData} />
      <TransactionList transactions={transactions} onTransactionDeleted={fetchData} />
      <MonthlyChart transactions={transactions} />
      <CategoryPieChart transactions={transactions} />
      <BudgetForm onAddBudget={handleAddBudget} />
      <BudgetComparison budgets={budgets} transactions={transactions} />
    </div>
  );
}

export default App;
