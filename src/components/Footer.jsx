import { Code, CheckCircle2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-12 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-indigo-600" />
          <span className="font-semibold text-slate-800">
            Product Explorer App
          </span>
          <span className="text-slate-400">|</span>
          <span>Built By Rafshan Rial</span>
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
  );
};

export default Footer;
