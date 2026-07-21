import { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Junior AI Engineer",
    company: "724SOFTWARE · Contract · Remote",
    logo: "/images/724software.png",
    period: "Mar 2026 — Jun 2026",
    bullets: [
      "Engineered core components of an education-focused agentic RAG system using LangGraph, with dynamic routing across learning materials and structured databases; used Langfuse traces to diagnose retrieval, latency, and failure patterns.",
      "Developed OCR and layout-understanding pipelines for 70,000+ educational document images, spanning VLM fine-tuning, layout preprocessing, and vLLM inference serving.",
      "Designed a weighted, polygon-aware fusion algorithm for multi-model text detection, improving bounding-box F1 by 5-10% on complex document layouts.",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "CoverGo · Internship · On-site",
    logo: "/images/CoverGo.jpeg",
    period: "Sep 2025 — Feb 2026",
    bullets: [
      "Improved internal RAG reliability by redesigning structured prompts and integrating citation-grounded Gemini workflows, reducing unsupported and hallucinated responses.",
      "Built a DSPy-based prompt optimization pipeline evaluated on 1,000 synthetic product-data cases, reducing manual tuning for the engineering team.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "University of Information Technology · On-site",
    logo: "/images/UIT.png",
    period: "Sep 2024 — Feb 2025",
    bullets: [
      "Evaluated LoRA and QLoRA across downstream NLP tasks, identifying trade-offs in convergence stability, GPU memory usage, and domain-adaptation performance.",
      "Built reproducible fine-tuning pipelines with controlled hyperparameter experiments, enabling systematic selection of PEFT configurations for resource-constrained model adaptation.",
    ],
  },
];
