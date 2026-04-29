import type { Lang } from "@/lib/i18n";
import Logo from "@/components/Logo";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(180,191,204,0.14)] mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-5 text-body-sm text-text-muted">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-start">
          <div className="rounded-xl border border-[rgba(180,191,204,0.24)] bg-surface-alt p-2 sm:p-2.5">
            <Logo variant="light" height={26} className="shrink-0" />
          </div>
          <span className="text-text text-sm">© {year} CertisTech</span>
        </div>
        <p className="text-center sm:text-start">
          {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
