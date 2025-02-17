import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// Transactions API
export const getTransactions = async () => axios.get(`${BASE_URL}/transactions`);
export const addTransaction = async (transaction) => axios.post(`${BASE_URL}/transactions`, transaction);
export const deleteTransaction = async (id) => axios.delete(`${BASE_URL}/transactions/${id}`);

export const getBudgets = async () => axios.get(`${BASE_URL}/budget`);
export const setBudget = async (budget) => axios.post(`${BASE_URL}/budget`, budget);
