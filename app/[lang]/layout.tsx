import type { Metadata } from "next";
import { isLang, LANGS } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = isLang(params.lang) ? params.lang : "ar";
  return buildMetadata(lang);
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <html lang={lang} dir={dir}>
      <body>
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
