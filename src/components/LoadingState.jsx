import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Loading State Component
 * Renders skeleton cards and a clear loading indicator message.
 */
export function LoadingState({ message = 'Loading products...' }) {
  return (
    <div className="space-y-8 my-6">
      {/* Loading banner header */}
      <div className="flex items-center justify-center gap-3 p-4 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-2xl shadow-xs">
        <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
        <span className="font-medium text-sm">{message}</span>
      </div>

      {/* Skeleton Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-4 space-y-4 animate-pulse"
          >
            <div className="w-full aspect-4/3 bg-slate-200 rounded-xl"></div>
            <div className="h-4 bg-slate-200 rounded-md w-3/4"></div>
            <div className="h-3 bg-slate-200 rounded-md w-1/2"></div>
            <div className="pt-2 flex justify-between items-center">
              <div className="h-6 bg-slate-200 rounded-md w-1/3"></div>
              <div className="w-8 h-8 bg-slate-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
