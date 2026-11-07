import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { site } from "@/content/site";

/** Bump when page content changes meaningfully. */
const CONTENT_UPDATED = "2026-11-07";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" },
    { path: "/results", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: s.featured ? 0.9 : 0.7,
    })),
  ];
}
