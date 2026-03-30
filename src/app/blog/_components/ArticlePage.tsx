import Link from "next/link";
import { buildFaqJsonLd } from "@/lib/geo";
import { buildJsonLd } from "@/lib/seo";
import type { BlogArticle } from "../_lib/articles";

export default function ArticlePage({ article }: { article: BlogArticle }) {
  const url = `https://app.altorlab.org/blog/${article.slug}`;

  const articleJsonLd = buildJsonLd({
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedTime,
    dateModified: article.publishedTime,
    author: {
      "@type": "Organization",
      name: "AltorLab",
    },
    publisher: {
      "@type": "Organization",
      name: "AltorLab",
    },
    mainEntityOfPage: url,
  });

  const breadcrumbJsonLd = buildJsonLd({
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://app.altorlab.org",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://app.altorlab.org/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  });

  const faqJsonLd = buildFaqJsonLd(
    article.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
  );

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json">{articleJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <article className="mx-auto max-w-4xl">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-200">{article.title}</span>
        </nav>

        <header className="mb-10 border-b border-slate-800 pb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">AltorLab blog</p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">{article.title}</h1>
          <div className="mb-6 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>{article.publishedTime}</span>
            <span>{article.readingTime}</span>
          </div>
          <p className="text-lg leading-8 text-slate-400">{article.intro}</p>
        </header>

        <div className="space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading} className="rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
              <h2 className="mb-5 text-2xl font-semibold text-white">{section.heading}</h2>
              <div className="space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="leading-8 text-slate-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="my-10 rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Next step</p>
          <h2 className="mb-3 text-2xl font-semibold text-white">Put the idea into action</h2>
          <p className="mb-6 leading-8 text-slate-300">{article.ctaText}</p>
          <Link
            href={article.ctaHref}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            {article.ctaLabel}
          </Link>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-5">
            {article.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-800 p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="leading-7 text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
