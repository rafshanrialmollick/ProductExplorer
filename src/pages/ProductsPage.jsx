import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchProducts, fetchCategories } from '../utils/api';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductGrid } from '../components/ProductGrid';
import { LoadingState } from '../components/LoadingState';
import { ErrorState } from '../components/ErrorState';
import { PerformanceNote } from '../components/PerformanceNote';
import { SlidersHorizontal, RefreshCw } from 'lucide-react';

/**
 * Products Page Component
 * Main container handling state, lifecycle fetching, category filtering,
 * debounced search filtering, and performance optimizations.
 */
export function ProductsPage({ debouncedSearchQuery, setSearchQuery }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 6. React Lifecycle: useEffect to fetch products when component mounts
  // Accepts an optional AbortSignal so the caller controls the controller's
  // lifetime. The effect below creates one tied to mount/unmount; the
  // manual "Refresh" button calls this with no signal at all.
  const loadData = useCallback(async (signal) => {
    setLoading(true);
    setError(null);

    try {
      const [prodsData, catsData] = await Promise.all([
        fetchProducts(signal),
        fetchCategories(signal),
      ]);

      setProducts(prodsData);
      setCategories(catsData);
      setLoading(false);
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Error fetching product data:', err);
        setError(err.message || 'Failed to fetch data from API');
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    // Create the controller here, in the effect itself, so its abort() can
    // be called synchronously from the cleanup function below the moment
    // the component unmounts — not after the async loadData() call has
    // already resolved (by which point aborting is a no-op).
    const controller = new AbortController();
    loadData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [loadData]);

  // 7. Performance Optimization: useMemo()
  // Memoizes the filtered products array so filtering algorithm only executes
  // when `products`, `selectedCategory`, or `debouncedSearchQuery` actually change.
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 4. Category Filter matching
      const matchesCategory =
        selectedCategory.toLowerCase() === 'all' ||
        (product.category && product.category.toLowerCase() === selectedCategory.toLowerCase());

      // 5. Debounced Search matching
      const matchesSearch =
        !debouncedSearchQuery ||
        product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, debouncedSearchQuery]);

  // 7. Performance Optimization: useCallback()
  // Memoize event handler to maintain stable reference when passed down to child component
  const handleSelectCategory = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  // Callback to reset all search & category filters
  const handleResetFilters = useCallback(() => {
    setSelectedCategory('all');
    setSearchQuery('');
  }, [setSearchQuery]);

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <SlidersHorizontal className="w-6 h-6 text-indigo-600" />
            Product Catalogue
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Explore {products.length > 0 ? `${filteredProducts.length} of ${products.length}` : ''} products from our public API catalog
          </p>
        </div>

        <button
          onClick={() => loadData()}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors disabled:opacity-50 cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh API Data
        </button>
      </div>

      {/* Requirement 7: Performance Explanation Banner */}
      <PerformanceNote />

      {/* Requirement 8: Loading & Error States */}
      {loading ? (
        <LoadingState message="Fetching products from public API..." />
      ) : error ? (
        <ErrorState error={error} onRetry={loadData} />
      ) : (
        <>
          {/* Requirement 4: Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* Active Filter Indicators */}
          {(selectedCategory !== 'all' || debouncedSearchQuery) && (
            <div className="flex flex-wrap items-center gap-2 px-1 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Active Filters:</span>
              {selectedCategory !== 'all' && (
                <span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-medium border border-indigo-100">
                  Category: {selectedCategory}
                </span>
              )}
              {debouncedSearchQuery && (
                <span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-medium border border-indigo-100">
                  Search: "{debouncedSearchQuery}"
                </span>
              )}
              <button
                onClick={handleResetFilters}
                className="text-indigo-600 hover:underline font-semibold ml-1 cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Requirement 3: Product Grid Display */}
          <ProductGrid products={filteredProducts} onResetFilters={handleResetFilters} />
        </>
      )}
    </div>
  );
}
