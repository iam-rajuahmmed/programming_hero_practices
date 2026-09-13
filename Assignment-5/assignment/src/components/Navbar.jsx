import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Mobile: Hamburger Icon (Left on mobile, hidden on md+) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 -ml-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          {/* Brand Logo & Name */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 group">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl brand-gradient-bg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xs sm:text-base tracking-tight">DS</span>
              </div>
              <div className="flex items-center text-base sm:text-xl font-bold tracking-tight">
                <span className="text-slate-900">Dev</span>
                <span className="brand-gradient-text ml-0.5">Stack</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#technologies"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Technologies
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-4">
            <button
              type="button"
              className="text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-xs sm:text-sm font-semibold text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full brand-gradient-bg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 animate-fade-in bg-white">
            <div className="flex flex-col space-y-2 px-2">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-pink-600 rounded-lg bg-pink-50"
              >
                Home
              </a>
              <a
                href="#technologies"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Technologies
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Projects
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
