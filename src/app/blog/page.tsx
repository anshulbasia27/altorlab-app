import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_ARTICLES } from "./_lib/articles";

export const metadata: Metadata = {
  title: { absolute: "AltorLab Blog - AI Design Guides and SEO Articles" },
  description:
    "Read AltorLab guides on AI interior design, room redesign costs, tattoo concepts, and background remover workflows.",
  alternates: {
    canonical: "https://app.altorlab.org/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">Editorial hub</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Blog</h1>
        <p className="mb-12 max-w-3xl text-lg leading-8 text-slate-400">
          Guides, explainers, and SEO articles across AI room redesign, ecommerce image cleanup, and tattoo concept discovery.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {BLOG_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-3xl border border-slate-800 bg-slate-800/40 p-7 transition-colors hover:border-indigo-500/60 hover:bg-slate-800/70"
            >
              <div className="mb-3 flex flex-wrap gap-3 text-sm text-slate-400">
                <span>{article.publishedTime}</span>
                <span>{article.readingTime}</span>
              </div>
              <h2 className="mb-3 text-2xl font-semibold text-white group-hover:text-indigo-300">{article.title}</h2>
              <p className="mb-5 leading-7 text-slate-400">{article.description}</p>
              <span className="text-sm font-semibold text-indigo-400">Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
