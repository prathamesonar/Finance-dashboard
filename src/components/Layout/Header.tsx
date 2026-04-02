import { UserRole } from '../../types';
import { useFinanceStore } from '../../store/useFinanceStore';
import { User, Shield, ChevronDown } from 'lucide-react';

export const Header = () => {
  const { userRole, setUserRole } = useFinanceStore();

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 px-6 py-4 shadow-soft sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="animate-slide-in">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back! 👋
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Here's what's happening with your finances today.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 animate-fade-in">
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Role:</label>
            <div className="relative">
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value as UserRole)}
                className="appearance-none pl-4 pr-10 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer hover:shadow-soft font-medium"
              >
                <option value="viewer">Viewer</option>
                <option value="admin">Admin</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl shadow-soft transition-all duration-300 ${
            userRole === 'admin' 
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}>
            <div className="relative">
              {userRole === 'admin' ? (
                <Shield size={18} className="animate-scale-in" />
              ) : (
                <User size={18} className="animate-scale-in" />
              )}
              {userRole === 'admin' && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              )}
            </div>
            <span className="text-sm font-semibold capitalize">
              {userRole}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
