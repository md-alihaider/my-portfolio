import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../utils/data";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 inset-x-0 w-full md:max-w-2xl mx-auto z-50">
      <div
        className="backdrop-blur-xl border rounded-full px-3 py-2 shadow-2xl flex items-center justify-between transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-dark)",
          borderColor: "var(--border)",
          opacity: 0.95,
        }}
      >
        <div className="flex items-center gap-3 pl-4">
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter flex items-center gap-2"
            style={{ color: "var(--text)" }}
          >
            AH
            <span
              className="text-xl leading-none"
              style={{ color: "var(--primary)" }}
            >
              .
            </span>
          </a>
        </div>
        <div className="hidden md:flex items-center rounded-full px-2 py-2 border" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border-muted)" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 pr-4">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border flex items-center justify-center transition-all group hover:opacity-80"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border-muted)",
            }}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform" style={{ color: "var(--primary)" }} />
            ) : (
              <Sun className="w-4 h-4 group-hover:rotate-90 transition-transform" style={{ color: "var(--warning)" }} />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full border flex items-center justify-center"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border-muted)",
              color: "var(--text)",
            }}
          >
            {isMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div
            className="backdrop-blur-xl border rounded-2xl p-2 shadow-xl flex flex-col gap-1"
            style={{
              backgroundColor: "var(--bg-dark)",
              borderColor: "var(--border)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-center text-sm font-medium transition-all hover:opacity-80"
                style={{
                  color: "var(--text-muted)",
                  backgroundColor: "var(--bg)",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

