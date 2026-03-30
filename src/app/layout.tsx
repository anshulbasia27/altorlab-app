import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { websiteJsonLd, appJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AltorLab — Free AI Tools",
    template: "%s | AltorLab",
  },
  description:
    "AltorLab offers free and affordable AI tools. Transform your room with AI Room Redesign from ₹749.",
  metadataBase: new URL("https://app.altorlab.org"),
  openGraph: {
    type: "website",
    siteName: "AltorLab",
    title: "AltorLab — Free AI Tools",
    description:
      "AI Room Redesign from ₹749. Upload your room photo, choose a style, download your redesign.",
    url: "https://app.altorlab.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "AltorLab — Free AI Tools",
    description: "AI Room Redesign from ₹749.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
