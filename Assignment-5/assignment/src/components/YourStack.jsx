import React from 'react';
import { X } from 'lucide-react';

export default function YourStack({
  stack,
  onRemoveFromStack,
  onRemoveAll,
}) {
  const count = stack.length;

  return (
    <aside className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm sticky top-24 transition-all duration-200">
      
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Your Stack
        </h2>
        <p className="text-sm text-slate-400 mt-1 font-normal">
          {count === 0
            ? 'No technologies selected yet.'
            : `${count} Technology Selected`}
        </p>
      </div>

      {/* Content: Empty State vs Selected Items */}
      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-12 px-4 text-center my-4 flex items-center justify-center">
          <p className="text-slate-400 text-sm">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-3 my-4 max-h-[460px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors group animate-fade-in"
            >
              {/* Tech Icon & Info */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.id}/${item.id}-original.svg`;
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-xs text-slate-400 leading-tight">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Remove item button (✕) */}
              <button
                type="button"
                onClick={() => onRemoveFromStack(item)}
                className="p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                aria-label={`Remove ${item.name} from stack`}
              >
                <X className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Action: Remove All button */}
      {count > 0 && (
        <div className="pt-2">
          <button
            type="button"
            onClick={onRemoveAll}
            className="w-full py-2.5 px-4 rounded-xl border border-red-200 hover:border-red-300 text-red-600 hover:bg-red-50 text-sm font-semibold transition-colors duration-150 cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}

    </aside>
  );
}
