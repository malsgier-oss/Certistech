import type { Metadata } from "next";

export function buildMetadata(lang: "ar" | "en"): Metadata {
  const isAr = lang === "ar";
  const title = isAr ? "سِرْتِس تك | حلول مؤسسية للتدقيق والامتثال" : "CertisTech | Enterprise Audit & Compliance Solutions";
  const description = isAr
    ? "حلول مؤسسية للتدقيق وإدارة المستندات للإدارات الرقابية والحوكمة وإدارة المخاطر — امتثال، تتبّع، وثقة."
    : "Enterprise-grade audit and document control solutions built for compliance, traceability, and trust.";

  return {
    title,
    description,
    metadataBase: new URL("https://certistech.com"),
    alternates: { languages: { ar: "/ar", en: "/en" } },
    openGraph: {
      title,
      description,
      type: "website",
      url: isAr ? "/ar" : "/en",
      siteName: "CertisTech",
      locale: isAr ? "ar_LY" : "en_US"
    },
    twitter: { card: "summary_large_image", title, description }
  };
}
