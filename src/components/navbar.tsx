"use client";

import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[rgba(9,9,11,0.85)] backdrop-blur-md">
      <nav
        className="container flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight"
          aria-label="Aditya home"
        >
          Aditya Wadbudhe
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--foreground)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-lg">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--border-subtle)] md:hidden"
        >
          <div className="container flex flex-col py-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[var(--border-subtle)] py-4 text-sm text-[var(--muted)] last:border-b-0 hover:text-[var(--foreground)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary mt-3"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}