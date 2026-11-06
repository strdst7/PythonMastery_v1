import type { Translation, Lang } from "../i18n/translations";

interface FinalWordsProps {
  t: Translation;
  lang: Lang;
  onRestart: () => void;
}

export default function FinalWords({ t, lang, onRestart }: FinalWordsProps) {
  const L = (obj: { en: string; bm: string }) => obj[lang];

  const content = {
    title: {
      en: "Final Words: Your Journey Forward",
      bm: "Kata Penutup: Perjalanan Anda ke Hadapan",
    },
    p1: {
      en: "Congratulations — you have reached the end of Python Mastery! You have travelled from writing your first print statement to building object-oriented programs, processing data with Pandas, scraping the web, handling concurrency, and exposing your own APIs. That is no small achievement.",
      bm: "Tahniah — anda telah sampai ke penghujung Penguasaan Python! Anda telah bergerak daripada menulis pernyataan print pertama kepada membina program berorientasikan objek, memproses data dengan Pandas, menyelongkar web, mengendalikan konkurensi, dan mendedahkan API anda sendiri. Itu bukan pencapaian yang kecil.",
    },
    p2: {
      en: "Remember that programming is learned by doing. Re-type every example, break things on purpose to see the errors, and build small projects that interest you. When you get stuck, read the traceback, search the official docs, and ask the community.",
      bm: "Ingat bahawa pengaturcaraan dipelajari dengan melakukannya. Taip semula setiap contoh, pecahkan benda dengan sengaja untuk melihat ralat, dan bina projek kecil yang menarik minat anda. Apabila anda tersekat, baca traceback, cari dokumen rasmi, dan tanya komuniti.",
    },
    checklist: {
      en: "Recommended next steps:",
      bm: "Langkah seterusnya yang disyorkan:",
    },
    steps: [
      {
        en: "Build one small end-to-end project every week and commit it to Git.",
        bm: "Bina satu projek hujung-ke-hujung kecil setiap minggu dan serahkannya ke Git.",
      },
      {
        en: "Solve challenges on platforms like LeetCode, HackerRank, or Codewars.",
        bm: "Selesaikan cabaran di platform seperti LeetCode, HackerRank, atau Codewars.",
      },
      {
        en: "Learn about Python-specific web frameworks (Flask, FastAPI, Django).",
        bm: "Belajar tentang rangka kerja web khusus Python (Flask, FastAPI, Django).",
      },
      {
        en: "Explore machine learning with scikit-learn and PyTorch when ready.",
        bm: "Terokai pembelajaran mesin dengan scikit-learn dan PyTorch apabila bersedia.",
      },
      {
        en: "Teach someone what you have learned — the best way to solidify knowledge.",
        bm: "Ajar seseorang apa yang anda pelajari — cara terbaik untuk memantapkan pengetahuan.",
      },
    ],
  };

  return (
    <article className="py-10">
      <header className="mb-8 border-b border-slate-200 pb-8 text-center">
        <div className="mb-4 text-5xl">🎓</div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {L(content.title)}
        </h1>
      </header>

      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-[15px] leading-relaxed text-slate-700">{L(content.p1)}</p>
        <p className="text-[15px] leading-relaxed text-slate-700">{L(content.p2)}</p>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6">
          <h2 className="mb-4 flex items-center gap-2 font-bold text-indigo-800">
            🛣️ {L(content.checklist)}
          </h2>
          <ul className="space-y-2">
            {content.steps.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 text-emerald-500">✓</span>
                <span>{L(s)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <p className="text-sm text-slate-700">
            {lang === "bm"
              ? "Akhir sekali, ingat bahawa setiap pakar pernah menjadi pemula. Teruskan menulis kod. 🐍✨"
              : "Above all, remember that every expert was once a beginner. Keep coding. 🐍✨"}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 pt-4">
          <button
            onClick={onRestart}
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            🔄 {lang === "bm" ? "Mula Semula Buku" : "Restart the Book"}
          </button>
          <p className="text-xs text-slate-400">{t.copyright}</p>
        </div>
      </div>
    </article>
  );
}
