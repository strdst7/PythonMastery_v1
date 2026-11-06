import type { Translation } from "../i18n/translations";

export default function Footer({ t }: { t: Translation }) {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6">
        <div className="mb-4 flex items-center justify-center gap-1.5 text-xl font-bold text-slate-800">
          <span className="text-2xl">🐍</span> Python Mastery
        </div>
        <p className="mx-auto mb-3 max-w-xl text-sm leading-relaxed text-slate-500">
          {t.interactiveNote}
        </p>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            {t.footerBy} aimirah.com
          </span>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
            🐍 Python 3.14 · 2026 Edition
          </span>
        </div>
        <p className="text-sm font-semibold text-slate-700">{t.copyright}</p>
        <p className="mt-1 text-xs text-slate-400">{t.rightReserved}</p>
        <p className="mt-4 text-xs font-medium tracking-wide text-slate-400">
          aimirah.com 2026 · Created by Nur Amirah Mohd Kamil
        </p>
      </div>
    </footer>
  );
}
