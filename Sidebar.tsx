import { BookMarked, X } from "lucide-react";
import type { Chapter } from "../data/types";
import type { Translation, Lang } from "../i18n/translations";

interface SidebarProps {
  chapters: Chapter[];
  activeId: number;
  onSelect: (id: number) => void;
  t: Translation;
  lang: Lang;
  open: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearch: (q: string) => void;
  visibleIds: Set<number>;
}

export default function Sidebar({
  chapters,
  activeId,
  onSelect,
  t,
  lang,
  open,
  onClose,
  searchQuery,
  onSearch,
  visibleIds,
}: SidebarProps) {
  const L = (obj: { en: string; bm: string }) => obj[lang];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-80 flex-col border-r border-slate-200 bg-white transition-transform lg:sticky lg:top-16 lg:z-0 lg:h-[calc(100vh-4rem)] lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-600">
            <BookMarked className="h-4 w-4 text-indigo-500" />
            {t.tableOfContents}
          </h2>
          <button onClick={onClose} className="rounded p-1 text-slate-400 hover:bg-slate-100 lg:hidden">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="border-b border-slate-200 p-3">
          <input
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          {searchQuery.trim() !== "" && visibleIds.size === 0 && (
            <div className="px-3 py-6 text-center text-sm text-slate-400">
              🔍 {t.searchEmpty}
            </div>
          )}
          <button
            onClick={() => onSelect(0)}
            className={`mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
              activeId === 0
                ? "bg-indigo-600 text-white"
                : "text-slate-700 hover:bg-indigo-50"
            }`}
          >
            <span className="text-base">📖</span> {t.introduction}
          </button>

          {chapters.map((c) => {
            const visible = visibleIds.size === 0 || visibleIds.has(c.id);
            const active = activeId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelect(c.id)}
                className={`mb-1 flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left transition ${
                  active ? "bg-indigo-600 text-white" : "text-slate-700 hover:bg-indigo-50"
                } ${visible ? "" : "opacity-40"}`}
              >
                <span className="mt-0.5 text-base leading-none">{c.icon}</span>
                <span className="flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wide opacity-70">
                    {t.chapterLabel} {c.id}
                  </span>
                  <span className="block text-[13px] leading-snug">
                    {L(c.title)}
                  </span>
                </span>
              </button>
            );
          })}

          <button
            onClick={() => onSelect(-1)}
            className={`mb-1 mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
              activeId === -1
                ? "bg-indigo-600 text-white"
                : "text-slate-700 hover:bg-indigo-50"
            }`}
          >
            <span className="text-base">🎓</span> {t.finalWords}
          </button>
        </nav>

        <div className="border-t border-slate-200 p-4 text-center">
          <p className="text-xs font-medium text-slate-500">{t.totalChapters}</p>
        </div>
      </aside>
    </>
  );
}
