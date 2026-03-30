import type { Metadata } from "next";
import Link from "next/link";
import { ROOMS } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: { absolute: "AI Room Redesign by Room Type — Bedrooms to Kitchens | AltorLab" },
  description:
    "Explore AI room redesign pages for bedrooms, living rooms, kitchens, bathrooms, home offices, and kids rooms. Redesign any room from ₹749.",
  openGraph: {
    title: "AI Room Redesign by Room Type — Bedrooms to Kitchens | AltorLab",
    description:
      "Browse room-specific redesign ideas for Indian homes and see how AI can transform your room from ₹749.",
    url: "https://app.altorlab.org/rooms",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Room Redesign by Room Type — Bedrooms to Kitchens | AltorLab",
    description:
      "Room-specific AI redesign ideas for Indian bedrooms, living rooms, kitchens, bathrooms, home offices, and kids rooms.",
  },
};

export default function RoomsHubPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Programmatic SEO Pages
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Room Redesign Ideas by Room Type
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
            Explore room-specific inspiration for Indian homes, compare design problems by space, and jump into an AI redesign preview before spending on furniture, paint, or renovation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        {ROOMS.map((room) => (
          <article
            key={room.slug}
            className="rounded-3xl border border-slate-800 bg-slate-800/40 p-7 shadow-xl shadow-slate-950/20"
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-medium text-indigo-300">
                {room.name}
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
                {room.hindi}
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-semibold text-white">AI {room.name} Redesign</h2>
            <p className="mb-4 leading-relaxed text-slate-400">
              See layouts, planning tips, and common Indian-home challenges for the {room.name.toLowerCase()} before you redesign.
            </p>
            <p className="mb-6 text-sm leading-6 text-slate-500">Average size: {room.avgSize}</p>
            <Link
              href={`/rooms/${room.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              Explore {room.name} →
            </Link>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Want to redesign your own room today?</h2>
          <p className="mb-6 text-base leading-relaxed text-indigo-100">
            Upload your room photo, pick a style, and get an AI transformation from ₹749 instead of waiting weeks for a traditional interior process.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/room-redesign"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-slate-100"
            >
              Try AI Room Redesign →
            </Link>
            <Link
              href="/styles"
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 px-6 py-3 font-semibold text-indigo-100 transition-colors hover:border-indigo-200/50 hover:text-white"
            >
              Browse design styles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
