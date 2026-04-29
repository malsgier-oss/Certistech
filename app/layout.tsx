import "./globals.css";
import { Noto_Sans_Arabic, DM_Sans } from "next/font/google";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0B0F14",
};

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ar",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-en",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const initialLocale = "ar";

  return (
    <html
      lang={initialLocale}
      dir={initialLocale === "ar" ? "rtl" : "ltr"}
      className={`${notoSansArabic.variable} ${dmSans.variable}`}
      suppressHydrationWarning
      data-locale={initialLocale}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=location.pathname;var l=p.startsWith('/en')?'en':'ar';document.documentElement.lang=l;document.documentElement.dir=l==='en'?'ltr':'rtl';document.documentElement.dataset.locale=l;})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased bg-surface surface-surface-gradient">{children}</body>
    </html>
  );
}
