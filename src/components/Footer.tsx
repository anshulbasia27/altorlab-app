import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-6 px-4 text-center text-slate-500 text-sm">
      <p>© 2026 AltorLab. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link href="/privacy" className="hover:text-slate-300 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-slate-300 transition-colors">
          Terms of Service
        </Link>
        <a
          href="mailto:hello@altorlab.org"
          className="hover:text-slate-300 transition-colors"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
