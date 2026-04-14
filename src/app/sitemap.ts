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
  "ai-interior-design-2026",
  "room-redesign-on-a-budget",
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

  const designPages = STYLES.flatMap((style) =>
    IDEA_ROOMS.map((room) => ({
      url: `https://app.altorlab.org/ai-${style.slug}-${room.slug}-design`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const ideasPages = STYLES.flatMap((style) =>
    IDEA_ROOMS.map((room) => ({
      url: `https://app.altorlab.org/ai-${style.slug}-${room.slug}-ideas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const inspirationPages = STYLES.flatMap((style) =>
    IDEA_ROOMS.map((room) => ({
      url: `https://app.altorlab.org/ai-${style.slug}-${room.slug}-inspiration`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const budgetPages = ["modern", "scandinavian"].flatMap((style) =>
    IDEA_ROOMS.map((room) => ({
      url: `https://app.altorlab.org/budget-${style}-${room.slug}-design`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const luxuryPages = ["modern", "industrial"].flatMap((style) =>
    IDEA_ROOMS.map((room) => ({
      url: `https://app.altorlab.org/luxury-${style}-${room.slug}-design`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const blogPages = BLOG_SLUGS.map((slug) => ({
    url: `https://app.altorlab.org/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const wcagPages = [
    "1-1-1-non-textcontent","1-2-1-audio-onlyandvideo-onlyprereco","1-2-2-captionsprerecorded",
    "1-2-3-audiodescriptionormediaalterna","1-3-1-infoandrelationships","1-3-2-meaningfulsequence",
    "1-3-3-sensorycharacteristics","1-4-1-useofcolor","1-4-2-audiocontrol","2-1-1-keyboard",
    "2-1-2-nokeyboardtrap","2-2-1-timingadjustable","2-2-2-pausestophide","2-3-1-threeflashesorbelow",
    "2-4-1-bypassblocks","2-4-2-pagetitled","2-4-3-focusorder","2-4-4-linkpurposeincontext",
    "2-5-3-labelinname","2-5-4-motionactuation","3-1-1-languageofpage","3-2-1-onfocus",
    "3-2-2-oninput","3-3-1-erroridentification","3-3-2-labelsorinstructions","4-1-1-parsing",
    "4-1-2-namerolevalue","1-2-4-captionslive","1-2-5-audiodescriptionprerecorded",
    "1-3-4-orientation","1-3-5-identifyinputpurpose","1-4-3-contrastminimum","1-4-4-resizetext",
    "1-4-5-imagesoftext","1-4-10-reflow","1-4-11-non-textcontrast","1-4-12-textspacing",
    "1-4-13-contentonhoverorfocus","2-4-5-multipleways","2-4-6-headingsandlabels",
    "2-4-7-focusvisible","2-5-1-pointergestures","2-5-2-pointercancellation",
    "3-1-2-languageofparts","3-2-3-consistentnavigation","3-2-4-consistentidentification",
    "3-3-3-errorsuggestion","3-3-4-errorpreventionlegalfinanciald","4-1-3-statusmessages",
  ].map((slug) => ({
    url: `https://app.altorlab.org/wcag/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const useCasePages = [
    "real-estate-staging",
  ].map((slug) => ({
    url: `https://app.altorlab.org/use-cases/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...STATIC_PAGES.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
    ...wcagPages,
    ...useCasePages,
    ...ideaPages,
    ...designPages,
    ...ideasPages,
    ...inspirationPages,
    ...budgetPages,
    ...luxuryPages,
    ...["new-york","los-angeles","chicago","houston","phoenix","philadelphia","san-antonio","san-diego","dallas","san-francisco","austin","seattle","denver","boston","nashville","portland","miami","atlanta","minneapolis","charlotte"].map((city) => ({ url: `https://app.altorlab.org/ai-interior-design-${city}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...["roomgpt","homestyler","havenly","modsy","planner5d","decormatters","roomsketcher"].map((c) => ({ url: `https://app.altorlab.org/${c}-alternative`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...["product-photo","profile-picture","passport-photo","ecommerce","social-media","linkedin","real-estate","amazon-listing","etsy-listing","headshot"].map((u) => ({ url: `https://app.altorlab.org/remove-background-${u}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...blogPages,
  ];
}
