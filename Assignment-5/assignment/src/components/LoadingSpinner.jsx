import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative w-14 h-14">
        {/* Spinning outer ring with gradient */}
        <div className="w-14 h-14 rounded-full border-4 border-slate-100 border-t-pink-500 border-r-orange-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full brand-gradient-bg animate-pulse" />
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-600 animate-pulse">
        Loading technologies...
      </p>
    </div>
  );
}
