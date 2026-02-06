import type { Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t" style={{ borderColor: "rgba(234,242,246,0.10)" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
        <div className="opacity-90">© {year} CertisTech.</div>
        <div className="opacity-80">{lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</div>
      </div>
    </footer>
  );
}
