import { useMemo } from 'react';
import { useFinanceStore } from '../store/useFinanceStore';

export const useFilteredTransactions = () => {
  const {
    transactions,
    searchQuery,
    filterType,
    filterCategory,
    sortBy,
    sortOrder,
  } = useFinanceStore();

  return useMemo(() => {
    let filtered = [...transactions];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.description.toLowerCase().includes(query) ||
          t.merchant?.toLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query)
      );
    }

    // Type filter
    if (filterType !== 'all') {
      filtered = filtered.filter((t) => t.type === filterType);
    }

    // Category filter
    if (filterCategory !== 'all') {
      filtered = filtered.filter((t) => t.category === filterCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;

      if (sortBy === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'amount') {
        comparison = a.amount - b.amount;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [transactions, searchQuery, filterType, filterCategory, sortBy, sortOrder]);
};
