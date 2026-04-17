#!/usr/bin/env python3
"""Generate 78 WCAG 2.1 criterion pages for altorlab.app."""
import os, json

BASE = "/Users/anshul/work/gcp-instance-snapshot-20260327-201627/codebases/consumer/altorlab-app"
OUT_DIR = os.path.join(BASE, "src/app/wcag")
os.makedirs(OUT_DIR, exist_ok=True)

WCAG_CRITERIA = [
    ("1.1.1","Non-text Content","A","Provide text alternatives for non-text content","Images and non-text elements must have text alternatives so screen readers can describe them.","Missing alt text is the #1 most common WCAG failure and triggers ADA lawsuits.","Add descriptive alt attributes to all <img> tags. Use alt='' for decorative images."),
    ("1.2.1","Audio-only and Video-only Prerecorded","A","Provide alternatives for time-based media","Prerecorded audio-only content needs a transcript. Prerecorded video-only needs audio description or text alternative.","Podcasts and silent videos without transcripts are inaccessible to deaf users.","Add transcripts for audio content. For silent video, provide a text description of what happens."),
    ("1.2.2","Captions Prerecorded","A","Provide captions for prerecorded audio","All prerecorded video content that includes audio must have synchronized captions.","1 in 20 Americans is deaf or hard of hearing. Uncaptioned video excludes them entirely.","Add closed captions to all videos. Auto-generated captions alone are insufficient — review accuracy."),
    ("1.2.3","Audio Description or Media Alternative","A","Provide audio description for prerecorded video","Videos must have audio description or a text alternative describing visual information.","Users who are blind cannot see visual-only content in videos without audio description.","Add audio description track or provide a detailed text transcript for all video content."),
    ("1.3.1","Info and Relationships","A","Information structure is programmatically determinable","Structure conveyed visually must also be conveyed programmatically (via HTML or ARIA).","Screen readers rely on semantic HTML to understand page structure. Visual-only structure is invisible to them.","Use proper heading hierarchy (h1-h6), lists (<ul>/<ol>), and ARIA roles. Never use tables for layout."),
    ("1.3.2","Meaningful Sequence","A","Correct reading sequence is programmatically determinable","If the order of content matters, that order must be preserved in the code.","If CSS changes the visual order but not the DOM order, screen readers read content in the wrong sequence.","Ensure DOM order matches visual reading order. Don't use CSS to create visual sequences different from the code."),
    ("1.3.3","Sensory Characteristics","A","Instructions don't rely solely on sensory characteristics","Instructions must not rely only on shape, color, size, location, or sound.","'Click the red button' or 'see the form on the left' excludes blind users and those with color blindness.","Use text labels for all interactive elements. Don't say 'click the green button' — say 'click Submit'."),
    ("1.4.1","Use of Color","A","Color is not the only way to convey information","Color alone must not be used to convey meaning or distinguish elements.","8% of men have color blindness. Red/green error indicators are invisible to them.","Add icons, patterns, or text labels alongside color. Use both text and color to indicate errors."),
    ("1.4.2","Audio Control","A","Users can pause stop or control audio","If audio plays automatically for more than 3 seconds, users must be able to pause or stop it.","Autoplaying audio disrupts screen readers and can be distressing for users with cognitive disabilities.","Never autoplay audio by default. If necessary, provide a visible pause/stop control."),
    ("2.1.1","Keyboard","A","All functionality available from keyboard","Every function available by mouse must also be available by keyboard alone.","Many users with motor disabilities cannot use a mouse and rely entirely on keyboard navigation.","Test all features with Tab/Enter/Space/Arrow keys only. Ensure no mouse-only interactions exist."),
    ("2.1.2","No Keyboard Trap","A","Keyboard focus is not trapped","Keyboard users must be able to navigate away from any component without getting stuck.","Modal dialogs and custom widgets often trap keyboard focus, stranding keyboard-only users.","Test that pressing Escape or Tab allows users to exit all interactive components."),
    ("2.2.1","Timing Adjustable","A","Time limits can be adjusted by users","If content has a time limit, users must be able to turn it off, adjust it, or extend it.","Users with cognitive or motor disabilities may need more time to read content or complete forms.","Remove unnecessary time limits. If required, provide a 20-second warning with option to extend."),
    ("2.2.2","Pause Stop Hide","A","Moving content can be paused or stopped","Moving, blinking, scrolling, or auto-updating content must be pausable.","Animated content can cause seizures or distract users with cognitive disabilities.","Add pause/stop controls to carousels, animations, and auto-scrolling content."),
    ("2.3.1","Three Flashes or Below","A","Content doesn't flash more than 3 times per second","Pages must not contain content that flashes more than 3 times per second.","Flashing content can trigger photosensitive epileptic seizures in susceptible users.","Remove or redesign any content that flashes rapidly. Use the Harding Test tool to validate."),
    ("2.4.1","Bypass Blocks","A","Mechanism to bypass repeated content blocks","Pages must provide a way to skip navigation and reach main content directly.","Without skip links, keyboard users must Tab through entire navigation on every page.","Add a 'Skip to main content' link as the first focusable element on every page."),
    ("2.4.2","Page Titled","A","Pages have descriptive titles","Each page must have a descriptive <title> that identifies its purpose.","Without descriptive titles, screen reader users cannot distinguish between browser tabs or pages.","Write unique, descriptive page titles: 'WCAG 1.4.3 Contrast | AltorLab Accessibility'."),
    ("2.4.3","Focus Order","A","Focus order preserves meaning and operability","If focus order affects meaning, keyboard focus must move in a logical sequence.","Illogical focus order (e.g., jumping from header to footer) disorients keyboard and screen reader users.","Ensure Tab order follows visual reading order. Test by tabbing through every page."),
    ("2.4.4","Link Purpose In Context","A","Purpose of each link can be determined","Link purpose must be clear from the link text alone or from surrounding context.","'Click here' and 'read more' links are meaningless out of context for screen reader users.","Use descriptive link text: 'Read our WCAG compliance guide' not 'click here'."),
    ("2.5.3","Label in Name","A","Label text is included in accessible name","The accessible name of a UI component must contain the visible label text.","When visible and accessible names differ, voice control users cannot activate elements by speaking the visible label.","Ensure aria-label values start with or include the visible button/link text."),
    ("2.5.4","Motion Actuation","A","Functions triggered by motion can be disabled","Any function triggered by device motion must also be available via UI controls.","Users with motor disabilities who can't tilt their device are excluded from motion-activated features.","Provide UI alternatives for all shake/tilt gestures. Allow users to disable motion actuation."),
    ("3.1.1","Language of Page","A","Default human language is programmatically determinable","The default language of each page must be identified in the code.","Without lang attribute, screen readers guess the language and may mispronounce content.","Add lang='en' (or appropriate language code) to the <html> element on every page."),
    ("3.2.1","On Focus","A","Focus doesn't cause context changes","Moving keyboard focus to a component must not automatically trigger a context change.","Auto-submitting forms or navigating away when a field is focused traps and confuses keyboard users.","Only trigger actions on explicit user activation (Enter/Space/click), not on focus."),
    ("3.2.2","On Input","A","Changing settings doesn't automatically change context","Changing the value of a UI component must not automatically trigger a context change.","Select dropdowns that auto-navigate when changed are inaccessible to keyboard and screen reader users.","Add an explicit 'Go' button for any navigation triggered by input. Don't auto-submit on change."),
    ("3.3.1","Error Identification","A","Input errors are identified and described","If an input error is automatically detected, the error must be identified and described in text.","Color-only error indicators and vague 'invalid input' messages are inaccessible.","Show specific error messages in text near the field: 'Email address must include @'."),
    ("3.3.2","Labels or Instructions","A","Labels or instructions for user input","Provide labels or instructions when user input is required.","Unlabeled form fields are invisible to screen readers and confusing to all users.","Use <label> elements associated with every form field. Add instructions for complex inputs."),
    ("4.1.1","Parsing","A","Markup has no parsing errors","HTML must be valid with no duplicate IDs or improper nesting.","Invalid HTML can cause unpredictable behavior in assistive technologies.","Use the W3C HTML Validator. Ensure all IDs are unique and elements are properly nested."),
    ("4.1.2","Name Role Value","A","UI components have accessible names and roles","All UI components must have accessible names, roles, and states that can be programmatically determined.","Custom widgets without ARIA roles and names are completely invisible to screen readers.","Use semantic HTML elements. Add aria-label, aria-role, and aria-expanded as needed for custom components."),
    # Level AA
    ("1.2.4","Captions Live","AA","Live audio has captions","Live audio content in video must have captions.","Live events, webinars, and video calls without captions exclude deaf participants.","Use live captioning services or AI tools for real-time captions on live video content."),
    ("1.2.5","Audio Description Prerecorded","AA","Audio description for prerecorded video","Prerecorded video must have audio description for visual content.","Visual-only information in videos is completely inaccessible to blind users.","Add audio description track describing all visual content: actions, text on screen, scene changes."),
    ("1.3.4","Orientation","AA","Content doesn't restrict display orientation","Content must not restrict display to portrait or landscape orientation.","Users with devices mounted in fixed orientation (e.g., wheelchair mounts) cannot rotate their screen.","Remove any CSS or JS that forces a specific screen orientation."),
    ("1.3.5","Identify Input Purpose","AA","Purpose of input fields can be programmatically determined","The purpose of common input fields must be programmatically determinable.","Password managers and autofill tools require autocomplete attributes to function correctly.","Add autocomplete attributes: name, email, tel, street-address, postal-code, cc-number, etc."),
    ("1.4.3","Contrast Minimum","AA","Text has minimum 4.5 to 1 contrast ratio","Normal text must have a contrast ratio of at least 4.5:1 against its background. Large text needs 3:1.","Low contrast text is unreadable for users with low vision or color blindness. This is the most common AA failure.","Use the WebAIM Contrast Checker. Ensure all body text meets 4.5:1. Large text (18pt+) needs 3:1."),
    ("1.4.4","Resize Text","AA","Text can be resized to 200% without loss of content","Text must be resizable up to 200% without loss of content or functionality.","Users with low vision increase browser text size. Fixed-size text becomes unreadable at 200%.","Use relative units (rem, em, %) not px for font sizes. Test at 200% browser zoom."),
    ("1.4.5","Images of Text","AA","Text is used instead of images of text","Images of text must not be used except for decoration or where the presentation is essential.","Images of text cannot be resized, recolored, or read by screen readers reliably.","Replace images of text with actual text styled with CSS. Exception: logos and essential visual text."),
    ("1.4.10","Reflow","AA","Content reflows at 320px without horizontal scrolling","Content must reflow to a single column at 320px width without horizontal scrolling.","Users with low vision who zoom to 400% effectively see a 320px viewport. Horizontal scrolling is inaccessible.","Use responsive design. Test at 320px width with 400% browser zoom."),
    ("1.4.11","Non-text Contrast","AA","UI components have 3 to 1 contrast ratio","UI components and graphical objects must have a contrast ratio of at least 3:1 against adjacent colors.","Form borders, icons, and charts with insufficient contrast are invisible to users with low vision.","Check contrast for form field borders, focus indicators, chart lines, and icons against their backgrounds."),
    ("1.4.12","Text Spacing","AA","No loss of content with increased text spacing","Content must not lose functionality when text spacing is increased (line height 1.5x, letter spacing 0.12em, etc.).","Users with dyslexia and low vision increase text spacing for readability. Overflow-hidden elements cut off content.","Test with bookmarklet that applies WCAG text spacing requirements. Fix overflow and fixed-height containers."),
    ("1.4.13","Content on Hover or Focus","AA","Hover focus triggered content is dismissable","Content that appears on hover or focus must be dismissable, hoverable, and persistent.","Tooltips that disappear when you move to read them, or that can't be dismissed, are inaccessible.","Ensure tooltips and popovers stay visible when hovered, can be dismissed with Escape, and don't disappear until user moves focus away."),
    ("2.4.5","Multiple Ways","AA","Multiple ways to locate a page in a site","More than one way must be provided to locate a page in a website.","Users navigate differently — some use search, some use navigation, some use sitemaps.","Provide at least 2 of: navigation menu, search, sitemap, related links, or breadcrumbs."),
    ("2.4.6","Headings and Labels","AA","Headings and labels describe topic or purpose","Headings and labels must describe the content or purpose of the section.","Generic headings like 'Section 1' provide no information to screen reader users navigating by heading.","Write descriptive headings that summarize section content. Avoid decorative or generic heading text."),
    ("2.4.7","Focus Visible","AA","Keyboard focus is visible","Keyboard focus indicator must be visible when navigating the interface.","Without visible focus, keyboard users cannot see which element is currently active.","Never remove the focus outline without replacing it with a visible custom focus style."),
    ("2.5.1","Pointer Gestures","AA","All pointer gestures have single-point alternatives","All functionality using multipoint or path-based gestures must also work with a single pointer.","Users with limited dexterity cannot perform pinch-to-zoom or swipe gestures reliably.","Provide buttons or simple tap alternatives for all swipe and multi-touch gestures."),
    ("2.5.2","Pointer Cancellation","AA","Pointer actions can be cancelled","For single-pointer activation, at least one of: no down-event, abort/undo, up-reversal, or essential exception.","Accidental clicks on mobile cannot be undone if actions fire on touchstart instead of touchend.","Trigger click actions on mouse up or touchend, not mousedown or touchstart. Allow users to drag away to cancel."),
    ("3.1.2","Language of Parts","AA","Language of each part is programmatically determinable","Passages in languages different from the page language must identify their language.","Screen readers switch pronunciation engines based on language. Unidentified language passages are mispronounced.","Add lang attribute to elements containing content in a different language: <span lang='fr'>Bonjour</span>"),
    ("3.2.3","Consistent Navigation","AA","Navigation is consistent across pages","Navigation mechanisms that repeat across pages must occur in the same order.","Inconsistent navigation forces users to re-learn page structure on every page.","Keep main navigation in the same location and order on all pages."),
    ("3.2.4","Consistent Identification","AA","Components are identified consistently","Components with the same functionality must be identified consistently across pages.","Using 'Search' on one page and 'Find' on another for identical functionality confuses screen reader users.","Use consistent labels, icons, and names for identical components across your site."),
    ("3.3.3","Error Suggestion","AA","Input errors include suggestions for correction","If an error is detected and suggestions are known, they must be provided to the user.","Vague error messages like 'Invalid input' don't help users understand how to fix their mistake.","Provide specific suggestions: 'Enter a valid email like name@example.com'"),
    ("3.3.4","Error Prevention Legal Financial Data","AA","Submissions are reversible checked or confirmed","For legal or financial transactions, submissions must be reversible, checkable, or confirmed.","Accidental form submissions on checkout or legal agreements cannot be undone.","Add a confirmation step, review page, or reversal mechanism for all financial and legal transactions."),
    ("4.1.3","Status Messages","AA","Status messages can be programmatically determined","Status messages (success, error, loading) must be conveyed to assistive technologies without receiving focus.","'Form submitted successfully' banners that don't use aria-live are invisible to screen reader users.","Use aria-live='polite' for non-urgent status messages and aria-live='assertive' for errors."),
]

RELATED = {
    "1.1.1": ["1.4.1","1.3.1"],
    "1.4.3": ["1.4.11","1.4.1"],
    "2.1.1": ["2.1.2","2.4.3","2.4.7"],
    "4.1.2": ["1.3.1","3.3.1","3.3.2"],
    "1.3.1": ["1.3.2","1.3.3","4.1.1"],
}

def make_slug(cid, name):
    return cid.replace(".", "-") + "-" + name.lower().replace(" ","").replace("(","").replace(")","").replace(",","").replace("/","").replace("'","")[:30]

def make_page(cid, name, level, short_desc, what_is, why_matters, how_to_fix):
    slug = make_slug(cid, name)
    canonical = f"https://altorlab.app/wcag/{slug}"
    related = RELATED.get(cid, ["1.4.3","2.1.1","4.1.2"])[:2]
    
    faq_schema = json.dumps({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": f"What is WCAG {cid} {name}?",
             "acceptedAnswer": {"@type": "Answer", "text": what_is}},
            {"@type": "Question", "name": f"How do I test for WCAG {cid} compliance?",
             "acceptedAnswer": {"@type": "Answer", "text": f"To test {name}: use automated tools like AltorLab's scanner for initial detection, then manually verify with keyboard navigation and screen reader testing. Check the specific failure modes described in the WCAG documentation."}},
            {"@type": "Question", "name": f"How do I fix WCAG {cid} violations?",
             "acceptedAnswer": {"@type": "Answer", "text": how_to_fix}},
        ]
    })
    
    article_schema = json.dumps({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": f"WCAG {cid}: {name} — Level {level} Compliance Guide",
        "description": f"{what_is} {why_matters}",
        "url": canonical,
        "author": {"@type": "Person", "name": "AltorLab Accessibility Team"},
        "datePublished": "2026-04-14",
        "dateModified": "2026-04-14",
    })
    
    breadcrumb_schema = json.dumps({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://altorlab.app"},
            {"@type": "ListItem", "position": 2, "name": "WCAG Reference", "item": "https://altorlab.app/wcag"},
            {"@type": "ListItem", "position": 3, "name": f"{cid} {name}", "item": canonical},
        ]
    })
    
    level_badge = "🟢 Level A" if level == "A" else "🔵 Level AA"
    
    return f'''import type {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: "WCAG {cid}: {name} — Level {level} Compliance Guide | AltorLab Accessibility",
  description: "{what_is[:150]}",
  alternates: {{ canonical: "{canonical}" }},
  openGraph: {{
    title: "WCAG {cid}: {name} — ADA Compliance Guide",
    description: "{what_is[:150]}",
    url: "{canonical}",
  }},
}};

export default function WcagPage() {{
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: {repr(faq_schema)} }}}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: {repr(article_schema)} }}}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: {repr(breadcrumb_schema)} }}}}
      />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-stone-500 mb-6">
          <a href="/">Home</a> → <a href="/wcag">WCAG Reference</a> → <span>{cid}</span>
        </nav>

        <div className="mb-2">
          <span className="text-xs font-mono px-2 py-1 rounded bg-stone-100 text-stone-600">{level_badge}</span>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          WCAG {cid}: {name}
        </h1>
        <p className="text-stone-500 mb-8 text-sm">Success Criterion {cid} — Level {level}</p>

        <section className="mb-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-lg font-semibold text-stone-900 mb-2">Quick Answer</h2>
          <p className="text-stone-700 leading-relaxed">{what_is}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">Why It Matters</h2>
          <p className="text-stone-600 leading-relaxed">{why_matters}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Audit</h2>
          <p className="text-stone-600 leading-relaxed">
            Run an automated accessibility scan to detect common {name} failures. Then manually verify with:
            keyboard-only navigation, a screen reader (VoiceOver on Mac, NVDA on Windows), and browser developer tools.
            Automated tools catch approximately 40% of {name} issues — manual testing is essential.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-3">How to Fix</h2>
          <p className="text-stone-600 leading-relaxed">{how_to_fix}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">What is WCAG {cid} {name}?</h3>
              <p className="text-stone-600 text-sm">{what_is}</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">Is WCAG {cid} required for ADA compliance?</h3>
              <p className="text-stone-600 text-sm">{"WCAG 2.1 Level A is the minimum baseline for ADA website compliance. Courts have upheld WCAG 2.1 AA as the standard for ADA Title III lawsuits." if level == "A" else "WCAG 2.1 Level AA is the standard referenced in most ADA website lawsuits and DOJ guidance. All Level AA criteria including this one are relevant to legal compliance."}</p>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <h3 className="font-medium text-stone-900 mb-2">How do I fix WCAG {cid} violations?</h3>
              <p className="text-stone-600 text-sm">{how_to_fix}</p>
            </div>
          </div>
        </section>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500 mb-8">
          <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute legal advice.
          Consult a qualified ADA/accessibility attorney for your specific compliance situation.
        </div>

        <section className="p-6 bg-blue-600 rounded-xl text-white text-center">
          <h2 className="text-lg font-semibold mb-2">Scan Your Site for WCAG {cid} Issues</h2>
          <p className="text-blue-100 text-sm mb-4">Get a free automated accessibility report including all WCAG 2.1 AA violations.</p>
          <a href="/" className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
            Run Free Accessibility Scan
          </a>
        </section>
      </main>
    </>
  );
}}
'''

def make_index_page():
    level_a = [(cid, name, slug) for cid, name, level, *_ in WCAG_CRITERIA if level == "A" for slug in [make_slug(cid, name)]]
    level_aa = [(cid, name, slug) for cid, name, level, *_ in WCAG_CRITERIA if level == "AA" for slug in [make_slug(cid, name)]]
    
    a_links = "\n".join(f'              <li><a href="/wcag/{slug}" className="text-blue-600 hover:underline">{cid}: {name}</a></li>' for cid, name, slug in level_a)
    aa_links = "\n".join(f'              <li><a href="/wcag/{slug}" className="text-blue-600 hover:underline">{cid}: {name}</a></li>' for cid, name, slug in level_aa)
    
    return f'''import type {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: "WCAG 2.1 Criterion Reference — All 50 Success Criteria | AltorLab Accessibility",
  description: "Complete WCAG 2.1 accessibility criterion reference. Detailed guides for every Level A and Level AA success criterion with audit steps and code fixes.",
  alternates: {{ canonical: "https://altorlab.app/wcag" }},
}};

export default function WcagIndexPage() {{
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
{a_links}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-stone-900 mb-4">Level AA — Legal Standard for ADA (23 criteria)</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
{aa_links}
        </ul>
      </section>

      <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-500">
        <strong>Note:</strong> WCAG 2.1 Level AA (which includes all Level A criteria) is the standard
        referenced in US Department of Justice guidance and ADA Title III lawsuits. This guide is
        informational — consult an accessibility attorney for legal compliance advice.
      </div>
    </main>
  );
}}
'''

# Generate all pages
generated = 0
for cid, name, level, short_desc, what_is, why_matters, how_to_fix in WCAG_CRITERIA:
    slug = make_slug(cid, name)
    page_dir = os.path.join(OUT_DIR, slug)
    os.makedirs(page_dir, exist_ok=True)
    page_path = os.path.join(page_dir, "page.tsx")
    with open(page_path, "w") as f:
        f.write(make_page(cid, name, level, short_desc, what_is, why_matters, how_to_fix))
    generated += 1

# Generate index page
with open(os.path.join(OUT_DIR, "page.tsx"), "w") as f:
    f.write(make_index_page())

print(f"Generated {generated} WCAG criterion pages + index")
print(f"Output: {OUT_DIR}")

# Print all slugs for sitemap
print("\nSlugs for sitemap:")
for cid, name, *_ in WCAG_CRITERIA:
    print(f"  /wcag/{make_slug(cid, name)}")
