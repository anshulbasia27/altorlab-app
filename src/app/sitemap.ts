import type { MetadataRoute } from "next";
import { ROOMS, STYLES } from "@/lib/seo-data";

// Static pages
const STATIC_PAGES = [
  { url: "https://app.altorlab.org", priority: 1.0 },
  { url: "https://app.altorlab.org/room-redesign", priority: 0.9 },
  { url: "https://app.altorlab.org/privacy", priority: 0.3 },
  { url: "https://app.altorlab.org/terms", priority: 0.3 },
];

const LEGACY_STYLES = ["modern", "scandinavian", "minimalist", "industrial", "bohemian"];
const LEGACY_ROOMS = ["living-room", "bedroom", "kitchen", "bathroom", "home-office"];

export default function sitemap(): MetadataRoute.Sitemap {
  const legacyProgrammaticPages = LEGACY_STYLES.flatMap((style) =>
    LEGACY_ROOMS.map((room) => ({
      url: `https://app.altorlab.org/ai-${style}-${room}-design`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const stylePages = [
    {
      url: "https://app.altorlab.org/styles",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...STYLES.map((style) => ({
      url: `https://app.altorlab.org/styles/${style.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  const roomPages = [
    {
      url: "https://app.altorlab.org/rooms",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...ROOMS.map((room) => ({
      url: `https://app.altorlab.org/rooms/${room.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return [
    ...STATIC_PAGES.map((p) => ({
      url: p.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...legacyProgrammaticPages,
    ...stylePages,
    ...roomPages,
  ];
}
