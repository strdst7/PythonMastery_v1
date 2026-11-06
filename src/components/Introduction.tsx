import type { Translation, Lang } from "../i18n/translations";
import { introContent, type Chapter } from "../data";

interface IntroductionProps {
  t: Translation;
  lang: Lang;
  chapters: Chapter[];
  onStart: () => void;
  onOpenChapter: (id: number) => void;
}

export default function Introduction({
  t,
  lang,
  chapters,
  onStart,
  onOpenChapter,
}: IntroductionProps) {
  const L = (obj: { en: string; bm: string }) => obj[lang];

  // group chapters by category
  const categories = Array.from(
    new Map(chapters.map((c) => [c.category, c.category])).keys()
  );

  return (
    <article className="py-10">
      <header className="mb-8 border-b border-slate-200 pb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-xs font-medium text-white">
          🚀 {t.interactiveNote}
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {L(introContent.title)}
        </h1>
      </header>

      <div className="space-y-6">
        {introContent.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-slate-700">
            {L(p)}
          </p>
        ))}
      </div>

      <div id="intro-cards" className="mt-10 grid gap-5 md:grid-cols-3 print-hide">
        {introContent.cards.map((card, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 text-3xl">{card.icon}</div>
            <h3 className="mb-2 font-bold text-slate-900">{L(card.title)}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{L(card.text)}</p>
          </div>
        ))}
      </div>

      {/* Book outline */}
      <section className="mt-12 print-hide">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">
          📚 {lang === "bm" ? "Gambaran Keseluruhan Kandungan" : "Content Overview"}
        </h2>
        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
                {cat}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {chapters
                  .filter((c) => c.category === cat)
                  .map((c) => (
                    <button
                      key={c.id}
                      onClick={() => onOpenChapter(c.id)}
                      className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-indigo-300 hover:shadow-md"
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-xl text-white shadow`}
                      >
                        {c.icon}
                      </span>
                      <span>
                        <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          {t.chapterLabel} {c.id}
                        </span>
                        <span className="block text-sm font-semibold leading-snug text-slate-800 group-hover:text-indigo-700">
                          {L(c.title)}
                        </span>
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3 print-hide">
        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
        >
          🚀 {t.heroCta}
        </button>
      </div>
    </article>
  );
}
