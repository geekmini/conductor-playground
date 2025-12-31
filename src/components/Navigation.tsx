"use client";

import { TronLogo } from "./TronLogo";

interface NavigationProps {
  isLoaded: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const navItems = ["Work", "Services", "About", "Contact"];

export const Navigation = ({
  isLoaded,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavigationProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Tron.ai home">
          <TronLogo className="w-10 h-10" />
          <span className="text-xl font-bold tracking-tight font-display">
            tron.ai
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group font-body"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet to-cyan group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-secondary hidden md:block">
          Let&apos;s Talk
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 glass-card flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="space-y-1.5 relative">
            <div
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-3 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 glass-card mx-6 mt-2 rounded-2xl overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-lg font-medium text-white/80 hover:text-white transition-colors py-2 font-body"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary block text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
};
