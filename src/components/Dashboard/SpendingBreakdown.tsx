import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getCategorySpending } from '../../utils/calculations';
import { Transaction } from '../../types';
import { PieChartIcon } from 'lucide-react';

interface SpendingBreakdownProps {
  transactions: Transaction[];
}

const COLORS = ['#0EA5E9', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#EF4444', '#6366F1', '#14B8A6'];

export const SpendingBreakdown = ({ transactions }: SpendingBreakdownProps) => {
  const data = getCategorySpending(transactions);

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    if (percent < 0.05) return null;

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="font-bold text-xs"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-soft card-hover animate-slide-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <PieChartIcon size={20} className="text-primary-500" />
            Spending by Category
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expense distribution</p>
        </div>
      </div>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
                boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
                padding: '12px',
              }}
              formatter={(value: number) => `$${value.toFixed(2)}`}
            />
            <Legend 
              verticalAlign="bottom" 
              height={60}
              iconType="circle"
              wrapperStyle={{ 
                paddingTop: '10px',
                fontSize: '12px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-[300px] flex items-center justify-center">
          <div className="text-center">
            <PieChartIcon size={48} className="text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <p className="text-gray-500 dark:text-gray-400">No expense data available</p>
          </div>
        </div>
      )}
    </div>
  );
};
