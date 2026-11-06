import { useState } from "react";
import { ChevronDown, Eye, EyeOff, BookOpen } from "lucide-react";
import type { Chapter as ChapterType } from "../data/types";
import type { Translation, Lang } from "../i18n/translations";
import CodeBlock from "./CodeBlock";
import CodeRunner from "./CodeRunner";

interface ChapterProps {
  chapter: ChapterType;
  t: Translation;
  lang: Lang;
}

export default function Chapter({ chapter, t, lang }: ChapterProps) {
  const [openSolutions, setOpenSolutions] = useState<Set<number>>(new Set());

  const toggleSolution = (idx: number) => {
    setOpenSolutions((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const L = (obj: { en: string; bm: string }) => obj[lang];

  return (
    <article className="py-10">
      {/* Chapter header */}
      <header className="mb-8 border-b border-slate-200 pb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          <BookOpen className="h-3.5 w-3.5" />
          {t.chapterLabel} {chapter.id} · {chapter.category}
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          <span className="mr-2">{chapter.icon}</span>
          {L(chapter.title)}
        </h1>
        <p className="mt-3 text-lg text-slate-500">{L(chapter.subtitle)}</p>
      </header>

      {/* Goals */}
      <section className="mb-8 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
        <h2 className="mb-3 flex items-center gap-2 font-bold text-indigo-800">
          🎯 {t.chapterOverview}
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {chapter.learningGoals.map(([en, bm]) => (
            <li key={en} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 text-indigo-400">▸</span>
              <span>{lang === "en" ? en : bm}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Content blocks */}
      <div className="space-y-6">
        {chapter.blocks.map((block, i) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={i} className="text-[15px] leading-relaxed text-slate-700">
                  {block.text}
                </p>
              );
            case "heading":
              return (
                <h2
                  key={i}
                  className="pt-4 text-2xl font-bold tracking-tight text-slate-900"
                >
                  {block.heading ? L(block.heading) : ""}
                </h2>
              );
            case "list":
              return (
                <ul key={i} className="space-y-2 text-[15px] leading-relaxed text-slate-700">
                  {block.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 text-emerald-500">{block.bulletIcon ?? "✓"}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            case "table":
              return (
                <div key={i} className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-left text-sm text-slate-700">
                    <tbody>
                      {block.items?.map((row, j) => {
                        const cells = row.split("|").map((c) => c.trim());
                        return (
                          <tr
                            key={j}
                            className={j === 0 ? "bg-slate-800 text-white" : "border-t border-slate-100"}
                          >
                            {cells.map((cell, k) => (
                              <td
                                key={k}
                                className={`px-3 py-2 ${k > 0 ? "font-mono text-[13px]" : ""} ${
                                  j !== 0 ? "text-slate-700" : "text-white"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            case "code": {
              const ex = block.code!;
              return (
                <div key={i} className="group">
                  <p className="mb-2 text-sm font-semibold text-slate-800">
                    {ex.title ? L(ex.title) : ""}
                  </p>
                  <p className="mb-3 text-sm text-slate-500">
                    {ex.description ? L(ex.description) : ""}
                  </p>
                  <CodeRunner
                    code={ex.code}
                    lang={lang}
                    runButton={t.runButton}
                    resetButton={t.resetButton}
                    outputLabel={t.outputLabel}
                    runNote={t.interactiveNote}
                  />
                </div>
              );
            }
            case "image":
              return block.image ? (
                <figure
                  key={i}
                  className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <img
                    src={block.image.src}
                    alt={L(block.image.alt)}
                    className="w-full object-cover"
                  />
                  {block.image.caption && (
                    <figcaption className="border-t border-slate-100 px-4 py-3 text-center text-sm text-slate-500">
                      {L(block.image.caption)}
                    </figcaption>
                  )}
                </figure>
              ) : null;
            case "tip":
              return (
                <div
                  key={i}
                  className="rounded-xl border-l-4 border-teal-400 bg-teal-50 p-4"
                >
                  <p className="font-semibold text-teal-800">{t.tipTitle}</p>
                  <p className="mt-1 text-sm leading-relaxed text-teal-900/80">
                    {block.tipText}
                  </p>
                </div>
              );
            case "warning":
              return (
                <div
                  key={i}
                  className="rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4"
                >
                  <p className="font-semibold text-amber-800">{t.warningTitle}</p>
                  <p className="mt-1 text-sm leading-relaxed text-amber-900/80">
                    {block.warningText}
                  </p>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Exercises */}
      <section className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-emerald-800">
          ✏️ {t.exerciseTitle}
        </h2>
        <div className="space-y-4">
          {chapter.exercises.map((ex, idx) => (
            <div key={idx} className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-medium text-slate-800">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                  {idx + 1}
                </span>
                {ex.question}
              </p>
              {ex.hint && (
                <p className="mt-2 text-sm text-slate-500">
                  {lang === "bm" ? "Petunjuk:" : "Hint:"} {ex.hint}
                </p>
              )}
              <button
                onClick={() => toggleSolution(idx)}
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                {openSolutions.has(idx) ? (
                  <>
                    <EyeOff className="h-3.5 w-3.5" /> {t.hideSolution}
                  </>
                ) : (
                  <>
                    <Eye className="h-3.5 w-3.5" /> {t.showSolution}
                  </>
                )}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${openSolutions.has(idx) ? "rotate-180" : ""}`}
                />
              </button>
              {openSolutions.has(idx) && (
                <div className="mt-3 space-y-2">
                  {ex.solutionCode && (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {t.solution}
                      </p>
                      <CodeBlock code={ex.solutionCode} />
                    </>
                  )}
                  {ex.solutionOutput && (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {t.expectedOutput}
                      </p>
                      <pre className="whitespace-pre-wrap font-mono text-xs text-slate-700">
                        {ex.solutionOutput}
                      </pre>
                    </div>
                  )}
                  {ex.solutionExplanation && (
                    <p className="text-sm leading-relaxed text-slate-600">
                      💬 <span className="font-semibold">{lang === "bm" ? "Penjelasan:" : "Explanation:"}</span>{" "}
                      {ex.solutionExplanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
