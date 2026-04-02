import { useState } from 'react';
import { Plus, Download, Sparkles } from 'lucide-react';
import { useFinanceStore } from '../store/useFinanceStore';
import { useFilteredTransactions } from '../hooks/useFilteredTransactions';
import { TransactionList } from '../components/Transactions/TransactionList';
import { TransactionFilters } from '../components/Transactions/TransactionFilters';
import { TransactionModal } from '../components/Transactions/TransactionModal';
import { Transaction } from '../types';

export const Transactions = () => {
  const { userRole } = useFinanceStore();
  const filteredTransactions = useFilteredTransactions();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | undefined>();

  const handleEdit = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTransaction(undefined);
  };

  const handleExport = () => {
    const csv = [
      ['Date', 'Description', 'Category', 'Type', 'Amount', 'Merchant'],
      ...filteredTransactions.map((t) => [
        t.date,
        t.description,
        t.category,
        t.type,
        t.amount.toString(),
        t.merchant || '',
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-6 shadow-soft-lg">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={24} />
              <h2 className="text-2xl font-bold">Transactions</h2>
            </div>
            <p className="text-primary-100">
              {filteredTransactions.length} transaction{filteredTransactions.length !== 1 ? 's' : ''} found
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Download size={18} />
              Export CSV
            </button>
            {userRole === 'admin' && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Plus size={18} />
                Add Transaction
              </button>
            )}
          </div>
        </div>
      </div>

      <TransactionFilters />
      <TransactionList transactions={filteredTransactions} onEdit={handleEdit} />

      <TransactionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        transaction={editingTransaction}
      />
    </div>
  );
};
