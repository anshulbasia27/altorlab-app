import type { Metadata } from "next";
import Link from "next/link";
import { ROOMS, STYLES } from "@/lib/seo-data";

const IDEA_ROOMS = ROOMS;

const combos = STYLES.flatMap((style) =>
  IDEA_ROOMS.map((room) => ({
    slug: `${style.slug}-${room.slug}`,
    title: `${style.label} ${room.label}`,
    blurb: `${style.label} ${room.label.toLowerCase()} ideas with practical American-home layouts, colours, and furniture guidance.`,
  }))
);

export const metadata: Metadata = {
  title: {
    absolute: "Interior Design Ideas by Style and Room | AltorLab",
  },
  description:
    "Browse 30 AI-friendly room design idea pages across 5 interior styles and 6 room types for American homes.",
  alternates: {
    canonical: "https://app.altorlab.org/ideas",
  },
};

export default function IdeasHubPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Browse design combinations</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Interior design ideas for every style and room</h1>
        <p className="mb-12 max-w-3xl text-lg leading-8 text-slate-400">
          Explore all 30 style-and-room combinations built for American homes. Each page gives you room-specific sizing, layout tips, colour direction, and a fast path to visualising the concept with AI.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {combos.map((combo) => (
            <Link
              key={combo.slug}
              href={`/ideas/${combo.slug}`}
              className="group rounded-3xl border border-slate-800 bg-slate-800/40 p-6 transition-colors hover:border-indigo-500/60 hover:bg-slate-800/70"
            >
              <h2 className="mb-3 text-2xl font-semibold text-white group-hover:text-indigo-300">{combo.title}</h2>
              <p className="mb-5 leading-7 text-slate-400">{combo.blurb}</p>
              <span className="text-sm font-semibold text-indigo-400">Read ideas →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
