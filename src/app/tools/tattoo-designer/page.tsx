import type { Metadata } from "next";
import Link from "next/link";
import { buildFaqJsonLd } from "@/lib/geo";

const title = "AI Tattoo Designer — Create Custom Designs Free | AltorLab";
const description =
  "Discover AltorLab's upcoming AI tattoo designer for custom tribal, minimalist, geometric, and first-timer tattoo concepts.";

const faqs = [
  {
    question: "What can an AI tattoo designer help with?",
    answer:
      "It can help you generate visual directions, compare styles, test placements, and clarify the brief you take to a tattoo artist.",
  },
  {
    question: "Can I use AI tattoo designs as my final tattoo?",
    answer:
      "AI works best as concept development. A professional tattoo artist should always refine the design for line weight, body placement, skin tone, healing, and long-term readability.",
  },
];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://app.altorlab.org/tools/tattoo-designer",
  },
  openGraph: {
    title,
    description,
    url: "https://app.altorlab.org/tools/tattoo-designer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function TattooDesignerPage() {
  const faqJsonLd = buildFaqJsonLd(
    faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
  );

  return (
    <main className="min-h-screen bg-slate-900 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <div className="mx-auto max-w-4xl space-y-10">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">Coming soon</p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">AI Tattoo Designer — Create Custom Designs Free</h1>
          <p className="text-lg leading-8 text-slate-400">
            Choosing a tattoo is exciting, but it can also be intimidating because the decision is permanent while your idea is often still vague. AltorLab's upcoming AI tattoo designer is meant to make that early creative stage easier.
            Instead of trying to explain a visual in fragments, you can explore concepts, compare motifs, and arrive at the tattoo studio with a much clearer direction.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">How the AI tattoo designer will work</h2>
          <p className="leading-8 text-slate-400">
            The basic idea is simple: describe the concept you want, choose a broad style direction, and let the model generate multiple visual interpretations. If you want a small moon-and-wave symbol, a full sleeve inspired by mythology,
            or a minimalist line-art reminder of a personal milestone, the tool helps turn that prompt into something visible. That first visual is powerful because many people know what a tattoo means to them emotionally but struggle to picture how it should actually look.
          </p>
          <p className="leading-8 text-slate-400">
            Once you can see the idea, you can refine it. Do you want cleaner lines? Less shading? A stronger geometric frame? A softer botanical feel? The tool is intended to shorten the loop between imagination and review so you get to clarity faster.
            It is not a replacement for an artist. It is a concept engine that helps you discover what you really want before a needle ever touches skin.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">Explore different tattoo styles before you commit</h2>
          <p className="leading-8 text-slate-400">
            Style is often where first-timers get stuck. A good concept can look completely different when translated into tribal, minimalist, geometric, illustrative, neo-traditional, or script-led language. Tribal tattoos rely on rhythm, repetition, and bold shape.
            Minimalist tattoos reduce the idea to a few essential lines. Geometric tattoos add structure, symmetry, and a technical edge. Each approach changes the tone of the design even if the underlying meaning stays the same.
          </p>
          <p className="leading-8 text-slate-400">
            That is why an AI tattoo designer is useful so early in the process. You can test the same concept in multiple visual dialects before you fall in love with the wrong version. Someone who thinks they want a detailed animal tattoo may realise the most elegant solution is actually a minimal contour.
            Someone considering a large sacred geometry tattoo may learn they prefer a simpler symbol that ages better and sits more comfortably on the body.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">Helpful for first tattoos and meaningful custom ideas</h2>
          <p className="leading-8 text-slate-400">
            First tattoos come with a special kind of uncertainty. People worry about regret, size, placement, pain, and whether the idea will still feel right a year later. A concept tool does not solve every concern, but it reduces one major source of hesitation: not knowing what you are saying yes to.
            When you can preview possibilities, you make better decisions and have smarter conversations with tattoo artists.
          </p>
          <p className="leading-8 text-slate-400">
            It is also useful for highly personal tattoos. Memorial pieces, spiritual symbols, zodiac references, travel memories, and cultural motifs all deserve careful handling. The tool can help you explore visual directions respectfully and thoughtfully,
            then carry the best version forward into a professional custom design session. That is far better than walking in with an unclear screenshot and hoping the artist can decode your intent on the spot.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">Placement and readability still matter</h2>
          <p className="leading-8 text-slate-400">
            One of the biggest misunderstandings in tattoo planning is that a design exists independently from the body. It does not. A forearm reads differently from a shoulder blade. A rib tattoo ages differently from a calf tattoo.
            Fine lines may feel elegant on screen but can lose clarity if the placement is small or the skin moves frequently. The upcoming AltorLab experience is meant to help with concept discovery, but the body context remains essential.
          </p>
          <p className="leading-8 text-slate-400">
            That is why the best use of AI is collaborative. Use it to narrow mood, symbolism, and composition. Then let a tattoo artist adjust scale, spacing, line weight, and body flow. The final tattoo becomes stronger because the concept phase was more informed,
            not because the machine replaced the human expert.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">Why an AI tattoo designer is worth trying</h2>
          <p className="leading-8 text-slate-400">
            Tattoos carry emotional weight, and that makes experimentation harder. Most people do not want to bother an artist with ten half-formed ideas, yet they also do not want to settle too quickly. A free concepting tool creates a low-pressure space to explore.
            You can test a tribal band, a minimalist quote, a geometric wolf, or a symbolic lotus without commitment. You can compare the vibe, refine the brief, and notice what keeps coming back.
          </p>
          <p className="leading-8 text-slate-400">
            In that sense, the tool is not only about generating pretty images. It is about helping people think better. The more clearly you can see the idea, the more confidently you can decide whether it belongs on your skin at all.
          </p>
        </section>

        <section className="rounded-3xl border border-rose-500/30 bg-rose-500/10 p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">Coming soon</p>
          <h2 className="mb-3 text-2xl font-semibold text-white">Bookmark the AI tattoo designer</h2>
          <p className="mb-6 leading-8 text-slate-300">
            The tattoo designer is on the AltorLab roadmap. If you want a quicker way to explore custom tattoo concepts before speaking to an artist, save this page and check back soon.
          </p>
          <Link href="/" className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-rose-400">
            Explore AltorLab
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">FAQ</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
              <p className="leading-7 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
