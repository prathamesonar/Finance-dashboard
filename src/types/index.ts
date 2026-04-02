export type TransactionType = 'income' | 'expense';

export type TransactionCategory = 
  | 'salary' 
  | 'freelance' 
  | 'investment'
  | 'food' 
  | 'transport' 
  | 'shopping' 
  | 'utilities' 
  | 'entertainment'
  | 'healthcare'
  | 'education'
  | 'other';

export type UserRole = 'viewer' | 'admin';

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
  description: string;
  merchant?: string;
}

export interface FinancialSummary {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
  monthlyChange: number;
}
