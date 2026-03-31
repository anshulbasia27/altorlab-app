"use client";

import { useState } from "react";
import RoomUpload from "@/components/RoomUpload";
import StyleSelector, { RoomStyle } from "@/components/StyleSelector";
import RoomTypeSelector, { RoomType } from "@/components/RoomTypeSelector";
import PaymentCTA from "@/components/PaymentCTA";
import { buildFaqJsonLd } from "@/lib/geo";

const TOOL_FAQS = [
  {
    question: "How does AI room redesign work?",
    answer:
      "Upload your room photo, select a design style, and our AI transforms your space in under 30 seconds.",
  },
  {
    question: "How much does AI room redesign cost?",
    answer:
      "Each AI room redesign costs ₹749. No subscription required — pay only for what you use.",
  },
  {
    question: "What interior design styles are available?",
    answer:
      "We offer 5 styles: Modern, Scandinavian, Minimalist, Industrial, and Bohemian.",
  },
  {
    question: "Can I redesign any room?",
    answer:
      "Yes — living rooms, bedrooms, kitchens, bathrooms, and home offices are all supported.",
  },
];

const faqJsonLd = buildFaqJsonLd(TOOL_FAQS);

export default function RoomRedesignPage() {
  const [file, setFile] = useState<File | null>(null);
  const [style, setStyle] = useState<RoomStyle>("modern");
  const [roomType, setRoomType] = useState<RoomType>("living room");
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-stone-50 text-stone-600 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-4 tracking-tight">
            Redesign Your Room with AI
          </h1>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Upload a photo of your room, choose a style, and let our AI generate a stunning new interior design in seconds.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="space-y-10">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h2 className="text-xl font-semibold text-stone-900">Upload Photo</h2>
              </div>
              <RoomUpload onFileSelect={setFile} selectedFile={file} />
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h2 className="text-xl font-semibold text-stone-900">Room Details</h2>
              </div>
              <RoomTypeSelector selectedType={roomType} onSelect={setRoomType} />
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h2 className="text-xl font-semibold text-stone-900">Choose Style</h2>
              </div>
              <StyleSelector selectedStyle={style} onSelect={setStyle} />
            </section>

            <section className="pt-6 border-t border-stone-200">
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Where should we send your receipt? (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>

              <PaymentCTA file={file} style={style} roomType={roomType} email={email} />
            </section>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
            Frequently Asked Questions About AI Room Redesign
          </h2>
          <div className="space-y-6">
            {TOOL_FAQS.map((faq) => (
              <div
                key={faq.question}
                className="border border-stone-200 bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
