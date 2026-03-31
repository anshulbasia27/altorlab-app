import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-600">
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-white border-b border-stone-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
          ✨ 500+ rooms redesigned
        </div>
        <h1 className="text-5xl font-bold text-stone-900 mb-6 tracking-tight">
          Your AI Design Studio
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto mb-10">
          Simple, magical tools to reimagine your space and create beautiful designs. No complex software, just upload and watch the magic happen.
        </p>
        <Link
          href="/room-redesign"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors shadow-sm"
        >
          Try AI Room Redesign →
        </Link>
      </section>

      {/* Tools Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Our Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/room-redesign" className="group block h-full">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-md transition-all duration-200 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">LIVE</span>
                <span className="text-stone-500 text-sm font-medium">₹749/design</span>
              </div>
              <div className="w-full h-40 rounded-xl mb-6 relative overflow-hidden bg-stone-100">
                <Image 
                  src="/images/rooms/living1-after.jpg" 
                  alt="AI Room Redesign Example" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-indigo-600 transition-colors">AI Room Redesign</h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-grow">Upload your room photo, choose from 5 styles, and get a stunning AI-redesigned space in seconds.</p>
            </div>
          </Link>

          <div className="h-full">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 h-full flex flex-col opacity-75">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-50 text-amber-600 text-xs font-semibold px-3 py-1 rounded-full">COMING SOON</span>
                <span className="text-stone-400 text-sm font-medium">Free</span>
              </div>
              <div className="w-full h-40 rounded-xl mb-6 bg-stone-50 border border-stone-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Image icon"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 18.75h.008v.008H18v-.008zm-6-6h.008v.008H12v-.008z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">AI Background Remover</h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-grow">Remove backgrounds from any image instantly. Perfect for product photos and profiles.</p>
            </div>
          </div>

          <div className="h-full">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 h-full flex flex-col opacity-75">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-amber-50 text-amber-600 text-xs font-semibold px-3 py-1 rounded-full">COMING SOON</span>
                <span className="text-stone-400 text-sm font-medium">Free</span>
              </div>
              <div className="w-full h-40 rounded-xl mb-6 bg-stone-50 border border-stone-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Tattoo icon"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">AI Tattoo Designer</h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-grow">Describe your tattoo idea and see AI-generated designs before committing to ink.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">What is AltorLab?</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              AltorLab is a collection of free and affordable AI-powered tools for everyday creative tasks. Our flagship tool, AI Room Redesign, transforms your room photos into beautiful redesigns in seconds.
            </p>
            <p>
              Upload a photo, choose from 5 interior design styles — modern, scandinavian, minimalist, industrial, or bohemian — and download your AI-generated redesign for just ₹749. No subscription required.
            </p>
            <p>
              We're building more AI tools including background removal and tattoo design. All tools are browser-based — no app downloads needed. Simple, fast, affordable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
