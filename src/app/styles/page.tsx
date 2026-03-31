import type { Metadata } from "next";
import Link from "next/link";
import { STYLES } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: { absolute: "Interior Design Styles by Room — AI Redesign Ideas | AltorLab" },
  description:
    "Explore modern, Scandinavian, minimalist, industrial, and bohemian room design ideas for American homes, then redesign your own room with AI from $9.",
  openGraph: {
    title: "Interior Design Styles by Room — AI Redesign Ideas | AltorLab",
    description:
      "Browse 5 interior design styles for American homes and turn your room photo into an AI redesign in seconds.",
    url: "https://app.altorlab.org/styles",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Styles by Room — AI Redesign Ideas | AltorLab",
    description:
      "Modern, Scandinavian, minimalist, industrial, and bohemian design ideas for American homes.",
  },
};

export default function StylesHubPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            AI Room Redesign
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Interior Design Styles for Every Room
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
            Compare the most popular room design styles for American homes, understand the colors and furniture that define each look, and move from inspiration to AI redesign in a few clicks.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        {STYLES.map((style) => (
          <article
            key={style.slug}
            className="rounded-3xl border border-slate-800 bg-slate-800/40 p-7 shadow-xl shadow-slate-950/20"
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-medium text-indigo-300">
                {style.name}
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
                Secondary Hindi label: {style.secondaryHindiLabel}
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-semibold text-white">{style.name} Interior Design</h2>
            <p className="mb-5 leading-relaxed text-slate-400">{style.description}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {style.colors.map((color) => (
                <span
                  key={color}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300"
                >
                  {color}
                </span>
              ))}
            </div>
            <p className="mb-6 text-sm leading-6 text-slate-500">
              Best for homeowners who want {style.name.toLowerCase()} rooms that feel polished, practical, and easy to execute in American homes, villas, and rental homes.
            </p>
            <Link
              href={`/styles/${style.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Explore {style.name} →
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Ready to see your room redesigned?</h2>
          <p className="mb-6 text-base leading-relaxed text-indigo-100">
            Upload your photo, choose a style, and get an AI room redesign from $9. No subscription, no long designer wait times.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/room-redesign"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-slate-100"
            >
              Try AI Room Redesign →
            </Link>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 px-6 py-3 font-semibold text-indigo-100 transition-colors hover:border-indigo-200/50 hover:text-white"
            >
              Browse room types
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
