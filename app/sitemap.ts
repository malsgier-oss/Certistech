import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://certistech.com";
  return [
    { url: `${base}/ar`, lastModified: new Date() },
    { url: `${base}/en`, lastModified: new Date() }
  ];
}
