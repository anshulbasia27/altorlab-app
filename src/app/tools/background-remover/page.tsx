import type { Metadata } from "next";
import Link from "next/link";
import { buildFaqJsonLd } from "@/lib/geo";

const title = "Free AI Background Remover — Remove Backgrounds Instantly | AltorLab";
const description =
  "Learn how AltorLab's upcoming AI background remover will help ecommerce sellers, creators, and job seekers remove image backgrounds instantly for free.";

const faqs = [
  {
    question: "Who is an AI background remover useful for?",
    answer:
      "It is useful for ecommerce sellers, creators, students, job seekers, and anyone who needs a clean cutout image without learning complex photo-editing software.",
  },
  {
    question: "How is AltorLab's background remover different from remove.bg?",
    answer:
      "remove.bg is a mature product with strong bulk workflows. AltorLab is focused on a simpler free experience, the US-friendly use cases, and a direct path from cleanup to marketplace-ready assets.",
  },
];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://app.altorlab.org/tools/background-remover",
  },
  openGraph: {
    title,
    description,
    url: "https://app.altorlab.org/tools/background-remover",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BackgroundRemoverPage() {
  const faqJsonLd = buildFaqJsonLd(
    faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
  );

  return (
    <main className="min-h-screen bg-slate-900 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <div className="mx-auto max-w-4xl space-y-10">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Coming soon</p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Free AI Background Remover — Remove Backgrounds Instantly</h1>
          <p className="text-lg leading-8 text-slate-400">
            AltorLab is building a free AI background remover for people who need clean product images, profile photos, and marketing assets without spending hours in editing software.
            If your goal is to remove a distracting room, replace a messy backdrop, or prepare a listing image that looks professional on a marketplace, this tool is designed to make the job almost instant.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">How the AI background remover will work</h2>
          <p className="leading-8 text-slate-400">
            The workflow is meant to be simple: upload an image, let the model detect the main subject, and receive a clean transparent cutout in seconds. From there, you can place the subject on a white background,
            brand-coloured backdrop, or marketplace-friendly neutral scene. Instead of forcing users through layers, masks, and brush tools, the system is meant to do the hard part automatically while still preserving edges around hair, fabrics,
            accessories, and product contours.
          </p>
          <p className="leading-8 text-slate-400">
            That matters because most people who search for an AI background remover free are not professional retouchers. They are people who need a usable result right now. An Etsy seller wants a handmade candle photo ready for a listing. An Amazon seller wants a kitchen appliance on a clean white canvas.
            A student needs a passport-style photo with a plain background. The value is speed, not editing complexity.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">Built for the US-first use cases</h2>
          <p className="leading-8 text-slate-400">
            Many background removers are built with global generic workflows in mind, but American users often have very specific requirements. Ecommerce sellers on Etsy, Amazon, Shopify, and eBay need images that look sharp even when shot on a phone inside a home or store.
            They may have fluorescent lighting, uneven shadows, cluttered counters, or textured walls in the original photo. A good AI background remover needs to handle those real conditions, not just clean studio images.
          </p>
          <p className="leading-8 text-slate-400">
            Another huge use case is document and profile photography. People need clean headshots for resumes, college applications, LinkedIn, and passport-size photo printing. When the original image is taken at home, there is often furniture, curtains, or an off-white wall behind the person.
            The upcoming AltorLab tool is intended to make that cleanup painless so users can get a cleaner, more official-looking result without a manual photo studio workflow.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">Use cases: sellers, creators, and everyday users</h2>
          <p className="leading-8 text-slate-400">
            For ecommerce sellers, background removal is often the first step in improving conversion. Cleaner imagery makes products easier to compare, reduces distractions, and helps catalog pages feel more trustworthy.
            A seller can photograph jewellery, clothing, cosmetics, home decor, or electronics on a phone, remove the background, and then quickly produce images that feel listing-ready. That can be the difference between a product looking homemade and looking sellable.
          </p>
          <p className="leading-8 text-slate-400">
            For creators and freelancers, the tool can support thumbnails, social posts, posters, and promotional graphics. For everyday users, the simple win is convenience: remove a photo bomb, clean up a family portrait, create a WhatsApp DP, or make a print-friendly school or office photo.
            The keyword may be AI background remover free, but the real promise is fewer editing headaches and faster output for normal people.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">How it compares with remove.bg</h2>
          <p className="leading-8 text-slate-400">
            remove.bg set the standard for fast background removal and remains a strong choice for teams that need API access, automation, or established bulk processing. It is a very good benchmark. But not every user needs a power-user workflow.
            Many people just want a fast result, especially when they are comparing tools on mobile and looking for something lightweight. That is where AltorLab's approach can stand out: a straightforward interface, high-clarity output, and a focus on tasks common in American ecommerce and personal-photo editing.
          </p>
          <p className="leading-8 text-slate-400">
            This is not about pretending remove.bg does not exist. It is about offering a simpler product path for users who want speed, easy access, and a practical way to move from raw image to usable asset.
            If your day-to-day work involves reselling, online catalogs, creator posts, or print shops, that simplicity can matter more than a long feature matrix.
          </p>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-800/40 p-8">
          <h2 className="text-2xl font-semibold text-white">Why clean cutouts matter for conversion</h2>
          <p className="leading-8 text-slate-400">
            Background removal looks like a small edit, but it changes how users read an image. A product with a clear silhouette is easier to evaluate. A person with a neat neutral background looks more credible in professional contexts.
            Even social graphics become easier to design when the subject is isolated. This is especially important on mobile commerce platforms where images are seen quickly and compared side by side.
          </p>
          <p className="leading-8 text-slate-400">
            The coming AltorLab tool is meant to support that outcome without asking users to become designers. The goal is not to overwhelm people with settings. The goal is to help them get a better result faster, then move on with selling, applying, posting, or printing.
          </p>
        </section>

        <section className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Coming soon</p>
          <h2 className="mb-3 text-2xl font-semibold text-white">Want this tool when it launches?</h2>
          <p className="mb-6 leading-8 text-slate-300">
            The free AI background remover is on the roadmap. Until it is live, explore AltorLab's available AI workflows and bookmark this page if you want a faster way to clean photos for ecommerce, profiles, and marketing assets.
          </p>
          <Link href="/room-redesign" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-400">
            Try AltorLab's live AI tool
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
