"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import Logo from "@/components/Logo";

const COOKIE = "ct_lang";
function setLangCookie(lang: Lang) {
  document.cookie = `${COOKIE}=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

const navLinks = [
  { href: "#about", ar: "من نحن", en: "About" },
  { href: "#solutions", ar: "الحلول", en: "Solutions" },
  { href: "#audita", path: "audita-demo", ar: "AUDITA", en: "AUDITA" },
  { href: "#standards", ar: "المعايير", en: "Standards" },
  { href: "#how-we-work", ar: "كيف نعمل", en: "How We Work" },
  { href: "#contact", ar: "تواصل", en: "Contact" },
];

export default function Navbar({ lang }: { lang: Lang }) {
  const isAr = lang === "ar";
  const other: Lang = isAr ? "en" : "ar";
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-[rgba(234,242,246,0.10)] bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between gap-4 overflow-visible">
        <Link
          href={isAr ? "/ar" : "/en"}
          className="flex shrink-0 items-center justify-start transition-opacity hover:opacity-90 min-h-[44px] min-w-[44px]"
        >
          <Logo height={32} className="shrink-0 sm:hidden" />
          <Logo height={36} className="shrink-0 hidden sm:block" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-text-muted">
          {navLinks.map((link) => {
            const base = isAr ? "/ar" : "/en";
            const url = link.path ? `${base}/${link.path}` : `${base}${link.href}`;
            return (
              <Link key={link.path ?? link.href} href={url} className="hover:text-text transition-colors duration-200">
                {isAr ? link.ar : link.en}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={other === "en" ? "/en" : "/ar"}
            onClick={() => setLangCookie(other)}
            className="rounded-xl border border-[rgba(234,242,246,0.18)] bg-surface px-3 py-2 text-xs font-medium text-text hover:bg-surface-elevated transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Language toggle"
          >
            {other.toUpperCase()}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-surface-elevated transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-[rgba(234,242,246,0.10)] bg-background/95 backdrop-blur-md px-4 py-4 gap-1">
          {navLinks.map((link) => {
            const base = isAr ? "/ar" : "/en";
            const url = link.path ? `${base}/${link.path}` : `${base}${link.href}`;
            return (
              <Link
                key={link.path ?? link.href}
                href={url}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl text-text hover:bg-surface-elevated transition-colors min-h-[48px] flex items-center"
              >
                {isAr ? link.ar : link.en}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
