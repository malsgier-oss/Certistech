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
    <header className="sticky top-0 z-50 border-b border-[rgba(180,191,204,0.12)] bg-[#050a14]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between gap-4 overflow-visible">
        <Link
          href={isAr ? "/ar" : "/en"}
          className="group flex shrink-0 items-center justify-start transition-opacity hover:opacity-90 min-h-[44px] min-w-[44px] gap-3"
          aria-label="Go home"
        >
          <Logo variant="light" height={32} className="shrink-0 sm:hidden" />
          <Logo variant="light" height={34} className="shrink-0 hidden sm:block" />
          <span className="text-[10px] uppercase tracking-[0.26em] text-text-subtle hidden sm:inline">
            CertisTech
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {navLinks.map((link, idx) => {
            const base = isAr ? "/ar" : "/en";
            const url = link.path ? `${base}/${link.path}` : `${base}${link.href}`;
            return (
              <Link
                key={link.path ?? link.href}
                href={url}
                className="relative overflow-hidden rounded-xl px-3.5 py-2.5 text-text-muted transition-colors hover:text-text"
                style={{ transitionDelay: `${idx * 30}ms` }}
              >
                <span className="relative z-10">{isAr ? link.ar : link.en}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={other === "en" ? "/en" : "/ar"}
            onClick={() => setLangCookie(other)}
            className="status-pill justify-center min-h-[44px] px-3 text-[11px] font-semibold"
            aria-label="Language toggle"
          >
            {other.toUpperCase()}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl border border-white/20 bg-surface-alt/75 min-h-[44px] min-w-[44px] flex items-center justify-center hover:border-white/35 transition-all"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          mobileOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-[rgba(180,191,204,0.12)] bg-[#050a14]/90 backdrop-blur-xl px-4 py-4 gap-1">
          {navLinks.map((link) => {
            const base = isAr ? "/ar" : "/en";
            const url = link.path ? `${base}/${link.path}` : `${base}${link.href}`;
            return (
              <Link
                key={link.path ?? link.href}
                href={url}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl text-text hover:text-text-muted hover:bg-surface-alt/75 transition-all min-h-[48px] flex items-center"
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
