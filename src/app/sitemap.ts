import { MetadataRoute } from "next";

// Static pages
const STATIC_PAGES = [
  { url: "https://app.altorlab.org", priority: 1.0 },
  { url: "https://app.altorlab.org/room-redesign", priority: 0.9 },
  { url: "https://app.altorlab.org/privacy", priority: 0.3 },
  { url: "https://app.altorlab.org/terms", priority: 0.3 },
];

// Programmatic pages (will be added in T11)
// Pattern: /ai-[style]-[room]-design
const STYLES = ["modern", "scandinavian", "minimalist", "industrial", "bohemian"];
const ROOMS = ["living-room", "bedroom", "kitchen", "bathroom", "home-office"];

export default function sitemap(): MetadataRoute.Sitemap {
  const programmaticPages = STYLES.flatMap((style) =>
    ROOMS.map((room) => ({
      url: `https://app.altorlab.org/ai-${style}-${room}-design`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [
    ...STATIC_PAGES.map((p) => ({
      url: p.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...programmaticPages,
  ];
}
