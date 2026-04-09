"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/content", label: "Content" },
  { href: "/coaching", label: "Coaching" },
  { href: "/tools/list-review", label: "AI Tools" },
  { href: "/tools/tracker", label: "Tracker" },
  { href: "/dashboard", label: "Profile" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="text-text-primary font-semibold text-[15px] tracking-tight">
            The Strategium
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors text-[13px]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/onboarding"
              className="bg-text-primary text-bg-primary px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-accent-hover transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-secondary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-text-secondary hover:text-text-primary text-[15px]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tools/replay"
              onClick={() => setMobileOpen(false)}
              className="block text-text-secondary hover:text-text-primary text-[15px]"
            >
              Replay Analysis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
