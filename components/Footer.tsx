import type { Lang } from "@/lib/i18n";
import Logo from "@/components/Logo";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(234,242,246,0.10)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-body-sm text-text-muted text-center md:text-start">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Logo height={24} className="opacity-90 shrink-0" />
          <span>© {year} CertisTech.</span>
        </div>
        <div className="opacity-80">
          {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
