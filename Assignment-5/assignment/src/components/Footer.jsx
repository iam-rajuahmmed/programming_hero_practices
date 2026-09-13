import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Info (Span 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm tracking-tight">DS</span>
              </div>
              <div className="flex items-center text-lg font-bold tracking-tight">
                <span className="text-slate-900">Dev</span>
                <span className="brand-gradient-text ml-0.5">Stack</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 hover:underline transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 hover:underline transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 hover:underline transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-slate-900 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-slate-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-slate-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
