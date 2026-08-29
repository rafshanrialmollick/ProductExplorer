
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, Sparkles, Layers } from 'lucide-react';


export function Home({ onExploreClick }) {
  const features = [
    {
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      title: 'Categorized Selection',
      desc: 'Browse dozens of curated product categories powered by DummyJSON API.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      title: 'Debounced Instant Search',
      desc: 'Search through product titles seamlessly without triggering excessive re-renders.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: 'Optimized Performance',
      desc: 'Leverages React memoization hooks (useMemo & useCallback) for maximum speed.'
    }
  ];

  return (
    <div className="space-y-12 py-6 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>React.js + Vite Application</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Discover Exceptional Products in Seconds
          </h1>

          <p className="text-indigo-100 text-base sm:text-lg leading-relaxed">
            Welcome to Product Explorer. Filter by category, test our debounced real-time search, and experience high-performance React lifecycle management.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-indigo-900 hover:bg-indigo-50 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-indigo-600" />
              Explore All Products
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">{f.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Overview Card */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready to test the Explorer?</h2>
          <p className="text-slate-600 text-sm">
            Check out live category filtering, debounced title search, and simulated network states.
          </p>
        </div>
        <button
          onClick={onExploreClick}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm whitespace-nowrap cursor-pointer"
        >
          View Products Catalogue
        </button>
      </section>
    </div>
  );
}
