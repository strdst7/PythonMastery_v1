import { useEffect, useMemo, useState } from "react";
import { Menu, Globe, Printer, ChevronLeft, ChevronRight } from "lucide-react";
import { translations, type Lang } from "./i18n/translations";
import { chapters } from "./data";
import Sidebar from "./components/Sidebar";
import Chapter from "./components/Chapter";
import Introduction from "./components/Introduction";
import FinalWords from "./components/FinalWords";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeId, setActiveId] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const t = translations[lang];

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  // global search across chapters
  const visibleIds = useMemo(() => {
    if (!searchQuery.trim()) return new Set<number>();
    const q = searchQuery.toLowerCase();
    const hits = new Set<number>();
    for (const c of chapters) {
      const haystack = [
        c.title.en,
        c.title.bm,
        c.subtitle.en,
        c.subtitle.bm,
        ...c.learningGoals.flat(),
        ...c.keyConcepts.flat(),
        ...c.blocks
          .filter((b) => b.text)
          .map((b) => b.text as string),
      ]
        .join(" ")
        .toLowerCase();
      const inText = haystack.includes(q);
      const inCode = c.blocks.some((b) => b.code && b.code.code.toLowerCase().includes(q));
      if (inText || inCode) hits.add(c.id);
    }
    return hits;
  }, [searchQuery]);

  const goTo = (id: number) => {
    setActiveId(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const LAST_FINAL = -1;

  const next = () => {
    if (activeId === 0) goTo(chapters[0].id);
    else {
      const idx = chapters.findIndex((c) => c.id === activeId);
      if (idx === chapters.length - 1) goTo(LAST_FINAL);
      else goTo(chapters[idx + 1].id);
    }
  };

  const prev = () => {
    if (activeId === LAST_FINAL) {
      goTo(chapters[chapters.length - 1].id);
      return;
    }
    if (activeId === 0) return;
    const idx = chapters.findIndex((c) => c.id === activeId);
    if (idx === 0) goTo(0);
    else goTo(chapters[idx - 1].id);
  };

  const activeChapter =
    activeId === 0 || activeId === LAST_FINAL
      ? null
      : chapters.find((c) => c.id === activeId) ?? null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <button onClick={() => goTo(0)} className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-lg">
                🐍
              </span>
              <span className="hidden text-lg font-bold tracking-tight sm:block">
                Python <span className="text-indigo-600">Mastery</span>
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "bm" : "en")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Globe className="h-4 w-4 text-indigo-500" />
              {lang === "en" ? "Bahasa Melayu" : "English"}
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">{t.printButton}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero for intro page */}
      {activeId === 0 && (
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-700 text-white">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url(/images/cover-sm.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-700/40" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
                  <span className="text-yellow-300">★</span>{" "}
                  {t.totalChapters} · Python 3.14 (2026) ·{" "}
                  {lang === "bm" ? "EN/BM" : "EN/BM"}
                </div>
                <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                  {lang === "en"
                    ? "Master the Python Programming Language"
                    : "Kuasa Bahasa Pengaturcaraan Python"}
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-indigo-100/90">
                  {t.heroTagline}
                </p>
                <p className="mt-3 max-w-2xl text-sm text-indigo-200/70">
                  {t.interactiveNote}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => goTo(chapters[0].id)}
                    className="rounded-xl bg-white px-7 py-3 text-sm font-bold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
                  >
                    🚀 {t.heroCta}
                  </button>
                  <button
                    onClick={() =>
                      (document
                        .querySelector("#intro-cards")
                        ?.scrollIntoView({ behavior: "smooth" }))
                    }
                    className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {t.heroSecondary}
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/images/cover.jpg"
                  alt="Python Mastery eBook cover"
                  className="mx-auto w-full max-w-sm rounded-2xl border border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:flex lg:gap-8">
          <Sidebar
            chapters={chapters}
            activeId={activeId}
            onSelect={goTo}
            t={t}
            lang={lang}
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            visibleIds={visibleIds}
          />

          <main className="min-w-0 flex-1 pb-10">
            {activeId === LAST_FINAL ? (
              <FinalWords
                t={t}
                lang={lang}
                onRestart={() => goTo(0)}
              />
            ) : activeChapter ? (
              <Chapter key={activeChapter.id} chapter={activeChapter} t={t} lang={lang} />
            ) : (
              <Introduction
                t={t}
                lang={lang}
                chapters={chapters}
                onStart={() => goTo(chapters[0].id)}
                onOpenChapter={goTo}
              />
            )}

            {/* Prev / Next */}
            <nav
              className={`mt-8 flex items-stretch justify-between gap-4 border-t border-slate-200 pt-6 ${
                activeId === LAST_FINAL ? "print-hide" : ""
              }`}
            >
              <NavButton
                onClick={prev}
                disabled={activeId === 0}
                label={t.prev}
                align="left"
                icon={<ChevronLeft className="h-4 w-4" />}
              />
              <NavButton
                onClick={next}
                disabled={activeId === LAST_FINAL}
                label={t.next}
                align="right"
                icon={<ChevronRight className="h-4 w-4" />}
              />
            </nav>
          </main>
        </div>
      </div>

      <Footer t={t} />
    </div>
  );
}

function NavButton({
  onClick,
  disabled,
  label,
  align,
  icon,
}: {
  onClick: () => void;
  disabled?: boolean;
  label: string;
  align: "left" | "right";
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 ${
        align === "right" ? "ml-auto flex-row-reverse" : ""
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
