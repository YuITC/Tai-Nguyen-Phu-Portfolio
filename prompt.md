You are a senior frontend engineer + UI/UX designer + AI portfolio consultant.

Your task is to refactor and upgrade an existing portfolio website (cloned from another web developer) into a modern, production-ready AI Engineer portfolio with strong UI/UX, clean structure, and scalable architecture.

---

## 1. CONTEXT

- The current project is a cloned portfolio repository of a Web Developer.
- I am an AI Engineer, so the entire content, structure, and presentation must be adapted accordingly.
- The existing tabs are:
  About, Resume, Portfolio, Blog, Contact

---

## 2. CONTENT TRANSFORMATION

### General

- Replace all Web Developer-related content with AI Engineer-focused content.
- Ensure tone is professional, concise, and technically strong (LLM / RAG / AI Agents focus).

---

### About Tab

- REMOVE:
  - Testimonials section
  - Clients section

- ADD / UPDATE:
  - About Me:

"""
I'm an AI Engineer with a strong foundation in machine learning and large language model (LLM) applications, backed by hands-on research and project experience in RAG systems, AI agents, and retrieval optimization. Passionate about building production-ready AI pipelines that are not only accurate but also adaptive and self-correcting.

Have hands-on experience in Software Development, Machine Learning, and Generative AI. Strong English skills (7.0 IELTS), teamwork, presentation, and project management abilities.

Currently searching for a Junior AI Engineer role to apply and grow my expertise in a fast-moving, product-driven environment.

Moreover, I'm also currently pursuing a Master's degree in Computer Science at the University of Information Technology - VNUHCM, Ho Chi Minh City, Vietnam.
"""

---

### Resume Tab

#### Skills Section

- CHANGE UI:
  - Remove progress bars
  - Display skills grouped by categories (clean list or tag-based UI)

Categories:

- Programming: Python, C++, TypeScript, SQL, REST API, FastAPI, OOP, Git
- AI/LLM: RAG, LangChain, LangGraph, LoRA, QLoRA, DSPy, Prompt Engineering, AI Agents
- ML/Data: Qdrant, FAISS, Transformers, Pandas, NumPy, PyTorch, Scikit-learn, OpenCV
- MLOps: Docker, AWS, MLflow, Weights & Biases, GitHub Actions
- Soft Skills: English (IELTS 7.0), Research, Presentation, Teamwork, Project Management

---

#### Education

- Master of Computer Science — UIT (Dec 2025 – Present)
- Bachelor of Computer Science — UIT (Sep 2022 – Sep 2025)
  - GPA: 3.5/4.0
  - Achievements:
    - Graduated with honors (very good)
    - Kaggle Competition: "Home Credit - Credit Risk Model Stability": Rank: 1096/3858
    - UIT Global Scholarship

- The logo UIT is in: `assets\images\UIT.png`

---

#### Experience

AI Engineer Intern — CoverGo Insurtech (Oct 2025 – Jan 2026)

- Researched DSPy-based LLM optimization
- Conducted prompt engineering + Gemini integration
- Built RAG-based Q&A web application

The logo CoverGo is in: `assets\images\CoverGo.jpeg`

---

#### Certifications

- Applications of AI for Anomaly Detection:
  - Mar 2026
  - https://learn.nvidia.com/certificates?id=yJ0lOgG5SE-NIJ_qCtDxhg
  - NVIDIA
- IELTS Academic 7.0:
  - Oct 2025
  - IDP
- Natural Language Processing Specialization:
  - Aug 2025
  - https://www.coursera.org/account/accomplishments/specialization/Z3O66DA9IU9P
  - Coursera + DeepLearning.AI
- Deep Learning Specialization:
  - Aug 2025
  - https://www.coursera.org/account/accomplishments/specialization/YRPSNXWK3C2K
  - Coursera + DeepLearning.AI
- Machine Learning Specialization:
  - Jul 2025
  - https://www.coursera.org/account/accomplishments/specialization/MLG19H9E3KPF
  - Coursera + DeepLearning.AI
- Problem Solving Using Computational Thinking:
  - Jun 2024
  - Coursera
  - https://www.coursera.org/account/accomplishments/verify/UZ23GF4LB8U5
- IELTS Academic 7.0:
  - Mar 2022
  - British Council

- Use the corresponding logo/icon with each certificate

---

#### ADD FEATURE

- Add a "Download Resume (PDF)" button
- Add a "View Resume" option (modal or new tab)

---

### Portfolio Tab → RENAME to "Projects"

- Each project must:
  - Be fetched dynamically from:
    https://github.com/YuITC?tab=repositories
  - Display:
    - Name
    - Description
    - Tech stack
    - Stars (optional)

- Interaction:
  - On click → open MODAL with:
    - Detailed description
    - GitHub link
    - Demo (if available)
    - Key highlights (RAG / LLM / Agents etc.)

---

### Blog Tab

- Keep empty (placeholder)
- Add "Coming Soon"

---

### Contact Tab

- REMOVE:
  - Map

- KEEP:
  - Contact Form

- ADD:
  - Social + contact links with icons:
    - GitHub: https://github.com/YuITC
    - Email: tainguyenphu2502@gmail.com
    - Facebook: https://www.facebook.com/taing2502/
    - LinkedIn: https://www.linkedin.com/in/yuitc/
    - HuggingFace: https://huggingface.co/YuITC
    - Phone: +84 945 409 269

---

## 3. PERSONAL INFO (USE WHERE APPROPRIATE)

Name: Tai Nguyen Phu  
DOB: 25/02/2004  
Location: Ho Chi Minh, Vietnam

Summary:
"Aspiring AI Engineer specializing in LLM-powered systems, with a focus on Retrieval-Augmented Generation, agentic workflows, and model fine-tuning. Seeking to contribute to AI-driven product teams."

---

## 4. UI / UX REQUIREMENTS

### Theme

- Light Mode ONLY
- Style: Glassmorphism
  - Blur backgrounds
  - Semi-transparent cards
  - Soft shadows
  - Subtle borders

### Typography

- Strong, modern, technical feel
- Clear hierarchy (heading vs body)

### Color System

- Define a consistent design system:
  - Primary color
  - Accent color
  - Neutral tones

---

### Animations

- Smooth, premium motion (NO lag, NO jitter)
- Use:
  - Fade-in
  - Slide transitions
  - Micro-interactions (hover, click)
- Consider libraries:
  - Framer Motion / GSAP

---

## 5. FUNCTIONAL REQUIREMENTS

### Contact Form (REAL SUBMISSION)

Implement one of:

- Formspree
- EmailJS
- OR custom backend API

Must include:

- Validation
- Success / error feedback

---

### Performance

- Optimize loading
- Lazy load images/components if needed

---

### Code Quality

- Clean architecture
- Reusable components
- Modular structure
- Maintainable styling (Tailwind / CSS modules / styled-components)

---

## 6. ADVANCED VISUAL TUNING

- Customize design beyond template:
  - Unique color palette
  - Better spacing system
  - Strong visual identity
- Make it feel like:
  → AI Engineer portfolio (NOT generic developer template)

---

## 7. OUTPUT EXPECTATIONS

- Provide:
  1. Refactored component structure
  2. Updated UI implementation
  3. Suggested tech stack improvements (if needed)
  4. Code snippets for key parts:
     - Project modal
     - Skills UI
     - Contact form integration
  5. Design system (colors, typography)
  6. Optional: animation strategy

---

## 8. IMPORTANT NOTES

- Remove ALL irrelevant content from original repo
- Do NOT keep placeholder or dummy sections
- Ensure everything reflects AI/ML domain
- Prioritize clarity, elegance, and technical credibility

---

Now proceed to analyze the existing structure and implement the transformation.
