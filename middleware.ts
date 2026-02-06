import { NextRequest, NextResponse } from "next/server";

const COOKIE = "ct_lang";

function pickLang(req: NextRequest): "ar" | "en" {
  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie === "en" || cookie === "ar") return cookie;

  const header = (req.headers.get("accept-language") ?? "").toLowerCase();
  if (header.startsWith("en") || header.includes("en-")) return "en";
  return "ar";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE, "en", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE, "ar", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  if (pathname === "/") {
    const lang = pickLang(req);
    const url = req.nextUrl.clone();
    url.pathname = lang === "en" ? "/en" : "/ar";
    const res = NextResponse.redirect(url);
    res.cookies.set(COOKIE, lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  const lang = pickLang(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE, lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"]
};
