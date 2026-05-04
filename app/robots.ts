export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
    sitemap: "https://certistech.com/sitemap.xml",
  };
}
