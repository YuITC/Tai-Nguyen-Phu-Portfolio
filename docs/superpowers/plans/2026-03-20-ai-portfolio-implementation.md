# AI Engineer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform a cloned vanilla HTML portfolio into a modern Next.js 16 AI Engineer portfolio with glassmorphism UI, deployed on Vercel.

**Architecture:** Single-page app with tab-based navigation using Next.js 16 App Router. Server Component fetches GitHub repos at build time with ISR. Client components handle tab switching, modals, animations (Framer Motion), and contact form (EmailJS). Tailwind CSS v4 with CSS-first `@theme` configuration for glassmorphism design tokens.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion (motion/react), Lucide React, EmailJS

**Spec:** `docs/superpowers/specs/2026-03-20-ai-portfolio-design.md`

---

## File Structure

```
src/
  app/
    layout.tsx              — Root layout: fonts (Sora, DM Sans, JetBrains Mono), metadata, mesh bg
    page.tsx                — Server Component: fetches GitHub repos, renders PortfolioApp
    globals.css             — Tailwind v4 @import + @theme tokens + glassmorphism + mesh bg
  components/
    PortfolioApp.tsx        — Client component: tab state, AnimatePresence, orchestrates all sections
    Sidebar.tsx             — Avatar, name, title, expandable contacts, social icons
    Navbar.tsx              — Tab buttons with active indicator
    about/
      AboutSection.tsx      — Bio paragraphs + "What I'm Doing" service cards
    resume/
      ResumeSection.tsx     — Container: education, experience, skills, certs, resume actions
      Education.tsx         — Timeline entries with UIT logo
      Experience.tsx        — Timeline entry with CoverGo logo
      Skills.tsx            — 5 category groups with tag-based UI
      Certifications.tsx    — Cert cards with provider info and links
      ResumeActions.tsx     — Download PDF + View Resume buttons
    projects/
      ProjectsSection.tsx   — Category filter bar + pinned grid + all grid
      ProjectCard.tsx       — Repo card: name, desc, language, stars, tags
      ProjectModal.tsx      — Modal: full details, GitHub link, highlights
    blog/
      BlogSection.tsx       — "Coming Soon" placeholder
    contact/
      ContactSection.tsx    — Social links grid + EmailJS contact form
    ui/
      GlassCard.tsx         — Reusable glass container component
      Tag.tsx               — Skill/tech tag pill
      Modal.tsx             — Reusable modal with backdrop + Framer Motion
      SectionTitle.tsx      — Section header with icon
      HuggingFaceIcon.tsx   — Custom SVG icon component
  lib/
    github.ts               — fetchGitHubRepos(): fetch + merge with category mappings
    emailjs.ts              — sendContactEmail(): EmailJS wrapper with validation
  data/
    personal.ts             — Name, DOB, location, summary, contacts, social links
    skills.ts               — 5 categorized skill arrays
    education.ts            — Education timeline entries
    experience.ts           — Experience timeline entries
    certifications.ts       — Certification entries with links
    projects.ts             — PINNED_REPOS, CATEGORY_MAP, CATEGORIES constants
  types/
    index.ts                — GitHubRepo, Project, Certification, Education, Experience, etc.
public/
  images/                   — me.png, UIT.png, CoverGo.jpeg (migrated from assets/)
  resumes/                  — 2026-03-19.pdf (migrated from assets/)
```

---

## Task 1: Initialize Next.js 16 Project + Tailwind v4

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- Migrate: `assets/images/me.png` → `public/images/me.png`, `assets/images/UIT.png` → `public/images/UIT.png`, `assets/images/CoverGo.jpeg` → `public/images/CoverGo.jpeg`, `assets/resumes/2026-03-19.pdf` → `public/resumes/2026-03-19.pdf`

- [ ] **Step 1: Create Next.js 16 project in the current directory**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --use-npm --yes
```

If the directory is not empty, move existing files (`index.html`, `assets/`, `prompt.md`, `docs/`) aside first, run create-next-app in a temp dir, then move the scaffold back. Keep `assets/` and `docs/` intact.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install motion lucide-react @emailjs/browser
```

Note: The `motion` package is the modern Framer Motion package. All imports use `motion/react`.

- [ ] **Step 3: Migrate assets to public/**

```bash
mkdir -p public/images public/resumes
cp assets/images/me.png public/images/me.png
cp assets/images/UIT.png public/images/UIT.png
cp assets/images/CoverGo.jpeg public/images/CoverGo.jpeg
cp assets/resumes/2026-03-19.pdf public/resumes/2026-03-19.pdf
```

- [ ] **Step 4: Configure next.config.ts**

Replace `next.config.ts` with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

- [ ] **Step 5: Configure globals.css with Tailwind v4 @theme tokens**

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-dm-sans);
  --font-heading: var(--font-sora);
  --font-mono: var(--font-jetbrains-mono);

  --color-bg-base: #f1f5f9;
  --color-glass: rgba(255, 255, 255, 0.65);
  --color-glass-border: rgba(255, 255, 255, 0.3);
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-accent: #2563eb;
  --color-accent-glow: rgba(59, 130, 246, 0.2);
  --color-highlight: #f59e0b;
  --color-success: #10b981;
  --color-danger: #ef4444;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  min-height: 100vh;
}

/* Mesh gradient background */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(ellipse at 20% 50%, #dbeafe 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, #e0e7ff 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, #f0f9ff 0%, transparent 50%);
  z-index: -1;
  pointer-events: none;
}

/* Glassmorphism utility */
.glass {
  background: var(--color-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--color-glass-border);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}
```

- [ ] **Step 6: Configure layout.tsx with fonts and metadata**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tai Nguyen Phu — AI Engineer",
  description:
    "Aspiring AI Engineer specializing in LLM-powered systems, RAG, agentic workflows, and model fine-tuning.",
  openGraph: {
    title: "Tai Nguyen Phu — AI Engineer",
    description:
      "Aspiring AI Engineer specializing in LLM-powered systems, RAG, agentic workflows, and model fine-tuning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 7: Create a minimal page.tsx placeholder**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[var(--color-accent)]">
        Tai Nguyen Phu — AI Engineer
      </h1>
    </main>
  );
}
```

- [ ] **Step 8: Add favicon**

Copy the existing `assets/images/logo.ico` to `src/app/favicon.ico` (Next.js App Router auto-detects `favicon.ico` in the `app/` directory):

```bash
cp assets/images/logo.ico src/app/favicon.ico
```

If no suitable favicon exists, create a placeholder or generate one later.

- [ ] **Step 9: Verify the app runs**

Run: `npm run dev`
Expected: App starts on localhost:3000, displays the heading with Sora font and blue accent color on mesh gradient background.

- [ ] **Step 10: Commit**

```bash
git add src/ public/ package.json package-lock.json tsconfig.json next.config.ts .gitignore
git commit -m "feat: initialize Next.js 16 + Tailwind v4 project with design tokens and fonts"
```

---

## Task 2: Types + Data Layer

**Files:**
- Create: `src/types/index.ts`, `src/data/personal.ts`, `src/data/skills.ts`, `src/data/education.ts`, `src/data/experience.ts`, `src/data/certifications.ts`, `src/data/projects.ts`

- [ ] **Step 1: Create TypeScript interfaces**

Create `src/types/index.ts`:

```ts
export interface PersonalInfo {
  name: string;
  title: string;
  dob: string;
  location: string;
  summary: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // lucide icon name or "huggingface" for custom
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  logo: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  logo: string;
  period: string;
  bullets: string[];
}

export interface CertificationEntry {
  name: string;
  provider: string;
  date: string;
  url?: string;
  icon: string; // provider icon identifier
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
}

export interface Project extends GitHubRepo {
  categories: string[];
  isPinned: boolean;
}

export type TabName = "About" | "Resume" | "Projects" | "Blog" | "Contact";
```

- [ ] **Step 2: Create personal data**

Create `src/data/personal.ts`:

```ts
import { PersonalInfo, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Tai Nguyen Phu",
  title: "AI Engineer",
  dob: "February 25, 2004",
  location: "Ho Chi Minh, Vietnam",
  summary:
    "Aspiring AI Engineer specializing in LLM-powered systems, with a focus on Retrieval-Augmented Generation, agentic workflows, and model fine-tuning. Seeking to contribute to AI-driven product teams.",
  email: "tainguyenphu2502@gmail.com",
  phone: "+84 945 409 269",
  avatar: "/images/me.png",
  resumeUrl: "/resumes/2026-03-19.pdf",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/YuITC", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yuitc/",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/taing2502/",
    icon: "facebook",
  },
  {
    name: "HuggingFace",
    url: "https://huggingface.co/YuITC",
    icon: "huggingface",
  },
  {
    name: "Email",
    url: "mailto:tainguyenphu2502@gmail.com",
    icon: "mail",
  },
];

export const aboutText = [
  "I'm an AI Engineer with a strong foundation in machine learning and large language model (LLM) applications, backed by hands-on research and project experience in RAG systems, AI agents, and retrieval optimization. Passionate about building production-ready AI pipelines that are not only accurate but also adaptive and self-correcting.",
  "Have hands-on experience in Software Development, Machine Learning, and Generative AI. Strong English skills (7.0 IELTS), teamwork, presentation, and project management abilities.",
  "Currently searching for a Junior AI Engineer role to apply and grow my expertise in a fast-moving, product-driven environment.",
  "Moreover, I'm also currently pursuing a Master's degree in Computer Science at the University of Information Technology - VNUHCM, Ho Chi Minh City, Vietnam.",
];
```

- [ ] **Step 3: Create skills data**

Create `src/data/skills.ts`:

```ts
import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      "Python",
      "C++",
      "TypeScript",
      "SQL",
      "REST API",
      "FastAPI",
      "OOP",
      "Git",
    ],
  },
  {
    name: "AI/LLM",
    skills: [
      "RAG",
      "LangChain",
      "LangGraph",
      "LoRA",
      "QLoRA",
      "DSPy",
      "Prompt Engineering",
      "AI Agents",
    ],
  },
  {
    name: "ML/Data",
    skills: [
      "Qdrant",
      "FAISS",
      "Transformers",
      "Pandas",
      "NumPy",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
    ],
  },
  {
    name: "MLOps",
    skills: [
      "Docker",
      "AWS",
      "MLflow",
      "Weights & Biases",
      "GitHub Actions",
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      "English (IELTS 7.0)",
      "Research",
      "Presentation",
      "Teamwork",
      "Project Management",
    ],
  },
];
```

- [ ] **Step 4: Create education data**

Create `src/data/education.ts`:

```ts
import { EducationEntry } from "@/types";

export const educationEntries: EducationEntry[] = [
  {
    degree: "Master of Computer Science",
    institution: "University of Information Technology — VNUHCM",
    logo: "/images/UIT.png",
    period: "Dec 2025 — Present",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Information Technology — VNUHCM",
    logo: "/images/UIT.png",
    period: "Sep 2022 — Sep 2025",
    gpa: "3.5/4.0",
    achievements: [
      "Graduated with honors (very good)",
      'Kaggle Competition: "Home Credit — Credit Risk Model Stability": Rank 1096/3858',
      "UIT Global Scholarship",
    ],
  },
];
```

- [ ] **Step 5: Create experience data**

Create `src/data/experience.ts`:

```ts
import { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "AI Engineer Intern",
    company: "CoverGo Insurtech",
    logo: "/images/CoverGo.jpeg",
    period: "Oct 2025 — Jan 2026",
    bullets: [
      "Researched DSPy-based LLM optimization",
      "Conducted prompt engineering + Gemini integration",
      "Built RAG-based Q&A web application",
    ],
  },
];
```

- [ ] **Step 6: Create certifications data**

Create `src/data/certifications.ts`:

```ts
import { CertificationEntry } from "@/types";

export const certificationEntries: CertificationEntry[] = [
  {
    name: "Applications of AI for Anomaly Detection",
    provider: "NVIDIA",
    date: "Mar 2026",
    url: "https://learn.nvidia.com/certificates?id=yJ0lOgG5SE-NIJ_qCtDxhg",
    icon: "nvidia",
  },
  {
    name: "IELTS Academic 7.0",
    provider: "IDP",
    date: "Oct 2025",
    icon: "award",
  },
  {
    name: "Natural Language Processing Specialization",
    provider: "Coursera + DeepLearning.AI",
    date: "Aug 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/Z3O66DA9IU9P",
    icon: "coursera",
  },
  {
    name: "Deep Learning Specialization",
    provider: "Coursera + DeepLearning.AI",
    date: "Aug 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/YRPSNXWK3C2K",
    icon: "coursera",
  },
  {
    name: "Machine Learning Specialization",
    provider: "Coursera + DeepLearning.AI",
    date: "Jul 2025",
    url: "https://www.coursera.org/account/accomplishments/specialization/MLG19H9E3KPF",
    icon: "coursera",
  },
  {
    name: "Problem Solving Using Computational Thinking",
    provider: "Coursera",
    date: "Jun 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/UZ23GF4LB8U5",
    icon: "coursera",
  },
  {
    name: "IELTS Academic 7.0",
    provider: "British Council",
    date: "Mar 2022",
    icon: "award",
  },
];
```

- [ ] **Step 7: Create projects data (pinned repos + category mappings)**

Create `src/data/projects.ts`:

```ts
export const PINNED_REPOS = [
  "Meta-RAG",
  "novel-verse-ai",
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
  "Meta-RAG": ["RAG", "LLM", "NLP", "Research"],
  "novel-verse-ai": ["LLM", "Agentic AI", "NLP", "Generative AI"],
  "Vietnamese-Legal-Doc-Retrieval": ["NLP", "RAG", "Research"],
  "Dense-Passage-Retrieval": ["RAG", "NLP", "Deep Learning", "Research"],
  "Semantic-Book-Recommender": ["NLP", "LLM", "Generative AI"],
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

// GitHub language → color mapping
export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B",
  Rust: "#dea584",
  Go: "#00ADD8",
};
```

- [ ] **Step 8: Commit**

```bash
git add src/types src/data
git commit -m "feat: add TypeScript types and static data layer for portfolio content"
```

---

## Task 3: UI Primitives (GlassCard, Tag, Modal, SectionTitle, HuggingFaceIcon)

**Files:**
- Create: `src/components/ui/GlassCard.tsx`, `src/components/ui/Tag.tsx`, `src/components/ui/Modal.tsx`, `src/components/ui/SectionTitle.tsx`, `src/components/ui/HuggingFaceIcon.tsx`

- [ ] **Step 1: Create GlassCard**

Create `src/components/ui/GlassCard.tsx`:

```tsx
"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 12px 40px rgba(37, 99, 235, 0.12)",
            }
          : undefined
      }
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create Tag**

Create `src/components/ui/Tag.tsx`:

```tsx
interface TagProps {
  label: string;
  variant?: "skill" | "category" | "language";
  active?: boolean;
  onClick?: () => void;
  color?: string;
}

export default function Tag({
  label,
  variant = "skill",
  active = false,
  onClick,
  color,
}: TagProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200";

  const variantClasses = {
    skill:
      "font-[family-name:var(--font-mono)] bg-slate-100 text-slate-700 border border-slate-200",
    category: active
      ? "bg-[var(--color-accent)] text-white shadow-md cursor-pointer"
      : "bg-white/60 text-slate-600 border border-slate-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] cursor-pointer",
    language: "bg-slate-50 text-slate-600",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {variant === "language" && color && (
        <span
          className="w-2.5 h-2.5 rounded-full inline-block"
          style={{ backgroundColor: color }}
        />
      )}
      {label}
    </button>
  );
}
```

- [ ] **Step 3: Create Modal**

Create `src/components/ui/Modal.tsx`:

```tsx
"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap + Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Focus the modal on open
    modalRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            ref={modalRef}
            className="glass relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 lg:p-8"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-slate-500" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 4: Create SectionTitle**

Create `src/components/ui/SectionTitle.tsx`:

```tsx
import { type LucideIcon } from "lucide-react";

interface SectionTitleProps {
  title: string;
  icon?: LucideIcon;
}

export default function SectionTitle({ title, icon: Icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && (
        <div className="p-2 rounded-lg bg-[var(--color-accent)]/10">
          <Icon size={20} className="text-[var(--color-accent)]" />
        </div>
      )}
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>
    </div>
  );
}
```

- [ ] **Step 5: Create HuggingFaceIcon**

Create `src/components/ui/HuggingFaceIcon.tsx`:

```tsx
interface HuggingFaceIconProps {
  size?: number;
  className?: string;
}

export default function HuggingFaceIcon({
  size = 20,
  className = "",
}: HuggingFaceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-label="HuggingFace"
    >
      <path d="M60.07 8.87C29.84 8.87 5.38 33.33 5.38 63.56s24.46 54.69 54.69 54.69 54.69-24.46 54.69-54.69S90.3 8.87 60.07 8.87zm-8.9 72.88c-7.8 0-14.12-6.32-14.12-14.12 0-2.6.7-5.04 1.93-7.14l5.35 3.09a7.82 7.82 0 00-1.07 3.99c0 4.33 3.52 7.85 7.85 7.85s7.85-3.52 7.85-7.85a7.82 7.82 0 00-1.07-3.99l5.35-3.09a14.06 14.06 0 011.93 7.14c.06 7.8-6.26 14.12-14.06 14.12h.06zm17.8 0c-7.8 0-14.12-6.32-14.12-14.12 0-2.6.7-5.04 1.93-7.14l5.35 3.09a7.82 7.82 0 00-1.07 3.99c0 4.33 3.52 7.85 7.85 7.85s7.85-3.52 7.85-7.85a7.82 7.82 0 00-1.07-3.99l5.35-3.09a14.06 14.06 0 011.93 7.14c.06 7.8-6.26 14.12-14.06 14.12h.06zM41.68 52.07c-3.64 0-6.59-2.95-6.59-6.59s2.95-6.59 6.59-6.59 6.59 2.95 6.59 6.59-2.95 6.59-6.59 6.59zm36.78 0c-3.64 0-6.59-2.95-6.59-6.59s2.95-6.59 6.59-6.59 6.59 2.95 6.59 6.59-2.95 6.59-6.59 6.59z" />
    </svg>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/components/ui
git commit -m "feat: add reusable UI primitives — GlassCard, Tag, Modal, SectionTitle, HuggingFaceIcon"
```

---

## Task 4: Sidebar + Navbar

**Files:**
- Create: `src/components/Sidebar.tsx`, `src/components/Navbar.tsx`

- [ ] **Step 1: Create Sidebar**

Create `src/components/Sidebar.tsx`:

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { personalInfo, socialLinks } from "@/data/personal";
import HuggingFaceIcon from "@/components/ui/HuggingFaceIcon";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  facebook: <Facebook size={18} />,
  huggingface: <HuggingFaceIcon size={18} />,
  mail: <Mail size={18} />,
};

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="glass p-6 lg:sticky lg:top-8 lg:h-fit">
      {/* Basic info — always visible */}
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)]">
            {personalInfo.name}
          </h1>
          <p className="text-sm font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full px-3 py-0.5 mt-1 inline-block">
            {personalInfo.title}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden ml-auto p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label={isExpanded ? "Hide contacts" : "Show contacts"}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={20} className="text-slate-500" />
          </motion.div>
        </button>
      </div>

      {/* Contact details — rendered in two places to avoid hydration mismatch */}
      {/* Desktop: always visible */}
      <div className="hidden lg:block">
        <ContactDetails />
      </div>

      {/* Mobile: animated toggle */}
      <div className="lg:hidden">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ContactDetails />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}

function ContactDetails() {
  return (
    <>
      <div className="h-px bg-slate-200 my-4" />

      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100">
            <Mail size={16} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
              Email
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100">
            <Phone size={16} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
              Phone
            </p>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100">
            <Calendar size={16} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
              Birthday
            </p>
            <time className="text-sm text-[var(--color-text-primary)]">
              {personalInfo.dob}
            </time>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100">
            <MapPin size={16} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
              Location
            </p>
            <address className="text-sm text-[var(--color-text-primary)] not-italic">
              {personalInfo.location}
            </address>
          </div>
        </li>
      </ul>

      <div className="h-px bg-slate-200 my-4" />

      <ul className="flex items-center justify-center gap-3">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-[var(--color-accent)] hover:text-white text-slate-500 transition-all duration-200 inline-flex hover:scale-110"
              aria-label={link.name}
            >
              {iconMap[link.icon]}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
```

- [ ] **Step 2: Create Navbar**

Create `src/components/Navbar.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { type TabName } from "@/types";

const TABS: TabName[] = ["About", "Resume", "Projects", "Blog", "Contact"];

interface NavbarProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <nav className="glass px-2 py-2 mb-6 overflow-x-auto">
      <ul className="flex items-center gap-1 min-w-max">
        {TABS.map((tab) => (
          <li key={tab} className="relative">
            <button
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative z-10 ${
                activeTab === tab
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[var(--color-accent)]/10 rounded-lg -z-10"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Sidebar.tsx src/components/Navbar.tsx
git commit -m "feat: add Sidebar with expandable contacts and Navbar with animated tab indicator"
```

---

## Task 5: About Section

**Files:**
- Create: `src/components/about/AboutSection.tsx`

- [ ] **Step 1: Create AboutSection**

Create `src/components/about/AboutSection.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { BrainCircuit, Bot, FlaskConical } from "lucide-react";
import { aboutText } from "@/data/personal";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: BrainCircuit,
    title: "LLM & RAG Systems",
    description:
      "Building production-ready retrieval-augmented generation pipelines with adaptive retrieval and self-correcting mechanisms.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Designing autonomous agents with tool use, multi-step reasoning, and self-correction capabilities.",
  },
  {
    icon: FlaskConical,
    title: "ML Research",
    description:
      "Exploring optimization techniques for language models including fine-tuning, prompt engineering, and DSPy.",
  },
];

export default function AboutSection() {
  return (
    <section>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
          About Me
        </h2>
      </motion.header>

      <motion.div
        className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {aboutText.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </motion.div>

      <SectionTitle title="What I'm Doing" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <GlassCard
            key={service.title}
            hover
            className="p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          >
            <service.icon
              size={32}
              className="text-[var(--color-accent)] mb-3"
            />
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)] mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {service.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/about
git commit -m "feat: add About section with bio and service cards"
```

---

## Task 6: Resume Section (Education, Experience, Skills, Certifications, ResumeActions)

**Files:**
- Create: `src/components/resume/ResumeSection.tsx`, `src/components/resume/Education.tsx`, `src/components/resume/Experience.tsx`, `src/components/resume/Skills.tsx`, `src/components/resume/Certifications.tsx`, `src/components/resume/ResumeActions.tsx`

- [ ] **Step 1: Create Education**

Create `src/components/resume/Education.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { educationEntries } from "@/data/education";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Education() {
  return (
    <div>
      <SectionTitle title="Education" icon={GraduationCap} />
      <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
        {educationEntries.map((entry, i) => (
          <motion.div
            key={i}
            className="flex gap-4 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0 relative z-10">
              <Image
                src={entry.logo}
                alt={entry.institution}
                width={40}
                height={40}
                className="object-contain w-full h-full p-1"
              />
            </div>
            <div className="flex-1 pb-4">
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)]">
                {entry.degree}
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {entry.institution}
              </p>
              <span className="text-xs text-[var(--color-accent)] font-medium">
                {entry.period}
              </span>
              {entry.gpa && (
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  GPA: {entry.gpa}
                </p>
              )}
              {entry.achievements && (
                <ul className="mt-2 space-y-1">
                  {entry.achievements.map((ach, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create Experience**

Create `src/components/resume/Experience.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { experienceEntries } from "@/data/experience";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <div>
      <SectionTitle title="Experience" icon={Briefcase} />
      <div className="space-y-6">
        {experienceEntries.map((entry, i) => (
          <motion.div
            key={i}
            className="flex gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0">
              <Image
                src={entry.logo}
                alt={entry.company}
                width={40}
                height={40}
                className="object-contain w-full h-full p-1"
              />
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)]">
                {entry.role}
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {entry.company}
              </p>
              <span className="text-xs text-[var(--color-accent)] font-medium">
                {entry.period}
              </span>
              <ul className="mt-2 space-y-1">
                {entry.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create Skills**

Create `src/components/resume/Skills.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Tag from "@/components/ui/Tag";

export default function Skills() {
  return (
    <div>
      <SectionTitle title="Skills" icon={Wrench} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, i) => (
          <GlassCard
            key={category.name}
            className="p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-accent)] mb-3">
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.1 + j * 0.03 }}
                >
                  <Tag label={skill} variant="skill" />
                </motion.div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create Certifications**

Create `src/components/resume/Certifications.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { certificationEntries } from "@/data/certifications";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Certifications() {
  return (
    <div>
      <SectionTitle title="Certifications" icon={Award} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificationEntries.map((cert, i) => (
          <GlassCard
            key={`${cert.name}-${cert.date}`}
            hover
            className="p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-text-primary)] leading-snug">
                  {cert.name}
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  {cert.provider}
                </p>
                <span className="text-xs text-[var(--color-accent)] font-medium">
                  {cert.date}
                </span>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors shrink-0"
                  aria-label={`View ${cert.name} certificate`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Create ResumeActions**

Create `src/components/resume/ResumeActions.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { Download, Eye } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function ResumeActions() {
  return (
    <motion.div
      className="flex flex-wrap gap-3 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <a
        href={personalInfo.resumeUrl}
        download
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
      >
        <Download size={16} />
        Download Resume
      </a>
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-accent)] text-[var(--color-accent)] font-medium text-sm hover:bg-[var(--color-accent)]/10 transition-colors"
      >
        <Eye size={16} />
        View Resume
      </a>
    </motion.div>
  );
}
```

- [ ] **Step 6: Create ResumeSection container**

Create `src/components/resume/ResumeSection.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import ResumeActions from "./ResumeActions";

export default function ResumeSection() {
  return (
    <section>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
          Resume
        </h2>
      </motion.header>

      <div className="space-y-10">
        <Education />
        <Experience />
        <Skills />
        <Certifications />
      </div>

      <ResumeActions />
    </section>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add src/components/resume
git commit -m "feat: add Resume section — education, experience, skills, certifications, and PDF actions"
```

---

## Task 7: GitHub Fetch + Projects Section

**Files:**
- Create: `src/lib/github.ts`, `src/components/projects/ProjectsSection.tsx`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectModal.tsx`

- [ ] **Step 1: Create GitHub fetch utility**

Create `src/lib/github.ts`:

```ts
import { GitHubRepo, Project } from "@/types";
import { PINNED_REPOS, CATEGORY_MAP } from "@/data/projects";

export async function fetchGitHubRepos(): Promise<Project[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    "https://api.github.com/users/YuITC/repos?per_page=100&sort=updated",
    {
      headers,
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch GitHub repos:", res.status);
    return [];
  }

  const repos: GitHubRepo[] = await res.json();

  // Filter out the profile README repo
  const filtered = repos.filter((repo) => repo.name !== "yuitc");

  return filtered.map((repo) => ({
    ...repo,
    categories: CATEGORY_MAP[repo.name] || [],
    isPinned: PINNED_REPOS.includes(repo.name),
  }));
}
```

- [ ] **Step 2: Create ProjectCard**

Create `src/components/projects/ProjectCard.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Project } from "@/types";
import { LANGUAGE_COLORS } from "@/data/projects";
import GlassCard from "@/components/ui/GlassCard";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({
  project,
  onClick,
  index,
}: ProjectCardProps) {
  return (
    <GlassCard
      hover
      className="p-5 cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)] leading-snug">
          {project.name}
        </h4>
        <div className="flex items-center gap-1 shrink-0">
          {project.isPinned && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-highlight)] bg-[var(--color-highlight)]/10 px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
          {project.stargazers_count > 0 && (
            <span className="flex items-center gap-0.5 text-xs text-[var(--color-highlight)]">
              <Star size={12} fill="currentColor" />
              {project.stargazers_count}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] mb-3 line-clamp-2">
        {project.description || "No description available."}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        {project.language && (
          <Tag
            label={project.language}
            variant="language"
            color={LANGUAGE_COLORS[project.language]}
          />
        )}
        {project.categories.slice(0, 3).map((cat) => (
          <span
            key={cat}
            className="text-[10px] text-[var(--color-text-secondary)] bg-slate-100 px-2 py-0.5 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
```

- [ ] **Step 3: Create ProjectModal**

Create `src/components/projects/ProjectModal.tsx`:

```tsx
"use client";

import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { LANGUAGE_COLORS } from "@/data/projects";
import Modal from "@/components/ui/Modal";
import Tag from "@/components/ui/Tag";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.name}>
      <div className="space-y-5">
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)]">
            {project.name}
          </h3>
          {project.language && (
            <div className="mt-1">
              <Tag
                label={project.language}
                variant="language"
                color={LANGUAGE_COLORS[project.language]}
              />
            </div>
          )}
        </div>

        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {project.description || "No description available."}
        </p>

        {project.categories.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">
              Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.categories.map((cat) => (
                <Tag key={cat} label={cat} variant="skill" />
              ))}
            </div>
          </div>
        )}

        {project.topics.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">
              Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs text-[var(--color-text-secondary)] bg-slate-100 px-2 py-0.5 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-text-primary)] text-white text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            <Github size={16} />
            View on GitHub
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-medium hover:bg-[var(--color-accent)]/10 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
```

- [ ] **Step 4: Create ProjectsSection**

Create `src/components/projects/ProjectsSection.tsx`:

```tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { FolderGit2 } from "lucide-react";
import { Project } from "@/types";
import { CATEGORIES, type CategoryName } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryName>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [projects, activeCategory]);

  const pinnedProjects = filteredProjects.filter((p) => p.isPinned);
  const otherProjects = filteredProjects.filter((p) => !p.isPinned);

  return (
    <section>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
          Projects
        </h2>
      </motion.header>

      {/* Category filter bar */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {CATEGORIES.map((category) => (
          <Tag
            key={category}
            label={category}
            variant="category"
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </motion.div>

      {/* Pinned projects */}
      {pinnedProjects.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FolderGit2
              size={16}
              className="text-[var(--color-highlight)]"
            />
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
              Featured
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pinnedProjects.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                onClick={() => setSelectedProject(project)}
                index={i}
              />
            ))}
          </div>
        </div>
      )}

      {/* All other projects */}
      {otherProjects.length > 0 && (
        <div>
          {pinnedProjects.length > 0 && (
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-4">
              All Projects
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                onClick={() => setSelectedProject(project)}
                index={i}
              />
            ))}
          </div>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <p className="text-center text-[var(--color-text-secondary)] py-12">
          No projects found in this category.
        </p>
      )}

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/lib/github.ts src/components/projects
git commit -m "feat: add Projects section with GitHub API fetch, category filtering, and detail modal"
```

---

## Task 8: Blog + Contact Sections

**Files:**
- Create: `src/components/blog/BlogSection.tsx`, `src/components/contact/ContactSection.tsx`, `src/lib/emailjs.ts`

- [ ] **Step 1: Create BlogSection**

Create `src/components/blog/BlogSection.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { PenLine } from "lucide-react";

export default function BlogSection() {
  return (
    <section>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
          Blog
        </h2>
      </motion.header>

      <motion.div
        className="flex flex-col items-center justify-center py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="p-4 rounded-full bg-[var(--color-accent)]/10 mb-4">
          <PenLine size={32} className="text-[var(--color-accent)]" />
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-text-primary)] mb-2">
          Coming Soon
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-sm">
          I&apos;m working on sharing insights about AI engineering, RAG systems,
          and LLM applications. Stay tuned!
        </p>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Create EmailJS utility**

Create `src/lib/emailjs.ts`:

```ts
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export async function sendContactEmail(formData: {
  fullname: string;
  email: string;
  message: string;
}): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured. Please set environment variables.");
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
}
```

- [ ] **Step 3: Create ContactSection**

Create `src/components/contact/ContactSection.tsx`:

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { socialLinks } from "@/data/personal";
import { sendContactEmail } from "@/lib/emailjs";
import GlassCard from "@/components/ui/GlassCard";
import HuggingFaceIcon from "@/components/ui/HuggingFaceIcon";

const contactIconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  facebook: <Facebook size={20} />,
  huggingface: <HuggingFaceIcon size={20} />,
  mail: <Mail size={20} />,
};

const contactLinks = [
  ...socialLinks,
  {
    name: "Phone",
    url: "tel:+84945409269",
    icon: "phone" as const,
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const isValid =
    formData.fullname.trim() &&
    formData.email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.message.trim();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");
    try {
      await sendContactEmail(formData);
      setStatus("success");
      setFormData({ fullname: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
          Contact
        </h2>
      </motion.header>

      {/* Social links */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("tel:") || link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="glass flex items-center gap-3 p-3 rounded-xl hover:shadow-md transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
              {link.icon === "phone" ? (
                <Phone size={20} />
              ) : (
                contactIconMap[link.icon]
              )}
            </div>
            <span className="text-sm font-medium text-[var(--color-text-primary)]">
              {link.name}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Contact form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <GlassCard className="p-6">
          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-[var(--color-text-primary)] mb-4">
            Send me a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                required
                value={formData.fullname}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, fullname: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm text-[var(--color-text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm text-[var(--color-text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm text-[var(--color-text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all resize-none"
            />
            <button
              type="submit"
              disabled={!isValid || status === "sending"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={16} />
                  Sent!
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle size={16} />
                  Failed. Try again.
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </GlassCard>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/blog src/components/contact src/lib/emailjs.ts
git commit -m "feat: add Blog (coming soon) and Contact sections with EmailJS integration"
```

---

## Task 9: PortfolioApp + Page Assembly

**Files:**
- Create: `src/components/PortfolioApp.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create PortfolioApp (client orchestrator)**

Create `src/components/PortfolioApp.tsx`:

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { type TabName, type Project } from "@/types";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AboutSection from "./about/AboutSection";
import ResumeSection from "./resume/ResumeSection";
import ProjectsSection from "./projects/ProjectsSection";
import BlogSection from "./blog/BlogSection";
import ContactSection from "./contact/ContactSection";

interface PortfolioAppProps {
  projects: Project[];
}

const tabComponents: Record<TabName, React.ComponentType<{ projects?: Project[] }>> = {
  About: AboutSection,
  Resume: ResumeSection,
  Projects: ProjectsSection as React.ComponentType<{ projects?: Project[] }>,
  Blog: BlogSection,
  Contact: ContactSection,
};

export default function PortfolioApp({ projects }: PortfolioAppProps) {
  const [activeTab, setActiveTab] = useState<TabName>("About");

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <motion.div
          className="lg:w-[280px] shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Sidebar />
        </motion.div>

        {/* Main content */}
        <motion.div
          className="flex-1 min-w-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "Projects" ? (
                <ProjectsSection projects={projects} />
              ) : (
                (() => {
                  const Component = tabComponents[activeTab];
                  return <Component />;
                })()
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Update page.tsx as Server Component**

Replace `src/app/page.tsx` with:

```tsx
import { fetchGitHubRepos } from "@/lib/github";
import PortfolioApp from "@/components/PortfolioApp";

export default async function Home() {
  const projects = await fetchGitHubRepos();

  return <PortfolioApp projects={projects} />;
}
```

- [ ] **Step 3: Verify the full app runs**

Run: `npm run dev`
Expected: App loads with sidebar, navbar, About tab content. Clicking tabs switches between sections. Projects tab shows GitHub repos with category filtering. Contact form renders with inputs.

- [ ] **Step 4: Commit**

```bash
git add src/components/PortfolioApp.tsx src/app/page.tsx
git commit -m "feat: assemble PortfolioApp with tab navigation and server-side GitHub data fetching"
```

---

## Task 10: Clean Up + Production Build

**Files:**
- Delete: `index.html` (old vanilla HTML)
- Remove: unused original assets from `assets/images/` that were not migrated

- [ ] **Step 1: Remove old files**

```bash
rm -f index.html
rm -rf assets/images/avatar-*.png assets/images/blog-*.jpg assets/images/project-*.jpg assets/images/project-*.png
rm -rf assets/images/logo-*.png assets/images/icon-*.svg assets/images/logo.ico assets/images/logo.svg
rm -rf assets/images/my-avatar.png
rm -rf assets/css assets/js
```

Keep `assets/images/me.png`, `assets/images/UIT.png`, `assets/images/CoverGo.jpeg` (originals — copies now in `public/`), and `assets/resumes/`.

- [ ] **Step 2: Add .gitignore entries if missing**

Ensure `.gitignore` includes:
```
.env
.env.local
```

- [ ] **Step 3: Create .env.local template**

Create `.env.example`:

```
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# GitHub API (optional — prevents rate limiting)
GITHUB_TOKEN=
```

**Note for local development:** Copy `.env.example` to `.env.local` and fill in your EmailJS credentials to test the contact form. The form will silently fail without these values.

- [ ] **Step 4: Run production build**

Run: `npm run build`
Expected: Build completes successfully with no TypeScript errors. The home page is statically generated with GitHub data fetched at build time.

- [ ] **Step 5: Test production build locally**

Run: `npm run start`
Expected: App runs on localhost:3000. All tabs work. Animations are smooth. Projects load from pre-fetched data.

- [ ] **Step 6: Commit**

```bash
git add .env.example .gitignore
git rm index.html
git commit -m "feat: clean up old files, add env template, verify production build"
```

---

## Task 11: Final Polish + Responsive Testing

- [ ] **Step 1: Test responsive layout**

Open browser dev tools and test at:
- Mobile (375px): Sidebar collapses, single column, scrollable navbar
- Tablet (768px): 2-column project grid
- Desktop (1024px+): Two-column layout with fixed sidebar

- [ ] **Step 2: Fix any visual issues found during testing**

Common fixes:
- Sidebar overflow on mobile
- Tag wrapping on small screens
- Modal full-screen on mobile
- Font sizes too large/small at breakpoints

- [ ] **Step 3: Test all interactive features**

Verify:
- Tab switching with animation
- Project category filtering
- Project modal open/close (click + Escape)
- Contact form validation (empty fields, invalid email)
- Resume download/view buttons
- Social link hover effects
- All external links open in new tab

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: responsive layout and interaction polish"
```
