import React from 'react';
import { Star, Tag, ShoppingCart } from 'lucide-react';

/**
 * Product Card Component
 * Display per product: Image, Title, Price, Category
 */
export function ProductCard({ product }) {
  const { title, price, category, thumbnail, images, rating, discountPercentage } = product;
  const imageSrc = thumbnail || (images && images[0]) || 'https://via.placeholder.com/300?text=No+Image';

  const formatCategory = (cat) => {
    if (!cat) return '';
    return cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full">
      {/* Image Container */}
      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden flex items-center justify-center p-4">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300?text=Image+Unavailable';
          }}
        />

        {/* Category Tag Badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-semibold text-slate-700 shadow-xs border border-slate-200/50 flex items-center gap-1">
          <Tag className="w-3 h-3 text-indigo-600" />
          {formatCategory(category)}
        </span>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <span className="absolute top-3 right-3 px-2 py-0.5 bg-rose-500 text-white rounded-md text-[10px] font-bold shadow-xs">
            -{Math.round(discountPercentage)}%
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold mb-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}

          {/* Title */}
          <h3 className="font-semibold text-slate-800 text-base line-clamp-2 group-hover:text-indigo-600 transition-colors mb-2">
            {title}
          </h3>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-2">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Price</span>
            <span className="text-lg font-bold text-slate-900">
              ${typeof price === 'number' ? price.toFixed(2) : price}
            </span>
          </div>

          <button
            className="w-9 h-9 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="View Details"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
