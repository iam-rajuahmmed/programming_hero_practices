import React from 'react';
import { Star, Check } from 'lucide-react';

const BADGE_COLOR_MAP = {
  blue: 'bg-blue-50/70 text-blue-600 border-blue-200',
  green: 'bg-emerald-50/70 text-emerald-600 border-emerald-200',
  orange: 'bg-amber-50/70 text-amber-600 border-amber-200',
  cyan: 'bg-cyan-50/70 text-cyan-600 border-cyan-200',
  gray: 'bg-slate-50 text-slate-600 border-slate-200',
};

export default function TechnologyCard({
  technology,
  isAdded,
  onAddToStack,
}) {
  const {
    id,
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
    badgeColor = 'blue',
  } = technology;

  const badgeStyle = BADGE_COLOR_MAP[badgeColor] || BADGE_COLOR_MAP.blue;

  return (
    <div
      className={`rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between group relative ${
        isAdded
          ? 'bg-white border-2 border-pink-500 shadow-md ring-4 ring-pink-500/10'
          : 'bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
      }`}
    >
      
      {/* Top Header: Icon & Badge */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                // Fallback if remote SVG is unreachable
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${id}/${id}-original.svg`;
              }}
            />
          </div>

          {badge && (
            <span
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${badgeStyle}`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Meta chips & Action Button */}
      <div>
        {/* Category, Difficulty & Rating in Single Line */}
        <div className="flex items-center justify-between gap-1.5 text-xs text-slate-600 mb-4">
          <div className="flex items-center gap-1.5 flex-nowrap">
            <span className="px-2 py-0.5 bg-slate-50 border border-slate-200/80 rounded font-medium text-slate-600 text-[10px] sm:text-[11px] whitespace-nowrap">
              {category}
            </span>
            <span className="px-2 py-0.5 bg-slate-50 border border-slate-200/80 rounded font-medium text-slate-600 text-[10px] sm:text-[11px] whitespace-nowrap">
              {difficulty}
            </span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-700 text-[11px] sm:text-xs whitespace-nowrap flex-shrink-0">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Add / Added Button */}
        {isAdded ? (
          <button
            type="button"
            disabled
            className="w-full py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed flex items-center justify-center gap-1.5 transition-all"
          >
            <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
            <span>✓ Added to Stack</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onAddToStack(technology)}
            className="w-full py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold bg-[#0F172A] hover:bg-slate-800 active:scale-[0.98] text-white transition-all duration-150 cursor-pointer shadow-sm hover:shadow"
          >
            Add to Stack
          </button>
        )}
      </div>

    </div>
  );
}
