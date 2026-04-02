import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Transaction, UserRole, TransactionType, TransactionCategory } from '../types';
import { mockTransactions } from '../data/mockData';

interface FinanceState {
  transactions: Transaction[];
  userRole: UserRole;
  darkMode: boolean;
  searchQuery: string;
  filterType: TransactionType | 'all';
  filterCategory: TransactionCategory | 'all';
  sortBy: 'date' | 'amount';
  sortOrder: 'asc' | 'desc';
  
  // Actions
  setUserRole: (role: UserRole) => void;
  toggleDarkMode: () => void;
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  updateTransaction: (id: string, transaction: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setFilterType: (type: TransactionType | 'all') => void;
  setFilterCategory: (category: TransactionCategory | 'all') => void;
  setSortBy: (sortBy: 'date' | 'amount') => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  resetFilters: () => void;
}

export const useFinanceStore = create<FinanceState>()(
  persist(
    (set) => ({
      transactions: mockTransactions,
      userRole: 'admin',
      darkMode: false,
      searchQuery: '',
      filterType: 'all',
      filterCategory: 'all',
      sortBy: 'date',
      sortOrder: 'desc',

      setUserRole: (role) => set({ userRole: role }),
      
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      
      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [
            {
              ...transaction,
              id: Date.now().toString(),
            },
            ...state.transactions,
          ],
        })),
      
      updateTransaction: (id, updatedTransaction) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === id ? { ...t, ...updatedTransaction } : t
          ),
        })),
      
      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
      
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      setFilterType: (type) => set({ filterType: type }),
      
      setFilterCategory: (category) => set({ filterCategory: category }),
      
      setSortBy: (sortBy) => set({ sortBy }),
      
      setSortOrder: (order) => set({ sortOrder: order }),
      
      resetFilters: () =>
        set({
          searchQuery: '',
          filterType: 'all',
          filterCategory: 'all',
          sortBy: 'date',
          sortOrder: 'desc',
        }),
    }),
    {
      name: 'finance-storage',
    }
  )
);
