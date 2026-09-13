import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Build Your Ideal <br className="hidden sm:block" />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center text-sm sm:text-base font-semibold text-white px-7 py-3.5 rounded-full brand-gradient-bg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center text-sm sm:text-base font-medium text-slate-700 hover:text-slate-900 px-7 py-3.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Banner 3D Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Subtle ambient glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/10 via-pink-500/10 to-violet-600/10 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition duration-500" />
              <img
                src="/assets/banner-stack.png"
                alt="DevStack 3D Layered Architecture"
                className="w-full h-auto object-contain max-h-[440px] drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
