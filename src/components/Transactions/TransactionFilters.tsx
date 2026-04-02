import { Search, Filter, X, Sparkles } from 'lucide-react';
import { useFinanceStore } from '../../store/useFinanceStore';
import { TransactionType, TransactionCategory } from '../../types';

export const TransactionFilters = () => {
  const {
    searchQuery,
    filterType,
    filterCategory,
    sortBy,
    sortOrder,
    setSearchQuery,
    setFilterType,
    setFilterCategory,
    setSortBy,
    setSortOrder,
    resetFilters,
  } = useFinanceStore();

  const hasActiveFilters = searchQuery || filterType !== 'all' || filterCategory !== 'all';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-soft animate-slide-in">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-primary-500 animate-wiggle" />
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="ml-auto text-sm text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all hover:scale-105 shadow-lg animate-scale-in"
          >
            <X size={14} />
            Clear all
          </button>
        )}
        {!hasActiveFilters && (
          <Sparkles size={16} className="ml-auto text-gray-400 animate-pulse-slow" />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative animate-fade-in stagger-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-gray-400"
          />
        </div>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as TransactionType | 'all')}
          className="animate-fade-in stagger-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer hover:shadow-soft font-medium"
        >
          <option value="all">All Types</option>
          <option value="income">💰 Income</option>
          <option value="expense">💸 Expense</option>
        </select>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value as TransactionCategory | 'all')}
          className="animate-fade-in stagger-3 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer hover:shadow-soft font-medium"
        >
          <option value="all">All Categories</option>
          <option value="salary">💼 Salary</option>
          <option value="freelance">💻 Freelance</option>
          <option value="investment">📈 Investment</option>
          <option value="food">🍔 Food</option>
          <option value="transport">🚗 Transport</option>
          <option value="shopping">🛍️ Shopping</option>
          <option value="utilities">💡 Utilities</option>
          <option value="entertainment">🎬 Entertainment</option>
          <option value="healthcare">🏥 Healthcare</option>
          <option value="education">📚 Education</option>
          <option value="other">📦 Other</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'date' | 'amount')}
          className="animate-fade-in stagger-4 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer hover:shadow-soft font-medium"
        >
          <option value="date">📅 Sort by Date</option>
          <option value="amount">💵 Sort by Amount</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          className="animate-fade-in stagger-4 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer hover:shadow-soft font-medium"
        >
          <option value="desc">⬇️ Descending</option>
          <option value="asc">⬆️ Ascending</option>
        </select>
      </div>
    </div>
  );
};
