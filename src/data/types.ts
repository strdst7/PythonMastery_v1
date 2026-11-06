export interface Localized {
  en: string;
  bm: string;
}

export interface CodeExample {
  title: Localized;
  description: Localized;
  code: string;
  output?: string;
}

export interface Exercise {
  question: string;
  hint?: string;
  solutionCode?: string;
  solutionOutput?: string;
  solutionExplanation?: string;
}

export interface TipBlock {
  icon?: string;
  text: string;
}

export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "code" | "tip" | "warning" | "table" | "image";
  text?: string;
  items?: string[];
  code?: CodeExample;
  tipText?: string;
  warningText?: string;
  heading?: Localized;
  bulletIcon?: string;
  image?: {
    src: string;
    alt: { en: string; bm: string };
    caption?: { en: string; bm: string };
  };
}

export interface Chapter {
  id: number;
  title: Localized;
  subtitle: Localized;
  icon: string;
  color: string;
  category: string;
  learningGoals: [string, string][]; // [en, bm] pairs
  keyConcepts: [string, string][];
  blocks: ContentBlock[];
  exercises: Exercise[];
  pages: number;
}
