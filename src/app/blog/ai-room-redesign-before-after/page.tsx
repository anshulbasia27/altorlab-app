import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Room Redesign Before and After: Real Results Revealed",
  description:
    "See real AI room redesign before-and-after examples and learn how US homeowners use AI to plan faster, lower-risk room updates.",
  alternates: {
    canonical: "https://app.altorlab.org/blog/ai-room-redesign-before-after",
  },
  openGraph: {
    title: "AI Room Redesign Before and After: Real Results Revealed",
    description:
      "See real AI room redesign before-and-after examples and learn how US homeowners use AI to plan faster, lower-risk room updates.",
    url: "https://app.altorlab.org/blog/ai-room-redesign-before-after",
    type: "article",
  },
};

const sections = [
  {
    heading: "What actually happens in an AI room redesign",
    paragraphs: [
      "You upload a photo of your room. The AI reads furniture placement, lighting, wall color, and flow, then generates new design directions that still respect the room's real footprint.",
      "The strongest before-and-after results are not fantasy renders. They show believable changes you can actually act on, like lighter paint, cleaner furniture scale, better storage, and a more intentional layout.",
    ],
  },
  {
    heading: "A real-world before-and-after example",
    paragraphs: [
      "Imagine a renter in Brooklyn with a narrow living room, dark furniture, and poor lighting. After uploading a photo, the AI suggests a warmer palette, a smaller coffee table, a new rug size, and a lamp layout that makes the room feel wider and calmer.",
      "That kind of before-and-after is useful because it creates a visual roadmap. Instead of debating abstract ideas, you can see what the room could become before spending on paint, lighting, or furniture.",
    ],
  },
  {
    heading: "Why before-and-after previews work so well",
    paragraphs: [
      "Most homeowners do not struggle because they lack inspiration. They struggle because they cannot picture how inspiration will look in their actual room. AI closes that gap quickly.",
      "A good preview lets you test multiple directions in minutes. You can compare modern against Scandinavian, lighter finishes against moodier ones, and minimal layouts against more layered styling before committing your budget.",
    ],
  },
  {
    heading: "How to use AI output without overspending",
    paragraphs: [
      "Treat the preview like a planning document. Identify the highest-impact changes first, such as paint, lighting, layout, and rug size. Those moves often create more visible improvement than a long list of smaller decor purchases.",
      "Then build in phases. The AI gives you the direction; you control the timeline. That is what makes before-and-after previews so useful for apartments, rentals, and budget-conscious room refreshes.",
    ],
  },
];

const faqs = [
  {
    question: "Do AI room redesign tools work for small US apartments?",
    answer:
      "Yes. They are especially useful in small rooms because layout, storage, and furniture scale have an outsized impact on how open the space feels.",
  },
  {
    question: "Can I use AI redesign results in a rental?",
    answer:
      "Yes. AI previews are great for renter-friendly changes like paint, furniture placement, rugs, lighting, curtains, and removable decor.",
  },
  {
    question: "How accurate are the costs behind an AI redesign?",
    answer:
      "The AI gives you a visual direction, not a final estimate. Use the preview to decide what to change first, then price those changes against your actual budget.",
  },
];

export default function AiRoomRedesignBeforeAfterPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-12 text-gray-200">
      <article className="mx-auto max-w-3xl">
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/blog" className="hover:text-amber-400">
            Blog
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-400">AI Room Redesign Before and After: Real Results Revealed</span>
        </nav>

        <header className="mb-10 border-b border-gray-800 pb-10">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Room Redesign Before and After: Real Results Revealed
          </h1>
          <p className="text-lg leading-8 text-gray-400">
            Before-and-after previews are what make AI room redesign genuinely useful. They turn vague inspiration into something you can judge, compare, and act on before you buy anything.
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold text-white">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-gray-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="my-10 rounded-3xl border border-amber-500/20 bg-amber-500/10 p-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">Want your own before-and-after preview?</h2>
          <p className="mb-6 leading-8 text-gray-300">
            Upload your room photo, pick a style, and get an AI room redesign preview from $9.
          </p>
          <Link
            href="/room-redesign"
            className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-amber-300"
          >
            Try AI Room Redesign
          </Link>
        </section>

        <section className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-800 p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="leading-7 text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
