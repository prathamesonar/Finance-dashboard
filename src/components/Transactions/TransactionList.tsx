import { Transaction } from '../../types';
import { formatCurrency, formatDate } from '../../utils/calculations';
import { ArrowUpRight, ArrowDownRight, Pencil, Trash2 } from 'lucide-react';
import { useFinanceStore } from '../../store/useFinanceStore';

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
}

export const TransactionList = ({ transactions, onEdit }: TransactionListProps) => {
  const { userRole, deleteTransaction } = useFinanceStore();

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      salary: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      freelance: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      investment: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      food: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      transport: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      shopping: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      utilities: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      entertainment: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      healthcare: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      education: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      other: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    };
    return colors[category] || colors.other;
  };

  if (transactions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 border border-gray-200 dark:border-gray-700 text-center shadow-soft animate-scale-in">
        <div className="animate-bounce">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📭</span>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No transactions found</p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Try adjusting your filters or add a new transaction</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-soft animate-slide-up">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Merchant
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Amount
              </th>
              {userRole === 'admin' && (
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {transactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                className="hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-transparent dark:hover:from-primary-900/10 dark:hover:to-transparent transition-all duration-200 animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 font-medium">
                  {formatDate(transaction.date)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${
                      transaction.type === 'income' 
                        ? 'bg-green-100 dark:bg-green-900/30' 
                        : 'bg-red-100 dark:bg-red-900/30'
                    } group-hover:scale-110 transition-transform`}>
                      {transaction.type === 'income' ? (
                        <ArrowUpRight size={14} className="text-green-600 dark:text-green-400" />
                      ) : (
                        <ArrowDownRight size={14} className="text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <span className="font-medium">{transaction.description}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1.5 text-xs font-bold rounded-full ${getCategoryColor(
                      transaction.category
                    )} group-hover:scale-105 transition-transform inline-block`}
                  >
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {transaction.merchant || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold">
                  <span
                    className={`${
                      transaction.type === 'income' 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    } group-hover:scale-110 inline-block transition-transform`}
                  >
                    {transaction.type === 'income' ? '+' : '-'}
                    {formatCurrency(transaction.amount)}
                  </span>
                </td>
                {userRole === 'admin' && (
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onEdit(transaction)}
                        className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all hover:scale-110"
                        title="Edit transaction"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this transaction?')) {
                            deleteTransaction(transaction.id);
                          }
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all hover:scale-110"
                        title="Delete transaction"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
