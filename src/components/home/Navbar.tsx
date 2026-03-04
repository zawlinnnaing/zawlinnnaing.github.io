import React from "react";
import { RESUME_LINK } from "../../utils/constants";
import { NavLink } from "./types";

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  activeSection: string;
  navLinks: NavLink[];
}

export function Navbar({
  scrolled,
  menuOpen,
  setMenuOpen,
  activeSection,
  navLinks,
}: NavbarProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="font-mono text-green-500 font-bold text-xl hover:text-green-400 transition-colors"
        >
          &lt;Zaw/&gt;
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-mono text-sm transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-green-500"
                  : "text-gray-400 hover:text-green-500"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500/10 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden bg-gray-900/95 backdrop-blur overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: menuOpen ? "500px" : "0px" }}
      >
        <div className="border-t border-gray-800 px-6 py-4 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block font-mono text-sm transition-colors py-1 ${
                activeSection === item.href.slice(1)
                  ? "text-green-500"
                  : "text-gray-400 hover:text-green-500"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="block font-mono text-sm text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500/10 transition-colors text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
