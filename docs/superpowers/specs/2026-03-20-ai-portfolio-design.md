# AI Engineer Portfolio — Design Spec

**Author**: Tai Nguyen Phu
**Date**: 2026-03-20
**Status**: Approved

---

## 1. Overview

Transform a cloned vanilla HTML/CSS/JS web developer portfolio into a modern, production-ready AI Engineer portfolio. Migrate to Next.js 16 + Tailwind CSS v4, deploy via Vercel. Light-mode glassmorphism aesthetic with a "research lab" feel.

### Goals

- Replace all web developer content with AI Engineer-focused content
- Migrate from vanilla HTML to Next.js 16 (App Router) + TypeScript
- Implement glassmorphism UI with premium animations
- Dynamic GitHub project fetching with pinned/featured repos and category filtering
- Working contact form via EmailJS
- Resume download/view functionality
- Deploy-ready for Vercel

---

## 2. Tech Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | Next.js (App Router) | 16 |
| Styling | Tailwind CSS | 4 |
| Animations | Framer Motion | latest |
| Icons | Lucide React | latest |
| Contact Form | EmailJS | latest |
| Language | TypeScript | 5.x |
| Deployment | Vercel | — |

---

## 3. Design System

### 3.1 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#f1f5f9` (slate-100) | Page background |
| `--bg-mesh` | Radial gradient with `#dbeafe` + `#e0e7ff` blobs | Depth/atmosphere |
| `--glass` | `rgba(255,255,255,0.65)` + `backdrop-blur(16px)` | Cards, sidebar, modals |
| `--glass-border` | `rgba(255,255,255,0.3)` | Frosted edge definition |
| `--text-primary` | `#0f172a` (slate-900) | Headings, strong text |
| `--text-secondary` | `#475569` (slate-600) | Body text |
| `--accent` | `#2563eb` (blue-600) | Links, buttons, active states |
| `--accent-glow` | `#3b82f6` at 20% opacity | Hover glows, focus rings |
| `--highlight` | `#f59e0b` (amber-500) | Badges, featured tags, star counts |
| `--success` | `#10b981` | Form success states |
| `--danger` | `#ef4444` | Form errors |

### 3.2 Typography

| Role | Font | Weight |
|------|------|--------|
| Display/Headings | Sora | 600, 700 |
| Body | DM Sans | 400, 500 |
| Code/Tags | JetBrains Mono | 400 |

### 3.3 Glassmorphism Tokens

```css
.glass-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}
```

---

## 4. Architecture

### 4.1 Directory Structure

```
src/
  app/
    layout.tsx            — Root layout, fonts, metadata, mesh background
    page.tsx              — Main page (single-page app with tab navigation)
    globals.css           — Tailwind v4 base + glassmorphism + custom styles
  components/
    Sidebar.tsx           — Avatar, name, title, contacts, socials
    Navbar.tsx            — Tab navigation
    about/
      AboutSection.tsx    — Bio text + "What I'm Doing" service cards
    resume/
      ResumeSection.tsx   — Parent container
      Education.tsx       — Timeline with UIT logo
      Experience.tsx      — Timeline with CoverGo logo
      Skills.tsx          — Grouped tag-based UI (5 categories)
      Certifications.tsx  — Cards with provider icons/logos
      ResumeActions.tsx   — Download PDF + View Resume buttons
    projects/
      ProjectsSection.tsx — Category filters + pinned + all grid
      ProjectCard.tsx     — Individual repo card
      ProjectModal.tsx    — Detail modal on click
    blog/
      BlogSection.tsx     — "Coming Soon" placeholder
    contact/
      ContactSection.tsx  — Social links grid + EmailJS form
    ui/
      GlassCard.tsx       — Reusable glassmorphism container
      Tag.tsx             — Skill/tech tag component
      Modal.tsx           — Reusable modal with Framer Motion
      SectionTitle.tsx    — Consistent section headers
  lib/
    github.ts             — Fetch repos from GitHub API, sort/filter
    emailjs.ts            — EmailJS initialization + send helper
  data/
    personal.ts           — Name, DOB, location, summary, social links
    skills.ts             — 5 categorized skill groups
    education.ts          — Education entries with achievements
    experience.ts         — Work experience entries
    certifications.ts     — Certification entries with links
    projects.ts           — Pinned repo slugs + category tag mappings
  types/
    index.ts              — Shared TypeScript interfaces
public/
  images/
    me.png                — Profile avatar
    UIT.png               — University logo
    CoverGo.jpeg          — Company logo
  resumes/
    2026-03-19.pdf        — Resume PDF
```

### 4.2 Data Flow

```
GitHub API (build time via Server Component)
  → fetch() with next: { revalidate: 3600 } in Server Component
  → Merge with local category mappings (data/projects.ts)
  → Pass to ProjectsSection (client component) as props
  → Filter by category tags client-side
  → Click card → open ProjectModal with full details
```

Projects are fetched at build time (SSG) via Server Components with ISR revalidation (every 1 hour) so the site stays up to date without rebuilds.

### 4.3 Responsive / Mobile Layout

| Breakpoint | Behavior |
|------------|----------|
| `>= 1024px` (lg) | Two-column layout: fixed sidebar (left) + scrollable main content (right) |
| `< 1024px` | Single-column stacked layout: sidebar collapses to a top card with avatar + name + toggle button. Clicking toggle expands contact details. Navbar becomes horizontally scrollable. |

- Sidebar on mobile: compact card at top showing avatar, name, title. "Show Contacts" button expands contact details and social links.
- Navbar on mobile: horizontal scroll with active tab indicator.
- Project grid: 2 columns on tablet, 1 column on mobile.
- Skills tags: wrap naturally on smaller screens.
- Modal: full-screen on mobile with close button.

---

## 5. Page Sections

### 5.1 Sidebar (Persistent)

- Profile photo (`me.png`)
- Name: "Tai Nguyen Phu"
- Title: "AI Engineer"
- Expandable contact details:
  - Email: tainguyenphu2502@gmail.com
  - Phone: +84 945 409 269
  - DOB: February 25, 2004
  - Location: Ho Chi Minh, Vietnam
- Social icons row: GitHub, LinkedIn, Facebook, HuggingFace, Email

### 5.2 About Tab

**Bio text** (provided verbatim in prompt):
- Paragraph 1: AI Engineer intro — LLM, RAG, AI agents focus
- Paragraph 2: Hands-on experience summary, English skills
- Paragraph 3: Currently searching for Junior AI Engineer role
- Paragraph 4: Pursuing Master's at UIT

**"What I'm Doing"** — 3 service cards (glass style):
- LLM & RAG Systems — Building production-ready retrieval-augmented generation pipelines
- AI Agents — Designing autonomous agents with tool use and self-correction
- ML Research — Exploring optimization techniques for language models

### 5.3 Resume Tab

**Education** (timeline with logo):
- Master of Computer Science — UIT (Dec 2025 – Present)
- Bachelor of Computer Science — UIT (Sep 2022 – Sep 2025)
  - GPA: 3.5/4.0
  - Achievements: Graduated with honors, Kaggle rank 1096/3858, UIT Global Scholarship

**Experience** (timeline with logo):
- AI Engineer Intern — CoverGo Insurtech (Oct 2025 – Jan 2026)
  - DSPy-based LLM optimization research
  - Prompt engineering + Gemini integration
  - RAG-based Q&A web application

**Skills** (tag-based, grouped in glass cards):
- Programming: Python, C++, TypeScript, SQL, REST API, FastAPI, OOP, Git
- AI/LLM: RAG, LangChain, LangGraph, LoRA, QLoRA, DSPy, Prompt Engineering, AI Agents
- ML/Data: Qdrant, FAISS, Transformers, Pandas, NumPy, PyTorch, Scikit-learn, OpenCV
- MLOps: Docker, AWS, MLflow, Weights & Biases, GitHub Actions
- Soft Skills: English (IELTS 7.0), Research, Presentation, Teamwork, Project Management

**Certifications** (cards with provider icon, date, link):
1. Applications of AI for Anomaly Detection — NVIDIA (Mar 2026)
2. IELTS Academic 7.0 — IDP (Oct 2025)
3. NLP Specialization — Coursera + DeepLearning.AI (Aug 2025)
4. Deep Learning Specialization — Coursera + DeepLearning.AI (Aug 2025)
5. Machine Learning Specialization — Coursera + DeepLearning.AI (Jul 2025)
6. Problem Solving Using Computational Thinking — Coursera (Jun 2024)
7. IELTS Academic 7.0 — British Council (Mar 2022)

**Resume Actions**:
- "Download Resume" button (downloads PDF)
- "View Resume" button (opens PDF in new tab)

### 5.4 Projects Tab (renamed from Portfolio)

**Category filter bar**:
`All` | `NLP` | `LLM` | `RAG` | `Agentic AI` | `Computer Vision` | `Machine Learning` | `Generative AI` | `Deep Learning` | `Research`

**Pinned/Featured repos** (4 repos, "Featured" amber badge):
1. Meta-RAG
2. novel-verse-ai
3. Vietnamese-Legal-Doc-Retrieval
4. Dense-Passage-Retrieval

**All repos** grid below pinned section.

**Project card displays**:
- Repository name
- Description
- Primary language (color dot)
- Star count
- Category tags

**Project modal** (on card click):
- Full description
- GitHub link (button)
- Demo link if available
- Key highlights / topics
- Tech stack tags

**Category tag mappings**:

| Repo | Categories |
|------|-----------|
| Meta-RAG | RAG, LLM, NLP, Research |
| novel-verse-ai | LLM, Agentic AI, NLP, Generative AI |
| Vietnamese-Legal-Doc-Retrieval | NLP, RAG, Research |
| Dense-Passage-Retrieval | RAG, NLP, Deep Learning, Research |
| Semantic-Book-Recommender | NLP, LLM, Generative AI |
| Scene-Text-Recognition | Computer Vision, Deep Learning |
| 2024-DataScience-Salaries-Analysis | Machine Learning, LLM, Generative AI |
| Image-Inpainting-using-Partial-Convolutions | Computer Vision, Deep Learning, Generative AI |
| Realtime-Style-Transfer | Computer Vision, Deep Learning, Generative AI |
| Real-time-Face-Recognition | Computer Vision, Deep Learning |
| AI-Job-Finding-TelegramBot | Agentic AI, LLM |

### 5.5 Blog Tab

- "Coming Soon" placeholder with subtle icon/illustration
- No dummy content

### 5.6 Contact Tab

**Social/contact links grid** (with icons):
- GitHub: https://github.com/YuITC
- Email: tainguyenphu2502@gmail.com
- Facebook: https://www.facebook.com/taing2502/
- LinkedIn: https://www.linkedin.com/in/yuitc/
- HuggingFace: https://huggingface.co/YuITC
- Phone: +84 945 409 269

**Contact form** (EmailJS):
- Fields: Full Name, Email, Message
- Client-side validation (required fields, email format)
- Submit → EmailJS send → success/error toast
- Button disabled until all fields valid

**No map.**

---

## 6. Animation Strategy

| Interaction | Animation | Library |
|-------------|-----------|---------|
| Page load | Staggered fade-up: sidebar → navbar → content (200ms delays) | Framer Motion |
| Tab switch | Content fade out/in with subtle Y-slide (`AnimatePresence`) | Framer Motion |
| Cards | Fade-up on scroll (`whileInView`) | Framer Motion |
| Card hover | `translateY(-4px)` + glow border transition | CSS |
| Modal open | Scale 0.95→1 + fade backdrop | Framer Motion |
| Modal close | Scale 1→0.95 + fade out | Framer Motion |
| Skill tags | Staggered pop-in when Resume tab activates | Framer Motion |
| Form submit | Button loading spinner → success checkmark | CSS + Framer Motion |
| Social icons | Scale bounce on hover | CSS |

---

## 7. Personal Info

- **Name**: Tai Nguyen Phu
- **DOB**: February 25, 2004
- **Location**: Ho Chi Minh, Vietnam
- **Title**: AI Engineer
- **Summary**: "Aspiring AI Engineer specializing in LLM-powered systems, with a focus on Retrieval-Augmented Generation, agentic workflows, and model fine-tuning. Seeking to contribute to AI-driven product teams."
- **Avatar**: `public/images/me.png`
- **Resume**: `public/resumes/2026-03-19.pdf`

---

## 8. Deployment

- **Platform**: Vercel
- **Build**: `next build` (static generation + ISR)
- **ISR**: Projects page revalidates every 3600 seconds (1 hour)
- **Environment variables** (Vercel dashboard):
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - `GITHUB_TOKEN` (optional, prevents API rate limiting during frequent builds/ISR)
- **Font loading**: All fonts loaded via `next/font/google` for optimal performance
- **SEO metadata** (in `layout.tsx`):
  - Title: "Tai Nguyen Phu — AI Engineer"
  - Description: "Aspiring AI Engineer specializing in LLM-powered systems, RAG, agentic workflows, and model fine-tuning."
  - Open Graph image, favicon
- **Icons**: Lucide React for standard icons; HuggingFace icon as a custom inline SVG component
- **Accessibility**: Keyboard-navigable modals (focus trap, Escape to close), ARIA labels on icon-only links, semantic HTML throughout

---

## 9. Assets to Migrate

From current `assets/images/`:
- `me.png` → `public/images/me.png`
- `UIT.png` → `public/images/UIT.png`
- `CoverGo.jpeg` → `public/images/CoverGo.jpeg`

From current `assets/resumes/`:
- `2026-03-19.pdf` → `public/resumes/2026-03-19.pdf`

All other original assets (avatar-*.png, blog-*.jpg, project-*.jpg, logo-*.png, icon-*.svg) are no longer needed and will not be migrated.
