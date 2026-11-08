import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { areas, areaPath } from "@/lib/areas";
import { services } from "@/lib/services";

// Dodaj sve staticke stranice i dinamicki generisi za blog/proizvode
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/paljenje-akumulatora-beograd`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/dostava-goriva-beograd`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...services.map((s) => ({
      url: `${SITE_URL}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...areas.map((a) => ({
      url: `${SITE_URL}${areaPath(a.slug)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Primer za dinamicke stranice (blog, proizvodi):
    // ...posts.map((post) => ({
    //   url: `${SITE_URL}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.8,
    // })),
  ];
}
