import { TrendingUp, AlertCircle, DollarSign, Calendar, Sparkles } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';
import { getCategorySpending, formatCurrency } from '../utils/calculations';
import { startOfMonth, endOfMonth, isWithinInterval, subMonths } from 'date-fns';

export const Insights = () => {
  const { transactions } = useFinanceStore();

  const categorySpending = getCategorySpending(transactions);
  const highestCategory = categorySpending[0];

  const now = new Date();
  const currentMonthStart = startOfMonth(now);
  const currentMonthEnd = endOfMonth(now);
  const lastMonthStart = startOfMonth(subMonths(now, 1));
  const lastMonthEnd = endOfMonth(subMonths(now, 1));

  const currentMonthExpenses = transactions
    .filter((t) => {
      const date = new Date(t.date);
      return t.type === 'expense' && isWithinInterval(date, { start: currentMonthStart, end: currentMonthEnd });
    })
    .reduce((sum, t) => sum + t.amount, 0);

  const lastMonthExpenses = transactions
    .filter((t) => {
      const date = new Date(t.date);
      return t.type === 'expense' && isWithinInterval(date, { start: lastMonthStart, end: lastMonthEnd });
    })
    .reduce((sum, t) => sum + t.amount, 0);

  const expenseChange = lastMonthExpenses !== 0
    ? ((currentMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100
    : 0;

  const avgTransactionAmount = transactions.length > 0
    ? transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length
    : 0;

  const insights = [
    {
      icon: TrendingUp,
      title: 'Highest Spending Category',
      description: highestCategory
        ? `You spent the most on ${highestCategory.name} with a total of ${formatCurrency(highestCategory.value)}`
        : 'No expense data available',
      color: 'text-purple-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
    },
    {
      icon: Calendar,
      title: 'Monthly Comparison',
      description: expenseChange >= 0
        ? `Your expenses increased by ${expenseChange.toFixed(1)}% compared to last month`
        : `Your expenses decreased by ${Math.abs(expenseChange).toFixed(1)}% compared to last month`,
      color: expenseChange >= 0 ? 'text-red-500' : 'text-green-500',
      bgColor: expenseChange >= 0 
        ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20' 
        : 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      borderColor: expenseChange >= 0 ? 'border-red-200 dark:border-red-800' : 'border-green-200 dark:border-green-800',
    },
    {
      icon: DollarSign,
      title: 'Average Transaction',
      description: `Your average transaction amount is ${formatCurrency(avgTransactionAmount)}`,
      color: 'text-blue-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      icon: AlertCircle,
      title: 'Spending Pattern',
      description: currentMonthExpenses > lastMonthExpenses
        ? 'Consider reviewing your expenses this month to stay on budget'
        : 'Great job! You are spending less than last month',
      color: currentMonthExpenses > lastMonthExpenses ? 'text-orange-500' : 'text-green-500',
      bgColor: currentMonthExpenses > lastMonthExpenses
        ? 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
        : 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      borderColor: currentMonthExpenses > lastMonthExpenses 
        ? 'border-orange-200 dark:border-orange-800' 
        : 'border-green-200 dark:border-green-800',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-slide-down">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="text-primary-500 animate-pulse-slow" size={28} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Financial Insights</h2>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 ml-10">
          Key observations from your financial data
        </p>
      </div>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div
              key={index}
              className={`${insight.bgColor} rounded-2xl p-6 border ${insight.borderColor} card-hover shadow-soft animate-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm animate-float`}
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <Icon className={insight.color} size={28} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-soft animate-slide-up">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <TrendingUp size={24} className="text-primary-500" />
          Top 5 Spending Categories
        </h3>
        <div className="space-y-5">
          {categorySpending.slice(0, 5).map((category, index) => {
            const total = categorySpending.reduce((sum, c) => sum + c.value, 0);
            const percentage = (category.value / total) * 100;

            return (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 capitalize">
                    {category.name}
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {formatCurrency(category.value)} ({percentage.toFixed(1)}%)
                  </span>
                </div>
                <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out animate-slide-in-left shadow-lg"
                    style={{ 
                      width: `${percentage}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
