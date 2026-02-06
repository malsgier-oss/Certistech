"use client";

import { useEffect } from "react";

type Props = { lang: "ar" | "en" };

export default function LangAttributes({ lang }: Props) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return null;
}
