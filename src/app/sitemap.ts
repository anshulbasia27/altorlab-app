import type { MetadataRoute } from "next";
import { ROOMS, STYLES } from "@/lib/seo-data";

const IDEA_ROOMS = ROOMS;

const STATIC_PAGES = [
  { url: "https://app.altorlab.org", priority: 1.0 },
  { url: "https://app.altorlab.org/room-redesign", priority: 0.9 },
  { url: "https://app.altorlab.org/ideas", priority: 0.8 },
  { url: "https://app.altorlab.org/blog", priority: 0.8 },
  { url: "https://app.altorlab.org/tools/background-remover", priority: 0.7 },
  { url: "https://app.altorlab.org/tools/tattoo-designer", priority: 0.7 },
  { url: "https://app.altorlab.org/privacy", priority: 0.3 },
  { url: "https://app.altorlab.org/terms", priority: 0.3 },
];

const BLOG_SLUGS = [
  "best-ai-interior-design-tools",
  "redesign-room-9-dollars",
  "interior-design-styles-explained",
  "ai-vs-interior-designer-cost",
  "modern-bedroom-small-apartment",
  "ai-background-remover-ecommerce",
  "tattoo-design-first-timers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const ideaPages = STYLES.flatMap((style) =>
    IDEA_ROOMS.map((room) => ({
      url: `https://app.altorlab.org/ideas/${style.slug}-${room.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const blogPages = BLOG_SLUGS.map((slug) => ({
    url: `https://app.altorlab.org/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...STATIC_PAGES.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
    ...ideaPages,
    ...blogPages,
  ];
}
