"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToLang() {
  const router = useRouter();

  useEffect(() => {
    const preferEn =
      typeof navigator !== "undefined" &&
      (navigator.language.startsWith("en") || navigator.language.includes("en-"));
    router.replace(preferEn ? "/en" : "/ar");
  }, [router]);

  return null;
}
