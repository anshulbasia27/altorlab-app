import type { Metadata } from "next";

/**
 * Build metadata object with common defaults
 */
export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL("https://app.altorlab.org"),
    ...overrides,
  };
}

/**
 * Build JSON-LD structured data
 */
export function buildJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    ...data,
  });
}

/**
 * Website JSON-LD schema
 */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AltorLab",
  url: "https://app.altorlab.org",
  description: "AI tools for US creators, sellers, and homeowners.",
  inLanguage: "en-US",
  areaServed: "US",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AltorLab",
  url: "https://app.altorlab.org",
  areaServed: "US",
  knowsLanguage: ["en-US"],
};

export const authorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "AltorLab AI Design Team",
  jobTitle: "AI Interior Design Specialist",
  description: "Expert team specializing in AI-generated interior design, room redesign, and visual transformation tools for US homeowners and real estate professionals.",
  url: "https://app.altorlab.org",
  worksFor: { "@type": "Organization", name: "AltorLab", url: "https://app.altorlab.org" },
};

/**
 * SoftwareApplication JSON-LD schema for AI Room Redesign
 */
export const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Room Redesign",
  url: "https://app.altorlab.org/room-redesign",
  applicationCategory: "UtilitiesApplication",
  areaServed: "US",
  availableLanguage: "en-US",
  offers: {
    "@type": "Offer",
    price: "9",
    priceCurrency: "USD",
  },
};
