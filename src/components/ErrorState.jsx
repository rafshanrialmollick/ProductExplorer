import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
/**
 * Error State Component
 * Display an error message if the API request fails, with a retry button.
 *
 * @param {{ error: string, onRetry: () => void }} props
 */
export function ErrorState({ error, onRetry }) {
  return (
    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-8 text-center my-8 max-w-xl mx-auto shadow-xs">
      <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-rose-900 mb-2">Failed to load products</h3>
      <p className="text-rose-700 text-sm mb-6 bg-white/60 p-3 rounded-lg border border-rose-200/50 font-mono">
        {error || 'An unexpected network error occurred while connecting to the API.'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      )}
    </div>
  );
}
