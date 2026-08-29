import React from "react";
import { Tag } from "lucide-react";

/**
 * Category Filter Component
 * Renders category filter pills including an "All" option.
 *
 * @param {{
 *   categories: string[],
 *   selectedCategory: string,
 *   onSelectCategory: (category: string) => void
 * }} props
 */
export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  // Format category slug to human-readable title (e.g., 'smartphones' -> 'Smartphones')
  const formatCategoryName = (cat) => {
    if (!cat) return "";
    return cat
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const allCategories = ["all", ...categories];

  return (
    <div className="w-full bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-6">
      <div className="flex items-center gap-2 mb-3 text-slate-700 font-semibold text-sm">
        <Tag className="w-4 h-4 text-indigo-600" />
        <span>Filter by Category:</span>
      </div>

      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
        {allCategories.map((cat) => {
          const isSelected =
            selectedCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat === "all" ? "All Products" : formatCategoryName(cat)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
