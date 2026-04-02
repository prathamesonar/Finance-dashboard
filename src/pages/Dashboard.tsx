import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';
import { calculateFinancialSummary } from '../utils/calculations';
import { SummaryCard } from '../components/Dashboard/SummaryCard';
import { BalanceTrendChart } from '../components/Dashboard/BalanceTrendChart';
import { SpendingBreakdown } from '../components/Dashboard/SpendingBreakdown';

export const Dashboard = () => {
  const { transactions } = useFinanceStore();
  const summary = calculateFinancialSummary(transactions);

  return (
    <div className="space-y-8">
      {/* Summary Cards with staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="animate-slide-in stagger-1">
          <SummaryCard
            title="Total Balance"
            amount={summary.totalBalance}
            icon={Wallet}
            trend={summary.monthlyChange}
            iconColor="text-white"
            iconBgColor="bg-gradient-to-br from-primary-500 to-primary-700 shadow-primary-500/30"
          />
        </div>
        <div className="animate-slide-in stagger-2">
          <SummaryCard
            title="Total Income"
            amount={summary.totalIncome}
            icon={TrendingUp}
            iconColor="text-white"
            iconBgColor="bg-gradient-to-br from-green-500 to-green-700 shadow-green-500/30"
          />
        </div>
        <div className="animate-slide-in stagger-3">
          <SummaryCard
            title="Total Expenses"
            amount={summary.totalExpenses}
            icon={TrendingDown}
            iconColor="text-white"
            iconBgColor="bg-gradient-to-br from-red-500 to-red-700 shadow-red-500/30"
          />
        </div>
      </div>

      {/* Charts with fade-in animation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="animate-fade-in stagger-2">
          <BalanceTrendChart transactions={transactions} />
        </div>
        <div className="animate-fade-in stagger-3">
          <SpendingBreakdown transactions={transactions} />
        </div>
      </div>

      {/* Quick Stats with slide-up animation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="animate-slide-up stagger-1 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform cursor-pointer">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Transactions</p>
          <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{transactions.length}</p>
        </div>
        <div className="animate-slide-up stagger-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform cursor-pointer">
          <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-1">Avg Transaction</p>
          <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
            ${((summary.totalIncome + summary.totalExpenses) / transactions.length || 0).toFixed(0)}
          </p>
        </div>
        <div className="animate-slide-up stagger-3 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800 hover:scale-105 transition-transform cursor-pointer">
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">Savings Rate</p>
          <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">
            {summary.totalIncome > 0 ? ((summary.totalBalance / summary.totalIncome) * 100).toFixed(0) : 0}%
          </p>
        </div>
        <div className="animate-slide-up stagger-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800 hover:scale-105 transition-transform cursor-pointer">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-1">This Month</p>
          <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
            {summary.monthlyChange >= 0 ? '+' : ''}{summary.monthlyChange.toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
};
