import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WCAG 4.1.3: Status Messages — Level AA Compliance Guide | AltorLab Accessibility",
  description: "Status messages (success, error, loading) must be conveyed to assistive technologies without receiving focus.",
  alternates: { canonical: "https://altorlab.app/wcag/4-1-3-statusmessages" },
  openGraph: {
    title: "WCAG 4.1.3: Status Messages — ADA Compliance Guide",
    description: "Status messages (success, error, loading) must be conveyed to assistive technologies without receiving focus.",
    url: "https://altorlab.app/wcag/4-1-3-statusmessages",
  },
};

export default function WcagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is WCAG 4.1.3 Status Messages?", "acceptedAnswer": {"@type": "Answer", "text": "Status messages (success, error, loading) must be conveyed to assistive technologies without receiving focus."}}, {"@type": "Question", "name": "How do I test for WCAG 4.1.3 compliance?", "acceptedAnswer": {"@type": "Answer", "text": "To test Status Messages: use automated tools like AltorLab\'s scanner for initial detection, then manually verify with keyboard navigation and screen reader testing. Check the specific failure modes described in the WCAG documentation."}}, {"@type": "Question", "name": "How do I fix WCAG 4.1.3 violations?", "acceptedAnswer": {"@type": "Answer", "text": "Use aria-live=\'polite\' for non-urgent status messages and aria-live=\'assertive\' for errors."}}]}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "TechArticle", "headline": "WCAG 4.1.3: Status Messages \\u2014 Level AA Compliance Guide", "description": "Status messages (success, error, loading) must be conveyed to assistive technologies without receiving focus. \'Form submitted successfully\' banners that don\'t use aria-live are invisible to screen reader users.", "url": "https://altorlab.app/wcag/4-1-3-statusmessages", "author": {"@type": "Person", "name": "AltorLab Accessibility Team"}, "datePublished": "2026-04-14", "dateModified": "2026-04-14"}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://altorlab.app"}, {"@type": "ListItem", "position": 2, "name": "WCAG Reference", "item": "https://altorlab.app/wcag"}, {"@type": "ListItem", "position": 3, "name": "4.1.3 Status Messages", "item": "https://altorlab.app/wcag/4-1-3-statusmessages"}]}' }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-500 mb-6">
          <a href="/">Home</a> → <a href="/wcag">WCAG Reference</a> → <span>4.1.3</span>
        </nav>

        <div className="mb-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-stone-100 text-stone-600">🔵 Level AA</span>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          WCAG 4.1.3: Status Messages
        </h1>
        <p className="text-stone-500 mb-8 text-sm">Success Criterion 4.1.3 — Level AA</p>

        <section className="mb-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-lg font-semibold text-stone-900 mb-2">Quick Answer</h2>
          <p className="text-stone-700 leading-relaxed">Status messages (success, error, loading) must be conveyed to assistive technologies without receiving focus.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Why It Matters</h2>
          <p className="text-stone-600 leading-relaxed">'Form submitted successfully' banners that don't use aria-live are invisible to screen reader users.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Audit</h2>
          <p className="text-stone-600 leading-relaxed">
            Run an automated accessibility scan to detect common Status Messages failures. Then manually verify with:
            keyboard-only navigation, a screen reader (VoiceOver on Mac, NVDA on Windows), and browser developer tools.
            Automated tools catch approximately 40% of Status Messages issues — manual testing is essential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Fix</h2>
          <p className="text-stone-600 leading-relaxed">Use aria-live='polite' for non-urgent status messages and aria-live='assertive' for errors.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">What is WCAG 4.1.3 Status Messages?</h3>
              <p className="text-stone-600 text-sm">Status messages (success, error, loading) must be conveyed to assistive technologies without receiving focus.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">Is WCAG 4.1.3 required for ADA compliance?</h3>
              <p className="text-stone-600 text-sm">WCAG 2.1 Level AA is the standard referenced in most ADA website lawsuits and DOJ guidance. All Level AA criteria including this one are relevant to legal compliance.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">How do I fix WCAG 4.1.3 violations?</h3>
              <p className="text-stone-600 text-sm">Use aria-live='polite' for non-urgent status messages and aria-live='assertive' for errors.</p>
            </div>
          </div>
        </section>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500 mb-8">
          <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice.
          Consult a qualified ADA/accessibility attorney for your specific compliance situation.
        </div>

        <section className="p-6 bg-blue-600 rounded-xl text-white text-center">
          <h2 className="text-lg font-semibold mb-2">Scan Your Site for WCAG 4.1.3 Issues</h2>
          <p className="text-blue-100 text-sm mb-4">Get a free automated accessibility report including all WCAG 2.1 AA violations.</p>
          <a href="/" className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
            Run Free Accessibility Scan
          </a>
        </section>
      </main>
    </>
  );
}
