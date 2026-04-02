import { useEffect } from 'react';
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
  duration?: number;
}

export const Toast = ({ message, type = 'success', onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
    warning: AlertTriangle,
  };

  const colors = {
    success: 'bg-gradient-to-r from-green-500 to-green-600 text-white',
    error: 'bg-gradient-to-r from-red-500 to-red-600 text-white',
    info: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
    warning: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white',
  };

  const Icon = icons[type];

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className={`${colors[type]} rounded-xl shadow-soft-lg p-4 pr-12 min-w-[300px] max-w-md backdrop-blur-sm`}>
        <div className="flex items-center gap-3">
          <Icon size={24} className="flex-shrink-0 animate-scale-in" />
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 hover:bg-white/20 rounded-lg transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
