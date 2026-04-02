export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-primary-200 dark:border-primary-900 rounded-full animate-spin-slow"></div>
        
        {/* Inner ring */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-primary-500 rounded-full animate-spin"></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
