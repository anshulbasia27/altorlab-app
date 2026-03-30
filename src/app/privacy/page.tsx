import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — AltorLab",
  description:
    "Read how AltorLab collects, uses, stores, and protects room photos, email addresses, payment information, and analytics data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold">
            AltorLab
          </Link>
          <span className="text-slate-400 text-sm">Privacy Policy</span>
        </div>
      </header>

      <section className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            At AltorLab, we respect your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, store, and protect your data when you use our website
            and services.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Room photos uploaded by you for AI processing and redesign
              generation
            </li>
            <li>
              Email address provided for payment receipts and service
              communication
            </li>
            <li>
              Payment information processed through Razorpay (we do not store
              card or UPI details)
            </li>
            <li>
              Usage analytics collected through Google Analytics 4 (GA4), such
              as page views and interaction data
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">
            How We Use Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To process your room photos through our AI service (Replicate API)
              and generate redesigns
            </li>
            <li>To process payments and deliver receipts</li>
            <li>To provide customer support and respond to requests</li>
            <li>
              To improve service quality, performance, and user experience
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">
            Payment Processing
          </h2>
          <p>
            Payments are securely handled by Razorpay. We do not store your full
            card or UPI credential details on our servers. Razorpay processes
            and stores payment data in accordance with its own privacy policy
            and regulatory obligations.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Data Retention
          </h2>
          <p>
            Room photos uploaded for processing are automatically deleted after 7
            days. Payment records are retained as required by law for tax and
            accounting purposes. Email addresses are retained for customer
            support and communication unless you request deletion.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Third-Party Services
          </h2>
          <p>
            We use the following third-party services to operate our platform:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Razorpay</strong> — Payment processing
            </li>
            <li>
              <strong>Replicate API</strong> — AI image processing for room
              redesigns
            </li>
            <li>
              <strong>Google Analytics 4</strong> — Usage analytics and
              performance monitoring
            </li>
            <li>
              <strong>Vercel</strong> — Website hosting and infrastructure
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">
            Analytics and Cookies
          </h2>
          <p>
            We use GA4 to understand aggregate usage patterns and optimize user
            experience. Analytics tools may use cookies or similar technologies
            to measure interactions. You may control cookie behavior through your
            browser settings.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Data Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal data. We share data
            only with essential service providers required to operate our
            platform (payment processors, AI providers, hosting providers), and
            only to the extent necessary for service delivery and legal
            compliance.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Your Rights
          </h2>
          <p>
            You have the right to request deletion of your personal data at any
            time. To exercise this right, please contact us at{" "}
            <Link
              href="mailto:hello@altorlab.org"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              hello@altorlab.org
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
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
