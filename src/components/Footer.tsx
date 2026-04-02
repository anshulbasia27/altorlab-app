import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-6 px-4 text-center text-stone-500 text-sm">
      <p>© 2026 AltorLab. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link href="/privacy" className="hover:text-stone-700 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-stone-700 transition-colors">
          Terms of Service
        </Link>
        <a
          href="mailto:hello@altorlab.org"
          className="hover:text-stone-700 transition-colors"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-4 pt-3 border-t border-stone-100">
        <a href="https://altorlab.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">AI Support</a>
        <span className="text-stone-300">·</span>
        <a href="https://altorlab.dev" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">Vector Search</a>
        <span className="text-stone-300">·</span>
        <a href="https://altorlab.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">AI Marketing</a>
        <span className="text-stone-300">·</span>
        <a href="https://app.altorlab.org" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">Room Redesign</a>
        <span className="text-stone-300">·</span>
        <a href="https://kundlimilan.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-stone-700 transition-colors">Kundli Milan</a>
      </div>
    </footer>
  );
}
