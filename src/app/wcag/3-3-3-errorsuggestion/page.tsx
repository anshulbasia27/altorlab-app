import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WCAG 3.3.3: Error Suggestion — Level AA Compliance Guide | AltorLab Accessibility",
  description: "If an error is detected and suggestions are known, they must be provided to the user.",
  alternates: { canonical: "https://altorlab.app/wcag/3-3-3-errorsuggestion" },
  openGraph: {
    title: "WCAG 3.3.3: Error Suggestion — ADA Compliance Guide",
    description: "If an error is detected and suggestions are known, they must be provided to the user.",
    url: "https://altorlab.app/wcag/3-3-3-errorsuggestion",
  },
};

export default function WcagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is WCAG 3.3.3 Error Suggestion?", "acceptedAnswer": {"@type": "Answer", "text": "If an error is detected and suggestions are known, they must be provided to the user."}}, {"@type": "Question", "name": "How do I test for WCAG 3.3.3 compliance?", "acceptedAnswer": {"@type": "Answer", "text": "To test Error Suggestion: use automated tools like AltorLab\'s scanner for initial detection, then manually verify with keyboard navigation and screen reader testing. Check the specific failure modes described in the WCAG documentation."}}, {"@type": "Question", "name": "How do I fix WCAG 3.3.3 violations?", "acceptedAnswer": {"@type": "Answer", "text": "Provide specific suggestions: \'Enter a valid email like name@example.com\'"}}]}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "TechArticle", "headline": "WCAG 3.3.3: Error Suggestion \\u2014 Level AA Compliance Guide", "description": "If an error is detected and suggestions are known, they must be provided to the user. Vague error messages like \'Invalid input\' don\'t help users understand how to fix their mistake.", "url": "https://altorlab.app/wcag/3-3-3-errorsuggestion", "author": {"@type": "Person", "name": "AltorLab Accessibility Team"}, "datePublished": "2026-04-14", "dateModified": "2026-04-14"}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://altorlab.app"}, {"@type": "ListItem", "position": 2, "name": "WCAG Reference", "item": "https://altorlab.app/wcag"}, {"@type": "ListItem", "position": 3, "name": "3.3.3 Error Suggestion", "item": "https://altorlab.app/wcag/3-3-3-errorsuggestion"}]}' }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-500 mb-6">
          <a href="/">Home</a> → <a href="/wcag">WCAG Reference</a> → <span>3.3.3</span>
        </nav>

        <div className="mb-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-stone-100 text-stone-600">🔵 Level AA</span>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          WCAG 3.3.3: Error Suggestion
        </h1>
        <p className="text-stone-500 mb-8 text-sm">Success Criterion 3.3.3 — Level AA</p>

        <section className="mb-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-lg font-semibold text-stone-900 mb-2">Quick Answer</h2>
          <p className="text-stone-700 leading-relaxed">If an error is detected and suggestions are known, they must be provided to the user.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Why It Matters</h2>
          <p className="text-stone-600 leading-relaxed">Vague error messages like 'Invalid input' don't help users understand how to fix their mistake.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Audit</h2>
          <p className="text-stone-600 leading-relaxed">
            Run an automated accessibility scan to detect common Error Suggestion failures. Then manually verify with:
            keyboard-only navigation, a screen reader (VoiceOver on Mac, NVDA on Windows), and browser developer tools.
            Automated tools catch approximately 40% of Error Suggestion issues — manual testing is essential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Fix</h2>
          <p className="text-stone-600 leading-relaxed">Provide specific suggestions: 'Enter a valid email like name@example.com'</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">What is WCAG 3.3.3 Error Suggestion?</h3>
              <p className="text-stone-600 text-sm">If an error is detected and suggestions are known, they must be provided to the user.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">Is WCAG 3.3.3 required for ADA compliance?</h3>
              <p className="text-stone-600 text-sm">WCAG 2.1 Level AA is the standard referenced in most ADA website lawsuits and DOJ guidance. All Level AA criteria including this one are relevant to legal compliance.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">How do I fix WCAG 3.3.3 violations?</h3>
              <p className="text-stone-600 text-sm">Provide specific suggestions: 'Enter a valid email like name@example.com'</p>
            </div>
          </div>
        </section>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500 mb-8">
          <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice.
          Consult a qualified ADA/accessibility attorney for your specific compliance situation.
        </div>

        <section className="p-6 bg-blue-600 rounded-xl text-white text-center">
          <h2 className="text-lg font-semibold mb-2">Scan Your Site for WCAG 3.3.3 Issues</h2>
          <p className="text-blue-100 text-sm mb-4">Get a free automated accessibility report including all WCAG 2.1 AA violations.</p>
          <a href="/" className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
            Run Free Accessibility Scan
          </a>
        </section>
      </main>
    </>
  );
}
