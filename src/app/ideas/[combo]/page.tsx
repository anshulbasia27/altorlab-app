import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildFaqJsonLd } from "@/lib/geo";
import { ROOMS, STYLES, getRoomBySlug } from "@/lib/seo-data";

const IDEA_ROOMS = ROOMS;

const comboFaqs = (styleLabel: string, roomLabel: string) => [
  {
    question: `What colours work best for a ${styleLabel.toLowerCase()} ${roomLabel.toLowerCase()}?`,
    answer: `${styleLabel} ${roomLabel.toLowerCase()} designs usually work best with flexible base tones, layered textures, and one intentional accent colour. Durable paint finishes, warm lighting, and matte materials help the palette feel premium while staying practical for everyday use.`,
  },
  {
    question: `Can I use these ${styleLabel.toLowerCase()} ${roomLabel.toLowerCase()} ideas in a small apartment?`,
    answer: `Yes. The key is to keep circulation comfortable, choose furniture that matches the room's footprint, and use storage that reduces clutter. Even compact apartments can carry a ${styleLabel.toLowerCase()} ${roomLabel.toLowerCase()} look when the layout, scale, and lighting are planned carefully.`,
  },
];

function parseCombo(combo: string) {
  for (const style of STYLES) {
    if (!combo.startsWith(`${style.slug}-`)) {
      continue;
    }

    const roomSlug = combo.slice(style.slug.length + 1);
    const room = getRoomBySlug(roomSlug);

    if (room) {
      return { style, room };
    }
  }

  return null;
}

function buildDescription(styleLabel: string, roomLabel: string): string {
  return `${styleLabel} ${roomLabel} ideas with colour palettes, furniture sizing, layout tips, and an AI redesign from $9.`;
}

export function generateStaticParams() {
  return STYLES.flatMap((style) =>
    IDEA_ROOMS.map((room) => ({ combo: `${style.slug}-${room.slug}` }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ combo: string }>;
}): Promise<Metadata> {
  const { combo } = await params;
  const parsed = parseCombo(combo);

  if (!parsed) {
    return {};
  }

  const { style, room } = parsed;
  const title = `${style.label} ${room.label} Ideas for Your Home — AI Design $9 | AltorLab`;
  const description = buildDescription(style.label, room.label);
  const url = `https://app.altorlab.org/ideas/${combo}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ComboIdeaPage({
  params,
}: {
  params: Promise<{ combo: string }>;
}) {
  const { combo } = await params;
  const parsed = parseCombo(combo);

  if (!parsed) {
    notFound();
  }

  const { style, room } = parsed;
  const faqs = comboFaqs(style.label, room.label);
  const faqJsonLd = buildFaqJsonLd(
    faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
  );

  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/ideas" className="transition-colors hover:text-white">
              Ideas
            </Link>
            <span>/</span>
            <span className="text-slate-200">{style.label} {room.label}</span>
          </nav>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Room design inspiration
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {style.label} {room.label} Design Ideas for Your Home
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-400">
            If you want a {style.label.toLowerCase()} {room.label.toLowerCase()} that looks polished in renders and still works for real home living,
            the details matter. The right palette, the right furniture scale, and the right storage strategy can make even a compact space feel custom designed.
            Use these ideas as a practical brief before you redesign your room with AI.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <article className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">Start with the room's real constraints</h2>
              <p className="leading-8 text-slate-400">
                A strong {style.label.toLowerCase()} {room.label.toLowerCase()} does not begin with decor; it begins with proportion. In {room.dimensions}, {room.focalPoint}, so the layout should support that first.
                The smartest move is to plan around furniture placement, windows, storage needs, and utility access before picking colours or fabrics. The smartest move is to keep the circulation simple:
                {` ${room.layout}.`} Once movement feels easy, the style can shine without the room feeling over-designed. This is where AI previews are useful, because you can see whether the concept still feels balanced on your actual footprint instead of on a generic Pinterest image.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                {style.label} rooms feel best when they stay true to their core mood: {style.vibe}. That mood should influence every decision from wall finish to curtain fall. Homes often need the same room to support guests, storage, seasonal changes,
                and everyday convenience. A successful concept therefore mixes aesthetics with routine-friendly practicality. Rather than filling every corner, use the style as a filter that tells you what deserves to stay visible and what should disappear into storage.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">Colours and materials that suit your home</h2>
              <p className="leading-8 text-slate-400">
                For this combination, anchor the palette with {style.palette}. Those tones work because they are flexible across varied light conditions, from bright daylight to softer artificial light.
                Build the larger surfaces first: wall paint, wardrobe laminate, curtains, rugs, and upholstery. Then repeat one accent intentionally rather than spreading many shades around the room. In practice, that could mean a muted green cushion repeated in art and a chair fabric,
                or charcoal details echoed in handles, lamps, and framing.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                Material choice is equally important. {style.materials} all photograph well and also hold up better in real homes than overly glossy finishes. If you want the space to look expensive on a practical budget, mix just two or three finish families and let texture do the work.
                This is especially helpful in a {room.label.toLowerCase()}, where too many unrelated surfaces can make the space feel busy very quickly. {style.indiaNote}.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">Furniture sizing and layout tips</h2>
              <p className="leading-8 text-slate-400">
                Furniture selection should always reflect local room sizes, not international catalog imagery. For this room, a practical starting set is {room.furniture}. Keep the overall composition aligned with {style.furniture}. If a piece visually overpowers the room,
                the style will not read correctly, no matter how beautiful it is on its own. Use fewer but better-proportioned elements, and prefer pieces that either reveal floor below or integrate storage.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                Storage has to be designed as part of the aesthetic, not added later. {style.storage} help maintain the look while supporting Indian households that need room for extra linen, festive decor, cleaning supplies, or work equipment.
                For a {room.label.toLowerCase()}, hidden storage is often what separates a styled photo from a room that can stay tidy every day. Before buying anything, map the furniture onto your floor with tape or use an AI preview to check whether the clearances still feel comfortable.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-white">Lighting, styling, and climate-ready finishing</h2>
              <p className="leading-8 text-slate-400">
                Great styling is less about adding more objects and more about guiding the eye. For this combination, let {style.accent} become the hero. Support it with {style.lighting}. Lighting matters in every home where one room may shift from bright daytime use to warm evening relaxation.
                A layered lighting plan keeps the room flattering across all those moments while also making the colour palette appear richer and more intentional.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                Finish the room with details that reflect daily life here: {room.styling}. Also remember the operating conditions. {room.climate}. When you combine those functional choices with a consistent style language,
                the room stops feeling like a collection of purchases and starts feeling designed. That is exactly why homeowners use AI room redesign before spending money: it helps them compare directions quickly and see which version of the room feels most aligned with their budget and lifestyle.
              </p>
            </div>

            <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
              <h2 className="mb-6 text-2xl font-semibold text-white">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-slate-800 p-5">
                    <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="leading-7 text-slate-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Try it on your actual room</p>
              <h2 className="mb-3 text-2xl font-semibold text-white">See this style in seconds</h2>
              <p className="mb-6 leading-7 text-slate-300">
                Upload your room photo, pick a style, and get an AI room redesign from $9. It is the fastest way to validate a {style.label.toLowerCase()} {room.label.toLowerCase()} direction before you buy paint, furniture, or lighting.
              </p>
              <Link
                href="/room-redesign"
                className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                Redesign this room
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-800/40 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">Quick planning checklist</h2>
              <ul className="space-y-3 text-sm leading-7 text-slate-400">
                <li>• Confirm your room measurements before shopping.</li>
                <li>• Keep the palette to one base family and one accent family.</li>
                <li>• Prioritise storage that reduces visible clutter.</li>
                <li>• Use warm lighting to make the finishes feel richer.</li>
                <li>• Preview the concept on your real room before spending.</li>
              </ul>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
}
