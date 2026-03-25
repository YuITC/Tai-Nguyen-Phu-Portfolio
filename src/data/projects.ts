export const PINNED_REPOS = [
  "Metacognitive-RAG-System",
  "Novel-Verse-AI",
  "Vietnamese-Legal-Doc-Retrieval",
  "Dense-Passage-Retrieval",
];

export const CATEGORIES = [
  "All",
  "NLP",
  "LLM",
  "RAG",
  "Agentic AI",
  "Computer Vision",
  "Machine Learning",
  "Generative AI",
  "Deep Learning",
  "Research",
] as const;

export type CategoryName = (typeof CATEGORIES)[number];

export const CATEGORY_MAP: Record<string, CategoryName[]> = {
  "Metacognitive-RAG-System": ["RAG", "LLM", "NLP", "Research"],
  "Novel-Verse-AI": ["LLM", "Agentic AI", "NLP", "Generative AI"],
  "Vietnamese-Legal-Doc-Retrieval": ["NLP", "RAG", "Research"],
  "Dense-Passage-Retrieval": ["RAG", "NLP", "Deep Learning", "Research"],
  "Scene-Text-Recognition": ["Computer Vision", "Deep Learning"],
  "2024-DataScience-Salaries-Analysis": [
    "Machine Learning",
    "LLM",
    "Generative AI",
  ],
  "Image-Inpainting-using-Partial-Convolutions": [
    "Computer Vision",
    "Deep Learning",
    "Generative AI",
  ],
  "Realtime-Style-Transfer": [
    "Computer Vision",
    "Deep Learning",
    "Generative AI",
  ],
  "Real-time-Face-Recognition": ["Computer Vision", "Deep Learning"],
  "AI-Job-Finding-TelegramBot": ["Agentic AI", "LLM"],
};

export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
  Rust: "#dea584",
  Go: "#00ADD8",
};
