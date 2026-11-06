import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ code, showLineNumbers = false }: CodeBlockProps) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-slate-800 shadow-sm">
      <SyntaxHighlighter
        language="python"
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1rem 1.25rem",
          fontSize: "0.8rem",
          lineHeight: 1.6,
          background: "#0f172a",
        }}
        showLineNumbers={showLineNumbers}
        lineNumberStyle={{
          minWidth: "2.5em",
          paddingRight: "1em",
          color: "#475569",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
