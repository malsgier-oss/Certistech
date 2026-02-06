"use client";

import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import Logo from "@/components/Logo";

const COOKIE = "ct_lang";
function setLangCookie(lang: Lang) {
  document.cookie = `${COOKIE}=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

export default function Navbar({ lang }: { lang: Lang }) {
  const isAr = lang === "ar";
  const other: Lang = isAr ? "en" : "ar";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-[rgba(234,242,246,0.10)] bg-background/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <Link
          href={isAr ? "/ar" : "/en"}
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Logo height={36} />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-text-muted">
          <a
            className="hover:text-text transition-colors duration-200"
            href="#solutions"
          >
            {isAr ? "الحلول" : "Solutions"}
          </a>
          <a
            className="hover:text-text transition-colors duration-200"
            href="#audita"
          >
            AUDITA
          </a>
          <a
            className="hover:text-text transition-colors duration-200"
            href="#standards"
          >
            {isAr ? "المعايير" : "Standards"}
          </a>
          <a
            className="hover:text-text transition-colors duration-200"
            href="#partners"
          >
            {isAr ? "الشركاء" : "Partners"}
          </a>
          <a
            className="hover:text-text transition-colors duration-200"
            href="#contact"
          >
            {isAr ? "تواصل" : "Contact"}
          </a>
        </nav>

        <Link
          href={other === "en" ? "/en" : "/ar"}
          onClick={() => setLangCookie(other)}
          className="rounded-xl border border-[rgba(234,242,246,0.18)] bg-surface px-3 py-2 text-xs font-medium text-text hover:bg-surface-elevated transition-all duration-200"
          aria-label="Language toggle"
        >
          {other.toUpperCase()}
        </Link>
      </div>
    </header>
  );
}
