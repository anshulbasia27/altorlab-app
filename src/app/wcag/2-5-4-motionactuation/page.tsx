import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WCAG 2.5.4: Motion Actuation — Level A Compliance Guide | AltorLab Accessibility",
  description: "Any function triggered by device motion must also be available via UI controls.",
  alternates: { canonical: "https://altorlab.app/wcag/2-5-4-motionactuation" },
  openGraph: {
    title: "WCAG 2.5.4: Motion Actuation — ADA Compliance Guide",
    description: "Any function triggered by device motion must also be available via UI controls.",
    url: "https://altorlab.app/wcag/2-5-4-motionactuation",
  },
};

export default function WcagPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is WCAG 2.5.4 Motion Actuation?", "acceptedAnswer": {"@type": "Answer", "text": "Any function triggered by device motion must also be available via UI controls."}}, {"@type": "Question", "name": "How do I test for WCAG 2.5.4 compliance?", "acceptedAnswer": {"@type": "Answer", "text": "To test Motion Actuation: use automated tools like AltorLab\'s scanner for initial detection, then manually verify with keyboard navigation and screen reader testing. Check the specific failure modes described in the WCAG documentation."}}, {"@type": "Question", "name": "How do I fix WCAG 2.5.4 violations?", "acceptedAnswer": {"@type": "Answer", "text": "Provide UI alternatives for all shake/tilt gestures. Allow users to disable motion actuation."}}]}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "TechArticle", "headline": "WCAG 2.5.4: Motion Actuation \\u2014 Level A Compliance Guide", "description": "Any function triggered by device motion must also be available via UI controls. Users with motor disabilities who can\'t tilt their device are excluded from motion-activated features.", "url": "https://altorlab.app/wcag/2-5-4-motionactuation", "author": {"@type": "Person", "name": "AltorLab Accessibility Team"}, "datePublished": "2026-04-14", "dateModified": "2026-04-14"}' }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://altorlab.app"}, {"@type": "ListItem", "position": 2, "name": "WCAG Reference", "item": "https://altorlab.app/wcag"}, {"@type": "ListItem", "position": 3, "name": "2.5.4 Motion Actuation", "item": "https://altorlab.app/wcag/2-5-4-motionactuation"}]}' }}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-500 mb-6">
          <a href="/">Home</a> → <a href="/wcag">WCAG Reference</a> → <span>2.5.4</span>
        </nav>

        <div className="mb-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-stone-100 text-stone-600">🟢 Level A</span>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          WCAG 2.5.4: Motion Actuation
        </h1>
        <p className="text-stone-500 mb-8 text-sm">Success Criterion 2.5.4 — Level A</p>

        <section className="mb-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-lg font-semibold text-stone-900 mb-2">Quick Answer</h2>
          <p className="text-stone-700 leading-relaxed">Any function triggered by device motion must also be available via UI controls.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Why It Matters</h2>
          <p className="text-stone-600 leading-relaxed">Users with motor disabilities who can't tilt their device are excluded from motion-activated features.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Audit</h2>
          <p className="text-stone-600 leading-relaxed">
            Run an automated accessibility scan to detect common Motion Actuation failures. Then manually verify with:
            keyboard-only navigation, a screen reader (VoiceOver on Mac, NVDA on Windows), and browser developer tools.
            Automated tools catch approximately 40% of Motion Actuation issues — manual testing is essential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Fix</h2>
          <p className="text-stone-600 leading-relaxed">Provide UI alternatives for all shake/tilt gestures. Allow users to disable motion actuation.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">What is WCAG 2.5.4 Motion Actuation?</h3>
              <p className="text-stone-600 text-sm">Any function triggered by device motion must also be available via UI controls.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">Is WCAG 2.5.4 required for ADA compliance?</h3>
              <p className="text-stone-600 text-sm">WCAG 2.1 Level A is the minimum baseline for ADA website compliance. Courts have upheld WCAG 2.1 AA as the standard for ADA Title III lawsuits.</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">How do I fix WCAG 2.5.4 violations?</h3>
              <p className="text-stone-600 text-sm">Provide UI alternatives for all shake/tilt gestures. Allow users to disable motion actuation.</p>
            </div>
          </div>
        </section>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500 mb-8">
          <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice.
          Consult a qualified ADA/accessibility attorney for your specific compliance situation.
        </div>

        <section className="p-6 bg-blue-600 rounded-xl text-white text-center">
          <h2 className="text-lg font-semibold mb-2">Scan Your Site for WCAG 2.5.4 Issues</h2>
          <p className="text-blue-100 text-sm mb-4">Get a free automated accessibility report including all WCAG 2.1 AA violations.</p>
          <a href="/" className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
            Run Free Accessibility Scan
          </a>
        </section>
      </main>
    </>
  );
}
