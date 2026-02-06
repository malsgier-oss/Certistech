import "./globals.css";
import { Noto_Sans_Arabic, DM_Sans } from "next/font/google";

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
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${notoSansArabic.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=location.pathname;var l=p.startsWith('/en')?'en':'ar';var d=l==='en'?'ltr':'rtl';document.documentElement.lang=l;document.documentElement.dir=d;})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
