import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProductsPage } from './pages/ProductsPage';
import { useDebounce } from './hooks/useDebounce';
import { Code, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // 5. Debounced Search Hook (350ms delay)
  const debouncedSearchQuery = useDebounce(searchQuery, 350);

  const isDebouncing = searchQuery !== debouncedSearchQuery;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* 2. Dynamic Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDebouncing={isDebouncing}
      />

      {/* Main Content View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activePage === 'home' ? (
          <Home onExploreClick={() => setActivePage('products')} />
        ) : (
          <ProductsPage
            debouncedSearchQuery={debouncedSearchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold text-slate-800">Product Explorer App</span>
            <span className="text-slate-400">|</span>
            <span>Built with React.js & Vite</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Debounced Search Enabled
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              useMemo & useCallback Optimized
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
