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

export interface ProjectDefinition {
  repoName: string;
  displayName: string;
  period: string;
  htmlUrl: string;
  description: string;
  fallbackLanguage: string;
  techStack: string[];
  highlights: string[];
  categories: Exclude<CategoryName, "All">[];
  isPinned: boolean;
}

export const PROJECT_DEFINITIONS: ProjectDefinition[] = [
  {
    repoName: "manga-scanlation-workspace",
    displayName: "Manga Scanlation Workspace",
    period: "May 2026 - Jul 2026",
    htmlUrl: "https://github.com/taingph2502/manga-scanlation-workspace",
    description:
      "A local-first production workspace for translating Japanese manga into Vietnamese or English while keeping every AI-generated artifact editable, reviewable, and traceable.",
    fallbackLanguage: "TypeScript",
    techStack: [
      "FastAPI",
      "PyTorch",
      "Transformers",
      "PaddleOCR-VL",
      "SFT",
      "ONNX Runtime",
      "Ollama",
      "SQLite",
    ],
    highlights: [
      "Architected a local-first, human-in-the-loop AI platform that unifies region detection, OCR, contextual LLM translation, inpainting, typesetting, review, and export in one revisioned workflow.",
      "Fine-tuned PaddleOCR-VL on 21,000 Manga109 images via SFT, raising Japanese Exact Match from 9.2% to 65.9% and lowering Character Error Rate from 55.4% to 9.1%.",
      "Built context-aware LLM translation with speaker relationships, glossaries, and translation memory, preserving cross-panel narrative consistency.",
    ],
    categories: ["Computer Vision", "LLM", "Generative AI"],
    isPinned: true,
  },
  {
    repoName: "meta-agentic-rag",
    displayName: "Meta-Agentic RAG | Adaptive Multi-Hop QA Research System",
    period: "Mar 2026 - Jul 2026",
    htmlUrl: "https://github.com/taingph2502/meta-agentic-rag",
    description:
      "A research-oriented multi-hop QA system that lets a RAG agent diagnose weak answers and selectively retrieve or rewrite before returning a final response.",
    fallbackLanguage: "Python",
    techStack: [
      "LangGraph",
      "Qdrant",
      "Elasticsearch",
      "PostgreSQL",
      "DeepSeek",
      "Docker",
      "FastAPI",
    ],
    highlights: [
      "Built a self-correcting agentic RAG pipeline in LangGraph, improving multi-hop QA F1 on 2WikiMultiHopQA from 25.2% to 70.3% via automated failure diagnosis and re-retrieval.",
      "Designed a hybrid sparse-dense retrieval pipeline (Qdrant + Elasticsearch) with cross-encoder reranking and citation grounding to reduce unsupported answers.",
      "Implemented cost-aware LLM routing to flag low-quality generations and trigger targeted remediation, balancing accuracy against latency and API cost.",
    ],
    categories: ["RAG", "LLM", "Agentic AI", "Research"],
    isPinned: true,
  },
  {
    repoName: "MangaTrans-CLI",
    displayName: "MangaTrans-CLI",
    period: "Apr 2026 - May 2026",
    htmlUrl: "https://github.com/taingph2502/MangaTrans-CLI",
    description:
      "A command-line manga translation pipeline designed for automated batch processing on consumer GPUs, from raw pages to cleaned and typeset output.",
    fallbackLanguage: "Python",
    techStack: [
      "PyTorch",
      "OpenCV",
      "YOLO",
      "Ollama",
      "Qwen",
      "PaddleOCR-VL",
      "SFT",
    ],
    highlights: [
      "Developed an asynchronous end-to-end manga translation pipeline covering text detection, OCR, image inpainting, translation, and text rendering with GPU-accelerated processing.",
      "Fine-tuned PaddleOCR-VL on 21,000 Manga109 images via SFT, raising Japanese Exact Match from 9.2% to 65.9% and lowering Character Error Rate from 55.4% to 9.1%.",
      "Built a VRAM-aware runtime manager and local LLM translation workflow with Ollama and Qwen 3.5, dynamically scaling image resolution and preserving cross-panel narrative consistency.",
    ],
    categories: ["Computer Vision", "LLM", "Generative AI"],
    isPinned: true,
  },
  {
    repoName: "Vietnamese-Legal-RAG-System",
    displayName: "Vietnamese Legal RAG System",
    period: "Apr 2025 - Apr 2025",
    htmlUrl: "https://github.com/taingph2502/Vietnamese-Legal-RAG-System",
    description:
      "An end-to-end experimental RAG system for answering Vietnamese legal questions with domain-adapted retrieval, evidence reranking, grounded generation, and citation-focused evaluation.",
    fallbackLanguage: "Jupyter Notebook",
    techStack: [
      "PyTorch",
      "Transformers",
      "Sentence Transformers",
      "FAISS",
      "BM25",
      "RRF",
      "Unsloth",
      "TRL",
    ],
    highlights: [
      "Built a domain-specific RAG experimentation pipeline over 230,000 cleaned Vietnamese legal passages, spanning preprocessing, retrieval, generator fine-tuning, and multi-layer evaluation.",
      "Fine-tuned a Vietnamese bi-encoder and BGE cross-encoder reranker, combining dense retrieval with BM25 through RRF to raise recall@10 from 61.5% to 87.5%.",
      "Designed a citation-oriented Gemma 4 LoRA pipeline and evaluation suite covering BERTScore, citation precision and recall, and RAGAS faithfulness and relevance metrics.",
    ],
    categories: ["RAG", "NLP", "LLM", "Research"],
    isPinned: true,
  },
  {
    repoName: "Novel-Verse-AI",
    displayName: "NovelVerse AI",
    period: "Feb 2026 - Mar 2026",
    htmlUrl: "https://github.com/taingph2502/Novel-Verse-AI",
    description:
      "A self-hosted reading companion that turns Chinese web novels into a searchable Vietnamese library enriched with structured story knowledge and character-aware AI experiences.",
    fallbackLanguage: "TypeScript",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "DeepSeek",
      "Gemini",
    ],
    highlights: [
      "Built a self-hosted Chinese-to-Vietnamese novel reading platform that crawls source sites, translates chapters, manages a personal library, synthesizes audio, and exports EPUB3.",
      "Engineered resumable crawl and translation jobs with layered anti-bot fallbacks, SSE progress streaming, pause, resume, cancel, and retry controls, and pre-run cost estimation.",
      "Extracted timelines, characters, and terminology into structured knowledge, then used pgvector-backed retrieval for semantic lore search, adaptive story Q&A, and grounded character chat.",
    ],
    categories: ["LLM", "RAG", "NLP", "Generative AI"],
    isPinned: false,
  },
  {
    repoName: "2024-DataScience-Salaries-Analysis",
    displayName: "2024 Data Science Salaries Analysis",
    period: "Feb 2025 - May 2025",
    htmlUrl:
      "https://github.com/taingph2502/2024-DataScience-Salaries-Analysis",
    description:
      "A comparative salary-prediction study that evaluates traditional tabular models and LLM-based regression on real-world 2024 data science job listings.",
    fallbackLanguage: "Jupyter Notebook",
    techStack: [
      "Python",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "Optuna",
      "PyTorch",
      "Transformers",
      "QLoRA",
      "Streamlit",
    ],
    highlights: [
      "Built an end-to-end salary prediction study from 2024 Glassdoor job data, covering Selenium-based collection, preprocessing, exploratory analysis, feature engineering, modeling, and deployment.",
      "Tuned XGBoost with Optuna to reach R² = 0.82, outperforming a Linear Regression baseline at R² = 0.71.",
      "Benchmarked tabular machine learning against few-shot LLM regression and a QLoRA-fine-tuned Llama 3.1 model, then exposed all three approaches through an interactive Streamlit application.",
    ],
    categories: ["Machine Learning", "LLM", "Research"],
    isPinned: false,
  },
  {
    repoName: "Real-time-Face-Recognition",
    displayName: "Real-time Face Recognition",
    period: "Apr 2025 - May 2025",
    htmlUrl: "https://github.com/taingph2502/Real-time-Face-Recognition",
    description:
      "A lightweight webcam application for enrolling, indexing, and recognizing known identities in real time using learned face embeddings.",
    fallbackLanguage: "Python",
    techStack: ["PyTorch", "timm", "MTCNN", "FAISS", "OpenCV"],
    highlights: [
      "Implemented a command-line workflow for webcam face enrollment, detection, gallery management, and real-time recognition.",
      "Designed a 128-dimensional, L2-normalized embedding model with a ResNet50d backbone and indexed gallery vectors in FAISS for cosine-similarity search.",
      "Reduced frame-level prediction flicker with a configurable similarity threshold and sliding 5-of-7-frame voting, while supporting identity addition, removal, and index rebuilding.",
    ],
    categories: ["Computer Vision", "Deep Learning"],
    isPinned: false,
  },
  {
    repoName: "Dense-Passage-Retrieval",
    displayName: "Dense Passage Retrieval",
    period: "Jan 2025 - Mar 2025",
    htmlUrl: "https://github.com/taingph2502/Dense-Passage-Retrieval",
    description:
      "A compact, reproducible PyTorch implementation of Dense Passage Retrieval for learning and benchmarking open-domain document retrieval on Natural Questions.",
    fallbackLanguage: "Python",
    techStack: [
      "PyTorch",
      "Transformers",
      "FAISS",
      "Natural Questions",
      "Wikipedia",
    ],
    highlights: [
      "Reimplemented a streamlined DPR dual-encoder retrieval pipeline over the Natural Questions dataset and the December 2018 English Wikipedia snapshot.",
      "Achieved 79.1% top-20 and 86.0% top-100 retrieval accuracy in the repository evaluation, compared with 78.4% and 85.4% reported by the original paper.",
      "Packaged pretrained query and document encoders with reproducible embedding and FAISS retrieval entry points; generated embeddings in 15 hours and built and searched the index in 7 minutes 27 seconds on two NVIDIA T4 GPUs.",
    ],
    categories: ["RAG", "NLP", "Deep Learning", "Research"],
    isPinned: false,
  },
  {
    repoName: "Scene-Text-Recognition",
    displayName: "Scene Text Recognition",
    period: "Mar 2025 - Mar 2025",
    htmlUrl: "https://github.com/taingph2502/Scene-Text-Recognition",
    description:
      "A deployable OCR pipeline for detecting and recognizing text in natural-scene images through a modular training, API, and web-interface workflow.",
    fallbackLanguage: "Jupyter Notebook",
    techStack: [
      "PyTorch",
      "YOLOv11",
      "CRNN",
      "CTC",
      "FastAPI",
      "Ray Serve",
      "Streamlit",
    ],
    highlights: [
      "Built a two-stage OCR pipeline that combines YOLOv11m text detection with ResNet34-backed CRNN recognition and CTC sequence decoding.",
      "Trained and fine-tuned the models on ICDAR2003, recording detector precision of 0.881, recall of 0.905, and mAP@0.5 of 0.925 on the reported validation run.",
      "Served modular detection and OCR APIs with FastAPI and Ray Serve, paired with a Streamlit interface for GPU-accelerated inference.",
    ],
    categories: ["Computer Vision", "Deep Learning"],
    isPinned: false,
  },
  {
    repoName: "carotid-artery-atherosclerosis-detection",
    displayName: "Carotid Artery Atherosclerosis Detection",
    period: "May 2026 - Jul 2026",
    htmlUrl:
      "https://github.com/taingph2502/carotid-artery-atherosclerosis-detection",
    description:
      "An explainable multimodal deep learning system that combines carotid ultrasound images and clinical biomarkers for patient-level plaque detection, auxiliary risk modeling, and visual interpretation.",
    fallbackLanguage: "Python",
    techStack: [
      "PyTorch",
      "Torchvision",
      "EfficientNet",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Pillow",
      "Matplotlib",
      "Grad-CAM",
    ],
    highlights: [
      "Architected a PyTorch multimodal pipeline that fused EfficientNet-B0 ultrasound embeddings with an MLP over 8–9 clinical variables using gated fusion across 300 patients and 680 images.",
      "Engineered patient-level mean pooling, focal/masked multi-task losses, and patient-disjoint stratified 5-fold cross-validation, reporting 0.8881 ± 0.1236 mean AUC-ROC for plaque detection.",
      "Built patient-level Grad-CAM explanations that generated per-image heatmap overlays while preserving multi-image context, enabling visual inspection of evidence behind individual predictions.",
    ],
    categories: [
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
      "Research",
    ],
    isPinned: false,
  },
  {
    repoName: "ai-news-aggregator",
    displayName: "AI News Aggregator",
    period: "Jan 2026 - Feb 2026",
    htmlUrl: "https://github.com/taingph2502/ai-news-aggregator",
    description:
      "An automated AI news briefing system that aggregates multi-source updates, generates concise technical summaries, ranks them by reader relevance, and emails a curated digest.",
    fallbackLanguage: "Python",
    techStack: [
      "OpenAI",
      "Pydantic",
      "RSS",
      "Docling",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Engineered an end-to-end Python pipeline that collects OpenAI/Anthropic RSS and YouTube updates, enriches web pages with Docling and video transcripts, and delivers personalized AI briefings via SMTP.",
      "Developed structured LLM workflows with the OpenAI Responses API and Pydantic schemas to generate source-constrained technical summaries, rank relevance against configurable reader profiles, and produce tailored email introductions.",
      "Designed replaceable source, storage, AI, and delivery layers with PostgreSQL idempotency, duplicate model-call prevention, retryable page enrichment, and stage-level JSON reports for repeatable batch execution.",
    ],
    categories: ["NLP", "LLM", "Generative AI"],
    isPinned: false,
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
  Rust: "#dea584",
  Go: "#00ADD8",
};
