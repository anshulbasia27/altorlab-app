import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WCAG 1.1.1: Non-text Content — Level A Compliance Guide | AltorLab Accessibility",
  description: "Images and non-text elements must have text alternatives so screen readers can describe them.",
  alternates: { canonical: "https://altorlab.app/wcag/1-1-1-non-textcontent" },
  openGraph: {
    title: "WCAG 1.1.1: Non-text Content — ADA Compliance Guide",
    description: "Images and non-text elements must have text alternatives so screen readers can describe them.",
    url: "https://altorlab.app/wcag/1-1-1-non-textcontent",
  },
};

export default function WcagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is WCAG 1.1.1 Non-text Content?", "acceptedAnswer": {"@type": "Answer", "text": "Images and non-text elements must have text alternatives so screen readers can describe them."}}, {"@type": "Question", "name": "How do I test for WCAG 1.1.1 compliance?", "acceptedAnswer": {"@type": "Answer", "text": "To test Non-text Content: use automated tools like AltorLab\'s scanner for initial detection, then manually verify with keyboard navigation and screen reader testing. Check the specific failure modes described in the WCAG documentation."}}, {"@type": "Question", "name": "How do I fix WCAG 1.1.1 violations?", "acceptedAnswer": {"@type": "Answer", "text": "Add descriptive alt attributes to all <img> tags. Use alt=\'\' for decorative images."}}]}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "TechArticle", "headline": "WCAG 1.1.1: Non-text Content \\u2014 Level A Compliance Guide", "description": "Images and non-text elements must have text alternatives so screen readers can describe them. Missing alt text is the #1 most common WCAG failure and triggers ADA lawsuits.", "url": "https://altorlab.app/wcag/1-1-1-non-textcontent", "author": {"@type": "Person", "name": "AltorLab Accessibility Team"}, "datePublished": "2026-04-14", "dateModified": "2026-04-14"}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://altorlab.app"}, {"@type": "ListItem", "position": 2, "name": "WCAG Reference", "item": "https://altorlab.app/wcag"}, {"@type": "ListItem", "position": 3, "name": "1.1.1 Non-text Content", "item": "https://altorlab.app/wcag/1-1-1-non-textcontent"}]}' }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-500 mb-6">
          <a href="/">Home</a> → <a href="/wcag">WCAG Reference</a> → <span>1.1.1</span>
        </nav>

        <div className="mb-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-stone-100 text-stone-600">🟢 Level A</span>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          WCAG 1.1.1: Non-text Content
        </h1>
        <p className="text-stone-500 mb-8 text-sm">Success Criterion 1.1.1 — Level A</p>

        <section className="mb-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-lg font-semibold text-stone-900 mb-2">Quick Answer</h2>
          <p className="text-stone-700 leading-relaxed">Images and non-text elements must have text alternatives so screen readers can describe them.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Why It Matters</h2>
          <p className="text-stone-600 leading-relaxed">Missing alt text is the #1 most common WCAG failure and triggers ADA lawsuits.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Audit</h2>
          <p className="text-stone-600 leading-relaxed">
            Run an automated accessibility scan to detect common Non-text Content failures. Then manually verify with:
            keyboard-only navigation, a screen reader (VoiceOver on Mac, NVDA on Windows), and browser developer tools.
            Automated tools catch approximately 40% of Non-text Content issues — manual testing is essential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Fix</h2>
          <p className="text-stone-600 leading-relaxed">Add descriptive alt attributes to all &lt;img&gt; tags. Use alt={''} for decorative images.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">What is WCAG 1.1.1 Non-text Content?</h3>
              <p className="text-stone-600 text-sm">Images and non-text elements must have text alternatives so screen readers can describe them.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">Is WCAG 1.1.1 required for ADA compliance?</h3>
              <p className="text-stone-600 text-sm">WCAG 2.1 Level A is the minimum baseline for ADA website compliance. Courts have upheld WCAG 2.1 AA as the standard for ADA Title III lawsuits.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">How do I fix WCAG 1.1.1 violations?</h3>
              <p className="text-stone-600 text-sm">Add descriptive alt attributes to all &lt;img&gt; tags. Use alt={''} for decorative images.</p>
            </div>
          </div>
        </section>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500 mb-8">
          <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice.
          Consult a qualified ADA/accessibility attorney for your specific compliance situation.
        </div>

        <section className="p-6 bg-blue-600 rounded-xl text-white text-center">
          <h2 className="text-lg font-semibold mb-2">Scan Your Site for WCAG 1.1.1 Issues</h2>
          <p className="text-blue-100 text-sm mb-4">Get a free automated accessibility report including all WCAG 2.1 AA violations.</p>
          <a href="/" className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
            Run Free Accessibility Scan
          </a>
        </section>
      </main>
    </>
  );
}
