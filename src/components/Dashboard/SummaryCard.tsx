import { LucideIcon } from 'lucide-react';
import { formatCurrency } from '../../utils/calculations';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  trend?: number;
  iconColor: string;
  iconBgColor: string;
}

export const SummaryCard = ({
  title,
  amount,
  icon: Icon,
  trend,
  iconColor,
  iconBgColor,
}: SummaryCardProps) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 card-hover shadow-soft animate-slide-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:scale-105 transition-transform">
            {formatCurrency(amount)}
          </h3>
          {trend !== undefined && (
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg ${
                trend >= 0 
                  ? 'bg-green-100 dark:bg-green-900/30' 
                  : 'bg-red-100 dark:bg-red-900/30'
              }`}>
                {trend >= 0 ? (
                  <TrendingUp size={14} className="text-green-600 dark:text-green-400" />
                ) : (
                  <TrendingDown size={14} className="text-red-600 dark:text-red-400" />
                )}
                <span
                  className={`text-sm font-bold ${
                    trend >= 0 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {Math.abs(trend).toFixed(1)}%
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">vs last month</span>
            </div>
          )}
        </div>
        <div className={`${iconBgColor} p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          <Icon className={iconColor} size={28} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};
