import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WCAG 2.1 Criterion Reference — All 50 Success Criteria | AltorLab Accessibility",
  description: "Complete WCAG 2.1 accessibility criterion reference. Detailed guides for every Level A and Level AA success criterion with audit steps and code fixes.",
  alternates: { canonical: "https://altorlab.app/wcag" },
};

export default function WcagIndexPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-stone-900 mb-4">WCAG 2.1 Success Criteria Reference</h1>
      <p className="text-stone-600 mb-8">
        Complete reference for all WCAG 2.1 accessibility success criteria. Each criterion includes
        what it requires, why it matters for ADA compliance, how to audit your site, and specific fixes.
        Level AA is the US legal standard for ADA website compliance.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-stone-900 mb-4">Level A — Minimum Baseline (27 criteria)</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li><a href="/wcag/1-1-1-non-textcontent" className="text-blue-600 hover:underline">1.1.1: Non-text Content</a></li>
              <li><a href="/wcag/1-2-1-audio-onlyandvideo-onlyprereco" className="text-blue-600 hover:underline">1.2.1: Audio-only and Video-only Prerecorded</a></li>
              <li><a href="/wcag/1-2-2-captionsprerecorded" className="text-blue-600 hover:underline">1.2.2: Captions Prerecorded</a></li>
              <li><a href="/wcag/1-2-3-audiodescriptionormediaalterna" className="text-blue-600 hover:underline">1.2.3: Audio Description or Media Alternative</a></li>
              <li><a href="/wcag/1-3-1-infoandrelationships" className="text-blue-600 hover:underline">1.3.1: Info and Relationships</a></li>
              <li><a href="/wcag/1-3-2-meaningfulsequence" className="text-blue-600 hover:underline">1.3.2: Meaningful Sequence</a></li>
              <li><a href="/wcag/1-3-3-sensorycharacteristics" className="text-blue-600 hover:underline">1.3.3: Sensory Characteristics</a></li>
              <li><a href="/wcag/1-4-1-useofcolor" className="text-blue-600 hover:underline">1.4.1: Use of Color</a></li>
              <li><a href="/wcag/1-4-2-audiocontrol" className="text-blue-600 hover:underline">1.4.2: Audio Control</a></li>
              <li><a href="/wcag/2-1-1-keyboard" className="text-blue-600 hover:underline">2.1.1: Keyboard</a></li>
              <li><a href="/wcag/2-1-2-nokeyboardtrap" className="text-blue-600 hover:underline">2.1.2: No Keyboard Trap</a></li>
              <li><a href="/wcag/2-2-1-timingadjustable" className="text-blue-600 hover:underline">2.2.1: Timing Adjustable</a></li>
              <li><a href="/wcag/2-2-2-pausestophide" className="text-blue-600 hover:underline">2.2.2: Pause Stop Hide</a></li>
              <li><a href="/wcag/2-3-1-threeflashesorbelow" className="text-blue-600 hover:underline">2.3.1: Three Flashes or Below</a></li>
              <li><a href="/wcag/2-4-1-bypassblocks" className="text-blue-600 hover:underline">2.4.1: Bypass Blocks</a></li>
              <li><a href="/wcag/2-4-2-pagetitled" className="text-blue-600 hover:underline">2.4.2: Page Titled</a></li>
              <li><a href="/wcag/2-4-3-focusorder" className="text-blue-600 hover:underline">2.4.3: Focus Order</a></li>
              <li><a href="/wcag/2-4-4-linkpurposeincontext" className="text-blue-600 hover:underline">2.4.4: Link Purpose In Context</a></li>
              <li><a href="/wcag/2-5-3-labelinname" className="text-blue-600 hover:underline">2.5.3: Label in Name</a></li>
              <li><a href="/wcag/2-5-4-motionactuation" className="text-blue-600 hover:underline">2.5.4: Motion Actuation</a></li>
              <li><a href="/wcag/3-1-1-languageofpage" className="text-blue-600 hover:underline">3.1.1: Language of Page</a></li>
              <li><a href="/wcag/3-2-1-onfocus" className="text-blue-600 hover:underline">3.2.1: On Focus</a></li>
              <li><a href="/wcag/3-2-2-oninput" className="text-blue-600 hover:underline">3.2.2: On Input</a></li>
              <li><a href="/wcag/3-3-1-erroridentification" className="text-blue-600 hover:underline">3.3.1: Error Identification</a></li>
              <li><a href="/wcag/3-3-2-labelsorinstructions" className="text-blue-600 hover:underline">3.3.2: Labels or Instructions</a></li>
              <li><a href="/wcag/4-1-1-parsing" className="text-blue-600 hover:underline">4.1.1: Parsing</a></li>
              <li><a href="/wcag/4-1-2-namerolevalue" className="text-blue-600 hover:underline">4.1.2: Name Role Value</a></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-stone-900 mb-4">Level AA — Legal Standard for ADA (23 criteria)</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li><a href="/wcag/1-2-4-captionslive" className="text-blue-600 hover:underline">1.2.4: Captions Live</a></li>
              <li><a href="/wcag/1-2-5-audiodescriptionprerecorded" className="text-blue-600 hover:underline">1.2.5: Audio Description Prerecorded</a></li>
              <li><a href="/wcag/1-3-4-orientation" className="text-blue-600 hover:underline">1.3.4: Orientation</a></li>
              <li><a href="/wcag/1-3-5-identifyinputpurpose" className="text-blue-600 hover:underline">1.3.5: Identify Input Purpose</a></li>
              <li><a href="/wcag/1-4-3-contrastminimum" className="text-blue-600 hover:underline">1.4.3: Contrast Minimum</a></li>
              <li><a href="/wcag/1-4-4-resizetext" className="text-blue-600 hover:underline">1.4.4: Resize Text</a></li>
              <li><a href="/wcag/1-4-5-imagesoftext" className="text-blue-600 hover:underline">1.4.5: Images of Text</a></li>
              <li><a href="/wcag/1-4-10-reflow" className="text-blue-600 hover:underline">1.4.10: Reflow</a></li>
              <li><a href="/wcag/1-4-11-non-textcontrast" className="text-blue-600 hover:underline">1.4.11: Non-text Contrast</a></li>
              <li><a href="/wcag/1-4-12-textspacing" className="text-blue-600 hover:underline">1.4.12: Text Spacing</a></li>
              <li><a href="/wcag/1-4-13-contentonhoverorfocus" className="text-blue-600 hover:underline">1.4.13: Content on Hover or Focus</a></li>
              <li><a href="/wcag/2-4-5-multipleways" className="text-blue-600 hover:underline">2.4.5: Multiple Ways</a></li>
              <li><a href="/wcag/2-4-6-headingsandlabels" className="text-blue-600 hover:underline">2.4.6: Headings and Labels</a></li>
              <li><a href="/wcag/2-4-7-focusvisible" className="text-blue-600 hover:underline">2.4.7: Focus Visible</a></li>
              <li><a href="/wcag/2-5-1-pointergestures" className="text-blue-600 hover:underline">2.5.1: Pointer Gestures</a></li>
              <li><a href="/wcag/2-5-2-pointercancellation" className="text-blue-600 hover:underline">2.5.2: Pointer Cancellation</a></li>
              <li><a href="/wcag/3-1-2-languageofparts" className="text-blue-600 hover:underline">3.1.2: Language of Parts</a></li>
              <li><a href="/wcag/3-2-3-consistentnavigation" className="text-blue-600 hover:underline">3.2.3: Consistent Navigation</a></li>
              <li><a href="/wcag/3-2-4-consistentidentification" className="text-blue-600 hover:underline">3.2.4: Consistent Identification</a></li>
              <li><a href="/wcag/3-3-3-errorsuggestion" className="text-blue-600 hover:underline">3.3.3: Error Suggestion</a></li>
              <li><a href="/wcag/3-3-4-errorpreventionlegalfinanciald" className="text-blue-600 hover:underline">3.3.4: Error Prevention Legal Financial Data</a></li>
              <li><a href="/wcag/4-1-3-statusmessages" className="text-blue-600 hover:underline">4.1.3: Status Messages</a></li>
        </ul>
      </section>

      <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500">
        <strong>Note:</strong> WCAG 2.1 Level AA (which includes all Level A criteria) is the standard
        referenced in US Department of Justice guidance and ADA Title III lawsuits. This guide is
        informational — consult an accessibility attorney for legal compliance advice.
      </div>
    </main>
  );
}
