import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import { websiteJsonLd, appJsonLd, organizationJsonLd } from "@/lib/seo";
import Footer from "@/components/Footer";
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
    "AltorLab offers free and affordable AI tools. Transform your room with AI Room Redesign from $9.",
  metadataBase: new URL("https://app.altorlab.org"),
  alternates: {
    canonical: "https://app.altorlab.org",
    languages: {
      "en-US": "https://app.altorlab.org",
    },
  },
  openGraph: {
    type: "website",
    siteName: "AltorLab",
    title: "AltorLab — Free AI Tools",
    description:
      "AI Room Redesign from $9. Upload your room photo, choose a style, download your redesign.",
    url: "https://app.altorlab.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "AltorLab — Free AI Tools",
    description: "AI Room Redesign from $9.",
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
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="geo.region" content="US" />
        <link rel="alternate" hrefLang="en-us" href="https://app.altorlab.org" />
        <script
          type="application/ld+json"
        >
          {JSON.stringify(websiteJsonLd)}
        </script>
        <script
          type="application/ld+json"
        >
          {JSON.stringify(organizationJsonLd)}
        </script>
        <script
          type="application/ld+json"
        >
          {JSON.stringify(appJsonLd)}
        </script>
        {/* GA4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
