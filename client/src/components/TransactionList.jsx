import { deleteTransaction } from "../api";

const TransactionList = ({ transactions, onTransactionDeleted }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-2">Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li key={t._id} className="flex justify-between items-center p-2 border-b">
            <span className="font-medium">{t.amount} ₹ - {t.date} - {t.description} ({t.category})</span>
            <button onClick={async () => { await deleteTransaction(t._id); onTransactionDeleted(); }} 
              className="bg-red-500 text-whi  te p-1 rounded hover:bg-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
