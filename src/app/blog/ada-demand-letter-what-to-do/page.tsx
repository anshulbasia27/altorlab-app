import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Received an ADA Demand Letter? Your 30-Day Action Plan (2026) | AltorLab",
  description: "If you received an ADA demand letter about your website, don't panic. Here's exactly what to do in the next 30 days to respond, remediate, and protect your business.",
  alternates: { canonical: "https://altorlab.app/blog/ada-demand-letter-what-to-do" },
};

export default function ADADemandLetterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", "name": "What is an ADA website demand letter?",
        "acceptedAnswer": { "@type": "Answer", "text": "An ADA demand letter is a notice from an attorney claiming your website violates the Americans with Disabilities Act by not meeting WCAG accessibility standards. It typically demands remediation and may threaten a lawsuit if you don't respond." } },
      { "@type": "Question", "name": "Do I have to respond to an ADA demand letter?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Ignoring an ADA demand letter typically leads to a filed lawsuit. Most cases settle when defendants demonstrate good-faith remediation efforts. Consulting an ADA attorney within 3 business days of receipt is strongly recommended." } },
      { "@type": "Question", "name": "How much does an ADA website lawsuit cost?",
        "acceptedAnswer": { "@type": "Answer", "text": "ADA website lawsuits typically cost $25,000-$100,000+ in legal fees and settlements. Early settlement after a demand letter typically costs $5,000-$20,000. Proactive remediation before a lawsuit is far less expensive." } },
      { "@type": "Question", "name": "What WCAG standard do I need to meet for ADA compliance?",
        "acceptedAnswer": { "@type": "Answer", "text": "Courts and the DOJ generally reference WCAG 2.1 Level AA as the standard for ADA website compliance. This includes 50 success criteria covering contrast, keyboard navigation, alt text, captions, and more." } },
      { "@type": "Question", "name": "How long does it take to fix ADA compliance issues?",
        "acceptedAnswer": { "@type": "Answer", "text": "Simple websites can address critical ADA issues in 2-4 weeks. Complex sites with custom components may take 2-3 months for full WCAG 2.1 AA compliance. Prioritize the highest-impact issues first when responding to a demand letter." } },
      { "@type": "Question", "name": "Can I use an accessibility overlay to fix ADA issues?",
        "acceptedAnswer": { "@type": "Answer", "text": "Accessibility overlays (widgets that claim to auto-fix accessibility) are not a legally defensible solution and have been named in lawsuits themselves. Courts have not accepted overlays as adequate remediation. Fix the underlying code instead." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-500 mb-6">
          <a href="/">Home</a> → <a href="/blog">Blog</a> → <span>ADA Demand Letter</span>
        </nav>

        <h1 className="text-3xl font-bold text-stone-900 mb-4">
          Received an ADA Demand Letter? Here&apos;s Your 30-Day Action Plan (2026)
        </h1>

        <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl mb-8">
          <p className="text-stone-700 leading-relaxed">
            <strong>Quick answer:</strong> If you received an ADA demand letter about your website, don&apos;t panic.
            You have options. Most website ADA cases settle out of court when you respond quickly and demonstrate
            good-faith remediation efforts. Here&apos;s exactly what to do in the next 30 days.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">What Is an ADA Website Demand Letter?</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            An ADA demand letter is a notice from an attorney claiming your website violates the Americans with
            Disabilities Act (ADA) by failing to meet Web Content Accessibility Guidelines (WCAG) standards.
            The letter typically identifies specific violations, names the plaintiff (often a person with a disability
            who encountered barriers on your site), and demands remediation - sometimes with a settlement amount.
          </p>
          <p className="text-stone-600 leading-relaxed">
            ADA website lawsuits increased dramatically in recent years. In 2023, over 4,600 ADA website lawsuits
            were filed in federal court. Retail, food service, and healthcare are the most targeted industries.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Do Not Ignore It</h2>
          <p className="text-stone-600 leading-relaxed">
            Ignoring an ADA demand letter almost always results in a filed lawsuit. Once a lawsuit is filed,
            your legal costs increase dramatically - typically $50,000-$150,000+ versus $5,000-$20,000 for
            early settlement. The letter is a negotiating opportunity. Use it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Step 1: Consult an ADA Attorney (Days 1-3)</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Within 3 business days of receiving the letter, consult an attorney who specializes in ADA Title III
            website accessibility. Do not respond to the letter yourself. Do not admit fault in any communication.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Search for &quot;ADA website accessibility attorney&quot; in your state. Many offer free initial consultations.
            Your attorney will review the specific claims, assess the strength of the case, and advise on response strategy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Step 2: Audit Your Website (Days 1-7)</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Simultaneously with getting legal counsel, audit your website for WCAG 2.1 Level AA violations.
            This serves two purposes: understanding the scope of the problem, and demonstrating good-faith
            remediation efforts to the opposing counsel.
          </p>
          <p className="text-stone-600 leading-relaxed mb-3">Run an automated scan first to identify the most common violations:</p>
          <ul className="list-disc pl-6 text-stone-600 space-y-1 mb-3">
            <li>Missing alt text on images</li>
            <li>Insufficient color contrast (below 4.5:1 ratio)</li>
            <li>Missing form field labels</li>
            <li>Keyboard navigation failures</li>
            <li>Missing captions on videos</li>
          </ul>
          <p className="text-stone-600 leading-relaxed">
            Automated tools catch approximately 30-40% of issues. Manual testing with a screen reader (VoiceOver on Mac,
            NVDA on Windows) is also required for a complete audit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Step 3: Document Your Remediation Plan (Days 7-14)</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Create a written remediation plan that includes:
          </p>
          <ul className="list-disc pl-6 text-stone-600 space-y-1">
            <li>Specific violations identified in the audit</li>
            <li>Priority order for fixes (high-impact first)</li>
            <li>Timeline for remediation (be realistic - 30-90 days is common)</li>
            <li>Assigned responsibility for each fix</li>
            <li>Testing plan to verify fixes</li>
          </ul>
          <p className="text-stone-600 leading-relaxed mt-3">
            This documented plan demonstrates good faith and can be shared with opposing counsel as part of settlement negotiations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Step 4: Fix Critical Issues First (Days 7-30)</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Prioritize fixes by impact and frequency. The most common violations cited in ADA lawsuits:
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-stone-100">
                <tr>
                  <th className="p-3 border border-stone-200">Violation</th>
                  <th className="p-3 border border-stone-200">Priority</th>
                  <th className="p-3 border border-stone-200">Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-stone-200">Missing alt text</td><td className="p-3 border border-stone-200">Critical</td><td className="p-3 border border-stone-200">Add descriptive alt attributes to all images</td></tr>
                <tr><td className="p-3 border border-stone-200">Low color contrast</td><td className="p-3 border border-stone-200">Critical</td><td className="p-3 border border-stone-200">Ensure 4.5:1 ratio for body text, 3:1 for large text</td></tr>
                <tr><td className="p-3 border border-stone-200">Missing form labels</td><td className="p-3 border border-stone-200">High</td><td className="p-3 border border-stone-200">Associate &lt;label&gt; with every input field</td></tr>
                <tr><td className="p-3 border border-stone-200">Keyboard trap</td><td className="p-3 border border-stone-200">High</td><td className="p-3 border border-stone-200">Ensure keyboard users can navigate away from all elements</td></tr>
                <tr><td className="p-3 border border-stone-200">Missing captions</td><td className="p-3 border border-stone-200">High</td><td className="p-3 border border-stone-200">Add captions to all videos</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Step 5: Respond to the Demand Letter (Days 14-21)</h2>
          <p className="text-stone-600 leading-relaxed">
            Through your attorney, respond with your remediation plan and evidence of good-faith efforts.
            Most plaintiffs&apos; attorneys prefer settlement to litigation - demonstrating active remediation
            significantly improves your negotiating position. Settlement amounts typically range from
            $5,000-$20,000 at the demand letter stage versus $50,000+ after a lawsuit is filed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              ["Do I have to respond to an ADA demand letter?", "Yes. Ignoring a demand letter typically leads to a filed lawsuit. Most cases settle when defendants demonstrate good-faith remediation. Respond within 14 days through your attorney."],
              ["How much does an ADA website lawsuit cost?", "ADA website lawsuits typically cost $25,000-$100,000+ in legal fees and settlements. Early settlement after a demand letter usually costs $5,000-$20,000. Proactive remediation before a lawsuit is far less expensive."],
              ["Can I use an accessibility overlay to fix ADA issues?", "No. Accessibility overlays are not a legally defensible solution. Courts have not accepted overlays as adequate remediation, and they have been named in lawsuits themselves. Fix the underlying code."],
              ["What WCAG standard do I need to meet?", "Courts and the DOJ reference WCAG 2.1 Level AA as the standard for ADA website compliance. This covers 50 success criteria including contrast, keyboard navigation, alt text, captions, and form accessibility."],
              ["How long does remediation take?", "Simple sites can address critical issues in 2-4 weeks. Complex sites may take 2-3 months. Showing active progress is more important than completing all fixes before responding."],
            ].map(([q, a]) => (
              <div key={q} className="p-4 border border-stone-200 rounded-lg">
                <h3 className="font-medium text-stone-900 mb-2">{q}</h3>
                <p className="text-stone-600 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500 mb-8">
          <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice.
          Consult a qualified ADA/accessibility attorney for guidance specific to your situation.
        </div>

        <section className="p-6 bg-blue-600 rounded-xl text-white text-center">
          <h2 className="text-lg font-semibold mb-2">Audit Your Website for ADA Violations</h2>
          <p className="text-blue-100 text-sm mb-4">Free accessibility scan covering all WCAG 2.1 AA criteria.</p>
          <a href="/" className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
            Run Free Scan
          </a>
        </section>
      </main>
    </>
  );
}
