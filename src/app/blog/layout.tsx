import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <header className="border-b border-slate-800 bg-slate-950/70 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold text-white transition-colors hover:text-indigo-300">
            AltorLab
          </Link>
          <nav className="flex items-center gap-5 text-sm text-slate-400">
            <Link href="/ideas" className="transition-colors hover:text-white">
              Ideas
            </Link>
            <Link href="/tools/background-remover" className="transition-colors hover:text-white">
              Tools
            </Link>
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
