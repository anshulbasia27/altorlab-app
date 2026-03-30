import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-300">
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Free AI Tools by AltorLab
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          Simple AI-powered tools that save you hours. Transform rooms, remove backgrounds, design tattoos — all from your browser.
        </p>
        <Link
          href="/room-redesign"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
        >
          Try AI Room Redesign →
        </Link>
      </section>

      {/* Tools Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Our AI Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/room-redesign" className="group">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500 transition-all duration-200 h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">LIVE</span>
                <span className="text-slate-400 text-sm">₹749/design</span>
              </div>
              <div className="w-full h-32 rounded-lg mb-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Room icon"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">AI Room Redesign</h3>
              <p className="text-slate-400 text-sm">Upload your room photo, choose from 5 styles, get an AI-redesigned room in seconds.</p>
            </div>
          </Link>

          <div className="opacity-60">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">COMING SOON</span>
                <span className="text-slate-400 text-sm">Free</span>
              </div>
              <div className="w-full h-32 rounded-lg mb-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Image icon"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 18.75h.008v.008H18v-.008zm-6-6h.008v.008H12v-.008z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Background Remover</h3>
              <p className="text-slate-400 text-sm">Remove backgrounds from any image instantly. Perfect for product photos and profiles.</p>
            </div>
          </div>

          <div className="opacity-60">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">COMING SOON</span>
                <span className="text-slate-400 text-sm">Free</span>
              </div>
              <div className="w-full h-32 rounded-lg mb-4 bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Tattoo icon"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Tattoo Designer</h3>
              <p className="text-slate-400 text-sm">Describe your tattoo idea and see AI-generated designs before committing to ink.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-white mb-4">What is AltorLab?</h2>
        <p className="text-slate-400 leading-relaxed mb-4">
          AltorLab is a collection of free and affordable AI-powered tools for everyday creative tasks. Our flagship tool, AI Room Redesign, transforms your room photos into beautiful redesigns in seconds. Upload a photo, choose from 5 interior design styles — modern, scandinavian, minimalist, industrial, or bohemian — and download your AI-generated redesign for just ₹749. No subscription required.
        </p>
        <p className="text-slate-400 leading-relaxed">
          We're building more AI tools including background removal and tattoo design. All tools are browser-based — no app downloads needed. Simple, fast, affordable.
        </p>
      </section>
    </main>
  );
}
