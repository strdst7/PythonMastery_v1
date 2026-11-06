import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Eraser, Loader2 } from "lucide-react";
import type { Lang } from "../i18n/translations";

declare global {
  interface Window {
    loadPyodide: (opts: { indexURL: string }) => Promise<PyodideApi>;
  }
}

interface PyodideApi {
  runPythonAsync: (code: string) => Promise<unknown>;
  runPython: (code: string) => unknown;
  setStdout: (opts: { batched?: (s: string) => void; raw?: (c: number) => void }) => void;
  setStderr: (opts: { batched?: (s: string) => void; raw?: (c: number) => void }) => void;
  loadPackage: (pkg: string | string[]) => Promise<void>;
}

const PYODIDE_VERSION = "v0.26.4";
const INDEX_URL = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/`;

interface CodeRunnerProps {
  code: string;
  lang: Lang;
  runButton?: string;
  resetButton?: string;
  outputLabel?: string;
  runNote?: string;
}

export default function CodeRunner({
  code,
  lang,
  runButton,
  resetButton,
  outputLabel,
  runNote,
}: CodeRunnerProps) {
  const [userCode, setUserCode] = useState(code);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "running" | "ready" | "error">("idle");
  const [msg, setMsg] = useState("");
  const pyodideRef = useRef<PyodideApi | null>(null);
  const storeRef = useRef<{ buf: string[] }>({ buf: [] });
  const runToken = useRef(0);

  useEffect(() => {
    setUserCode(code);
  }, [code]);

  const ensurePyodide = useCallback(async () => {
    if (pyodideRef.current) {
      return pyodideRef.current;
    }
    setStatus("loading");
    setMsg(
      lang === "bm"
        ? "Memuatkan penginterpretasi Python (sekali sahaja)…"
        : "Loading the Python interpreter (one time only)…"
    );
    try {
      if (!window.loadPyodide) {
        await new Promise<void>((res, rej) => {
          const s = document.createElement("script");
          s.src = `${INDEX_URL}/pyodide.js`;
          s.onload = () => res();
          s.onerror = () => rej(new Error("Failed to load pyodide.js"));
          document.head.appendChild(s);
        });
      }
      const py = await window.loadPyodide({ indexURL: INDEX_URL });
      pyodideRef.current = py;
      setStatus("ready");
      setMsg("");
      return py;
    } catch (e) {
      setStatus("error");
      setMsg(
        lang === "bm"
          ? `Gagal memuat Python: ${String(e)}`
          : `Failed to load Python: ${String(e)}`
      );
      return null;
    }
  }, [lang]);

  const run = useCallback(async () => {
    const token = runToken.current;
    const computed = token;
    // reset buffer
    storeRef.current.buf = [];

    const py = await ensurePyodide();
    if (!py) return;

    setStatus("running");
    setMsg(lang === "bm" ? "Menjalankan kod…" : "Running code...");
    // attach stdout/stderr collectors
    py.setStdout({ batched: (s) => storeRef.current.buf.push(s) });
    py.setStderr({ batched: (s) => storeRef.current.buf.push(s) });

    try {
      await py.runPythonAsync(userCode);
      // flush buffer
      await new Promise((r) => setTimeout(r, 50));
      const text = storeRef.current.buf.join("").replace(/\n$/, "");
      if (computed === runToken.current) {
        setOutput(text || "✓");
        setStatus("ready");
        setMsg("");
      }
    } catch (e) {
      if (computed === runToken.current) {
        setOutput(`Error:\n${String(e)}`);
        setStatus("error");
      }
    } finally {
      if (computed === runToken.current) setMsg("");
    }
  }, [ensurePyodide, lang, userCode]);

  const reset = useCallback(() => {
    runToken.current += 1;
    setUserCode(code);
    setOutput("");
    setStatus("idle");
    setMsg("");
  }, [code]);

  const busy = status === "loading" || status === "running";

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={run}
            disabled={busy}
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
          >
            {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
            {runButton ?? "Run"}
          </button>
          <button
            onClick={reset}
            disabled={busy}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-300 disabled:opacity-50"
          >
            <Eraser className="h-3.5 w-3.5" />
            {resetButton ?? "Reset"}
          </button>
        </div>
      </div>

      <textarea
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        spellCheck={false}
        wrap="off"
        className="block w-full resize-y bg-slate-900 p-4 font-mono text-sm leading-relaxed text-emerald-100 outline-none placeholder:text-slate-600"
        placeholder="# Python"
      />

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            {outputLabel ?? "Console Output"}
          </span>
          {msg && (
            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
              {busy && <Loader2 className="h-3 w-3 animate-spin" />}
              {msg}
            </span>
          )}
        </div>
        <pre className="max-h-64 min-h-[3rem] overflow-auto whitespace-pre-wrap rounded-lg bg-slate-900 p-3 font-mono text-xs text-slate-100">
          {output ||
            (idleStatus(status) ? runNote ?? "" : "\u00a0")}
        </pre>
      </div>
    </div>
  );
}

function idleStatus(s: string) {
  return s === "idle";
}
