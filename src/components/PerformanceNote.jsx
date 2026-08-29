import React from 'react';
import { Cpu, Zap } from 'lucide-react';

/**
 * Performance Note Component
 * Displays a concise explanation of the React performance optimizations used.
 */
export function PerformanceNote() {
  return (
    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-md">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl mt-0.5">
          <Cpu className="w-5 h-5" />
        </div>
        <div className="flex-1 text-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-indigo-300">React Performance Optimization</span>
            <span className="px-2 py-0.5 bg-indigo-500/30 text-indigo-200 text-[10px] font-mono rounded-full flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> useMemo & useCallback
            </span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            <strong className="text-white">Explanation:</strong> We used <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">useMemo()</code> in <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">ProductsPage</code> to cache the filtered products array so filtering only re-evaluates when the products list, selected category, or debounced search query changes. Additionally, <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">useCallback()</code> was used to memoize event handlers passed down to child components.
          </p>
        </div>
      </div>
    </div>
  );
}
