import { Transaction, FinancialSummary } from '../types';
import { startOfMonth, endOfMonth, isWithinInterval, subMonths } from 'date-fns';

export const calculateFinancialSummary = (transactions: Transaction[]): FinancialSummary => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalBalance = totalIncome - totalExpenses;

  // Calculate monthly change
  const now = new Date();
  const currentMonthStart = startOfMonth(now);
  const currentMonthEnd = endOfMonth(now);
  const lastMonthStart = startOfMonth(subMonths(now, 1));
  const lastMonthEnd = endOfMonth(subMonths(now, 1));

  const currentMonthBalance = transactions
    .filter((t) => {
      const date = new Date(t.date);
      return isWithinInterval(date, { start: currentMonthStart, end: currentMonthEnd });
    })
    .reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);

  const lastMonthBalance = transactions
    .filter((t) => {
      const date = new Date(t.date);
      return isWithinInterval(date, { start: lastMonthStart, end: lastMonthEnd });
    })
    .reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);

  const monthlyChange = lastMonthBalance !== 0
    ? ((currentMonthBalance - lastMonthBalance) / Math.abs(lastMonthBalance)) * 100
    : 0;

  return {
    totalBalance,
    totalIncome,
    totalExpenses,
    monthlyChange,
  };
};

export const getCategorySpending = (transactions: Transaction[]) => {
  const expenses = transactions.filter((t) => t.type === 'expense');
  const categoryMap = new Map<string, number>();

  expenses.forEach((t) => {
    const current = categoryMap.get(t.category) || 0;
    categoryMap.set(t.category, current + t.amount);
  });

  return Array.from(categoryMap.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};

export const getMonthlyTrend = (transactions: Transaction[]) => {
  const monthMap = new Map<string, { income: number; expenses: number }>();

  transactions.forEach((t) => {
    const month = new Date(t.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const current = monthMap.get(month) || { income: 0, expenses: 0 };

    if (t.type === 'income') {
      current.income += t.amount;
    } else {
      current.expenses += t.amount;
    }

    monthMap.set(month, current);
  });

  return Array.from(monthMap.entries())
    .map(([month, data]) => ({
      month,
      income: data.income,
      expenses: data.expenses,
      balance: data.income - data.expenses,
    }))
    .sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime())
    .slice(-6);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
