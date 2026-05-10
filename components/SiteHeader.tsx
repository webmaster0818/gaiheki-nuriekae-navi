"use client";
import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/ranking/", label: "業者ランキング" },
    { href: "/paint/comparison/", label: "塗料を選ぶ" },
    { href: "/trouble/crack/", label: "劣化・トラブル" },
    { href: "/cost/price/", label: "費用・相場" },
    { href: "/cost/subsidy/", label: "助成金" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[var(--color-primary)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="6" height="6" rx="1" fill="white" opacity="0.9"/>
                <rect x="10" y="2" width="6" height="6" rx="1" fill="white" opacity="0.6"/>
                <rect x="2" y="10" width="6" height="6" rx="1" fill="white" opacity="0.6"/>
                <rect x="10" y="10" width="6" height="6" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span className="font-bold text-[var(--color-text)] text-sm leading-tight">
              外壁ぬりかえ<br className="hidden sm:block"/>ナビ
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-[var(--color-text-sub)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* PR Badge */}
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--color-secondary-light)] text-[var(--color-secondary-dark)] text-xs font-medium rounded border border-[var(--color-secondary)] leading-none">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                <path d="M5 0L6.12 3.44H9.76L6.81 5.56L7.94 9L5 6.88L2.06 9L3.19 5.56L0.24 3.44H3.88L5 0Z"/>
              </svg>
              PR
            </span>
            {/* CTA Button */}
            <Link
              href="/ranking/"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white text-sm font-bold rounded-lg transition-colors"
            >
              無料で比較する
            </Link>
            {/* Hamburger */}
            <button
              className="md:hidden p-2 text-[var(--color-text-sub)] hover:text-[var(--color-primary)]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニューを開く"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="3" y1="3" x2="17" y2="17"/>
                  <line x1="17" y1="3" x2="3" y2="17"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="3" y1="5" x2="17" y2="5"/>
                  <line x1="3" y1="10" x2="17" y2="10"/>
                  <line x1="3" y1="15" x2="17" y2="15"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm text-[var(--color-text-sub)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/ranking/"
              onClick={() => setMenuOpen(false)}
              className="mt-2 py-3 text-center bg-[var(--color-secondary)] text-white text-sm font-bold rounded-lg"
            >
              無料で比較する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
