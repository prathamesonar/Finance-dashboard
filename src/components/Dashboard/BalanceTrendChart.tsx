import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getMonthlyTrend } from '../../utils/calculations';
import { Transaction } from '../../types';
import { TrendingUp } from 'lucide-react';

interface BalanceTrendChartProps {
  transactions: Transaction[];
}

export const BalanceTrendChart = ({ transactions }: BalanceTrendChartProps) => {
  const data = getMonthlyTrend(transactions);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-soft card-hover animate-slide-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <TrendingUp size={20} className="text-primary-500" />
            Balance Trend
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last 6 months overview</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
          <XAxis 
            dataKey="month" 
            stroke="#6B7280" 
            style={{ fontSize: '12px', fontWeight: 500 }} 
          />
          <YAxis 
            stroke="#6B7280" 
            style={{ fontSize: '12px', fontWeight: 500 }} 
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '12px',
              color: '#fff',
              boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
              padding: '12px',
            }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ fill: '#10B981', r: 5, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 7 }}
            name="Income"
            fill="url(#colorIncome)"
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#EF4444"
            strokeWidth={3}
            dot={{ fill: '#EF4444', r: 5, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 7 }}
            name="Expenses"
            fill="url(#colorExpenses)"
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#0EA5E9"
            strokeWidth={3}
            dot={{ fill: '#0EA5E9', r: 5, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 7 }}
            name="Balance"
            fill="url(#colorBalance)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
