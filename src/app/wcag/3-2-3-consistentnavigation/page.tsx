import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WCAG 3.2.3: Consistent Navigation — Level AA Compliance Guide | AltorLab Accessibility",
  description: "Navigation mechanisms that repeat across pages must occur in the same order.",
  alternates: { canonical: "https://altorlab.app/wcag/3-2-3-consistentnavigation" },
  openGraph: {
    title: "WCAG 3.2.3: Consistent Navigation — ADA Compliance Guide",
    description: "Navigation mechanisms that repeat across pages must occur in the same order.",
    url: "https://altorlab.app/wcag/3-2-3-consistentnavigation",
  },
};

export default function WcagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is WCAG 3.2.3 Consistent Navigation?", "acceptedAnswer": {"@type": "Answer", "text": "Navigation mechanisms that repeat across pages must occur in the same order."}}, {"@type": "Question", "name": "How do I test for WCAG 3.2.3 compliance?", "acceptedAnswer": {"@type": "Answer", "text": "To test Consistent Navigation: use automated tools like AltorLab\'s scanner for initial detection, then manually verify with keyboard navigation and screen reader testing. Check the specific failure modes described in the WCAG documentation."}}, {"@type": "Question", "name": "How do I fix WCAG 3.2.3 violations?", "acceptedAnswer": {"@type": "Answer", "text": "Keep main navigation in the same location and order on all pages."}}]}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "TechArticle", "headline": "WCAG 3.2.3: Consistent Navigation \\u2014 Level AA Compliance Guide", "description": "Navigation mechanisms that repeat across pages must occur in the same order. Inconsistent navigation forces users to re-learn page structure on every page.", "url": "https://altorlab.app/wcag/3-2-3-consistentnavigation", "author": {"@type": "Person", "name": "AltorLab Accessibility Team"}, "datePublished": "2026-04-14", "dateModified": "2026-04-14"}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://altorlab.app"}, {"@type": "ListItem", "position": 2, "name": "WCAG Reference", "item": "https://altorlab.app/wcag"}, {"@type": "ListItem", "position": 3, "name": "3.2.3 Consistent Navigation", "item": "https://altorlab.app/wcag/3-2-3-consistentnavigation"}]}' }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-500 mb-6">
          <a href="/">Home</a> → <a href="/wcag">WCAG Reference</a> → <span>3.2.3</span>
        </nav>

        <div className="mb-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-stone-100 text-stone-600">🔵 Level AA</span>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          WCAG 3.2.3: Consistent Navigation
        </h1>
        <p className="text-stone-500 mb-8 text-sm">Success Criterion 3.2.3 — Level AA</p>

        <section className="mb-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-lg font-semibold text-stone-900 mb-2">Quick Answer</h2>
          <p className="text-stone-700 leading-relaxed">Navigation mechanisms that repeat across pages must occur in the same order.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Why It Matters</h2>
          <p className="text-stone-600 leading-relaxed">Inconsistent navigation forces users to re-learn page structure on every page.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Audit</h2>
          <p className="text-stone-600 leading-relaxed">
            Run an automated accessibility scan to detect common Consistent Navigation failures. Then manually verify with:
            keyboard-only navigation, a screen reader (VoiceOver on Mac, NVDA on Windows), and browser developer tools.
            Automated tools catch approximately 40% of Consistent Navigation issues — manual testing is essential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Fix</h2>
          <p className="text-stone-600 leading-relaxed">Keep main navigation in the same location and order on all pages.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">What is WCAG 3.2.3 Consistent Navigation?</h3>
              <p className="text-stone-600 text-sm">Navigation mechanisms that repeat across pages must occur in the same order.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">Is WCAG 3.2.3 required for ADA compliance?</h3>
              <p className="text-stone-600 text-sm">WCAG 2.1 Level AA is the standard referenced in most ADA website lawsuits and DOJ guidance. All Level AA criteria including this one are relevant to legal compliance.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">How do I fix WCAG 3.2.3 violations?</h3>
              <p className="text-stone-600 text-sm">Keep main navigation in the same location and order on all pages.</p>
            </div>
          </div>
        </section>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500 mb-8">
          <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice.
          Consult a qualified ADA/accessibility attorney for your specific compliance situation.
        </div>

        <section className="p-6 bg-blue-600 rounded-xl text-white text-center">
          <h2 className="text-lg font-semibold mb-2">Scan Your Site for WCAG 3.2.3 Issues</h2>
          <p className="text-blue-100 text-sm mb-4">Get a free automated accessibility report including all WCAG 2.1 AA violations.</p>
          <a href="/" className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
            Run Free Accessibility Scan
          </a>
        </section>
      </main>
    </>
  );
}
