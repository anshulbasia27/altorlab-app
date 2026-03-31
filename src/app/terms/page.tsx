import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — AltorLab",
  description:
    "Read AltorLab terms for AI room redesign service, pricing, refunds, acceptable use, and limitation of liability.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold">
            AltorLab
          </Link>
          <span className="text-slate-400 text-sm">Terms of Service</span>
        </div>
      </header>

      <section className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            These Terms of Service govern your use of AltorLab and the purchase
            of our AI room redesign service. By using our website, you agree to
            these terms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Service Description
          </h2>
          <p>
            AltorLab provides an AI-powered room redesign service. Users upload a
            photo of their room, select a design style, and receive AI-generated
            redesign images. The service costs $9 per redesign.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Pricing and Payment
          </h2>
          <p>
            The price for each room redesign is $9. Pricing is displayed on the
            website at the time of purchase. All payments are processed securely
            through Razorpay and are subject to successful authorization by your
            selected payment method.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Ownership of Redesigns
          </h2>
          <p>
            All AI-generated redesigns created through AltorLab are owned by the
            user who paid for them. You may use, download, and share the
            redesigns for personal use. You may not commercially resell the
            redesigns or the AltorLab service without explicit written permission.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Upload photos containing illegal content or content that violates
              third-party rights
            </li>
            <li>
              Upload photos of people without their consent (unless it is your
              own room with your own photos)
            </li>
            <li>
              Attempt to reverse-engineer, copy, or resell the AltorLab service
              or AI models
            </li>
            <li>
              Use the service for commercial purposes without explicit written
              permission
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">
            Refund Policy
          </h2>
          <p>
            If the AI fails to generate a valid redesign for your room photo, we
            will provide a full refund within 24 hours of your request. Refunds
            for completed and delivered redesigns are not available. Refund
            requests must be submitted within 7 days of purchase.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Disclaimer
          </h2>
          <p>
            AI-generated redesigns are provided for inspiration and visualization
            purposes only. We do not guarantee that the redesigns are accurate,
            feasible for actual renovation, or suitable for your specific space.
            Always consult with a professional interior designer or architect
            before making renovation decisions based on AI-generated designs.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Intellectual Property
          </h2>
          <p>
            All content, branding, software, AI models, and service logic are the
            intellectual property of AltorLab unless otherwise stated. You may
            not copy, resell, republish, or distribute our materials without
            prior written permission.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, AltorLab shall not be liable
            for indirect, incidental, special, consequential, or punitive damages
            arising from your use of the service. Our total liability in any
            matter shall not exceed the amount paid by you for the relevant
            redesign order.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
          <p>
            For any questions regarding these terms, contact us at{" "}
            <Link
              href="mailto:hello@altorlab.org"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              hello@altorlab.org
            </Link>
            .
          </p>

          <p className="text-slate-400 text-sm mt-12">Last updated: March 2026</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
