# I - Identity

## Personal Information

- Name: Tai Nguyen Phu
- Role: LLM & AI Agent Engineer
- Tagline: Building reliable, context-aware AI systems—from grounded retrieval and agents to multimodal document intelligence.
- Avatar: https://drive.google.com/file/d/1JQaXpcqruW_UrJuMT4kIkg2Qpb5qfh6D/view?usp=drive_link
- Birthday: February 25, 2004
- Location: Ho Chi Minh, Vietnam

## Contact Information

- Phone: +84 945 409 269
- Email: tainguyenphu2502@gmail.com
- GitHub: https://github.com/taingph2502
- LinkedIn: https://www.linkedin.com/in/taingph2502/
- Hugging Face: https://huggingface.co/YuITC
- Facebook: https://www.facebook.com/taingph2502/

### Resume

- Drive: https://drive.google.com/file/d/1uEOY2r_J7MEOVzUDr1Y9EfEd0hj-jfX6/view?usp=drive_link

# II - About

## About Me

I'm an AI engineer based in Ho Chi Minh City, specializing in LLM applications, agentic RAG, and multimodal document intelligence. I work across the full lifecycle—from data preparation and model adaptation to retrieval, evaluation, observability, and deployment—to turn research ideas into usable systems.

I value measurable improvements, reproducible experiments, and explicit control over data, model behavior, and cost. Alongside my engineering work, I'm pursuing a Master of Computer Science at the University of Information Technology, VNU-HCM.

## What I'm Doing

### LLM & Agentic Systems

I design stateful LLM workflows with routing, tool use, structured outputs, observability, and recovery paths so agent behavior can be inspected and improved.

### Retrieval & Grounding

I build hybrid sparse-dense retrieval, reranking, citation grounding, and evaluation pipelines for domain-specific RAG systems.

### Multimodal Document AI

I train and integrate OCR, vision-language models, layout analysis, and computer vision pipelines that turn complex documents and images into reliable structured data.

### Applied AI Engineering

I take models from experiment to product through reproducible training, FastAPI services, local or GPU inference, and human-in-the-loop review workflows.

# III - Education

### **Master of Computer Science**

_University of Information Technology — VNUHCM | Dec 2025 — Present_

- GPA: 3.5/4.0

### **Bachelor of Computer Science**

_University of Information Technology — VNUHCM | Sep 2022 — Sep 2025_

- GPA: 3.5/4.0
- Graduated with honors (very good)
- Kaggle Competition: "Home Credit — Credit Risk Model Stability"
- UIT Global Scholarship

### **High School Diploma**

_Le Khiet High School for the Gifted | Sep 2019 — Jun 2022_

- GPA: 3.5/4.0
- Graduated with honors (very good)
- First Prize — Provincial Informatics Competition for Excellent Students
- Second Prize — Provincial Youth Informatics Competition
- First Prize — City-level Informatics Competition for Excellent Students
- First Prize — School-level Informatics Competition for Excellent Students
- Student in the Specialized Computer Science Class

# IV - Experience

### **Junior AI Engineer**

_724SOFTWARE | Mar 2026 — Jun 2026 | Contract | Remote_

- Engineered core components of an education-focused agentic RAG system using LangGraph, with dynamic routing across learning materials and structured databases; used Langfuse traces to diagnose retrieval, latency, and failure patterns.
- Developed OCR and layout-understanding pipelines for 70,000+ educational document images, spanning VLM fine-tuning, layout preprocessing, and vLLM inference serving.
- Designed a weighted, polygon-aware fusion algorithm for multi-model text detection, improving bounding-box F1 by 5-10% on complex document layouts.

### **AI Engineer Intern**

_CoverGo | Sep 2025 — Feb 2026 | Internship | On-site_

- Improved internal RAG reliability by redesigning structured prompts and integrating citation-grounded Gemini workflows, reducing unsupported and hallucinated responses.
- Built a DSPy-based prompt optimization pipeline evaluated on 1,000 synthetic product-data cases, reducing manual tuning for the engineering team.

### **Undergraduate Research Assistant**

_University of Information Technology | Sep 2024 — Feb 2025 | On-site_

- Evaluated LoRA and QLoRA across downstream NLP tasks, identifying trade-offs in convergence stability, GPU memory usage, and domain-adaptation performance.
- Built reproducible fine-tuning pipelines with controlled hyperparameter experiments, enabling systematic selection of PEFT configurations for resource-constrained model adaptation.

# V - Skills

- **Programming:** Python, C/C++, SQL, FastAPI, Git, Linux, Qdrant, Elasticsearch, PostgreSQL, OOP, SOLID
- **Machine Learning:** PyTorch, Transformers, Scikit-learn, Pandas, Numpy, SciPy, XGBoost, GANs
- **NLP/Computer Vision:** LangChain, LangGraph, PEFT, Unsloth, SFT, DSPy, ONNX, OpenCV, YOLO, SAM, Paddle, vLLM
- **MLOps:** Docker, Langfuse, MLflow, Weights & Biases, GitHub Actions, PyTest

# VI - Projects

### Manga Scanlation Workspace

https://github.com/taingph2502/manga-scanlation-workspace

May 2026 - Jul 2026

A local-first production workspace for translating Japanese manga into Vietnamese or English while keeping every AI-generated artifact editable, reviewable, and traceable.

_FastAPI, PyTorch, Transformers, PaddleOCR-VL, SFT, ONNX Runtime, Ollama, SQLite_

- Architected a local-first, human-in-the-loop AI platform that unifies region detection, OCR, contextual LLM translation, inpainting, typesetting, review, and export in one revisioned workflow.
- Fine-tuned PaddleOCR-VL on 21,000 Manga109 images via SFT, raising Japanese Exact Match from 9.2% to 65.9% and lowering Character Error Rate from 55.4% to 9.1%.
- Built context-aware LLM translation with speaker relationships, glossaries, and translation memory, preserving cross-panel narrative consistency.

### Meta-Agentic RAG | Adaptive Multi-Hop QA Research System

https://github.com/taingph2502/meta-agentic-rag

Mar 2026 - Jul 2026

A research-oriented multi-hop QA system that lets a RAG agent diagnose weak answers and selectively retrieve or rewrite before returning a final response.

_LangGraph, Qdrant, Elasticsearch, PostgreSQL, DeepSeek, Docker, FastAPI_

- Built a self-correcting agentic RAG pipeline in LangGraph, improving multi-hop QA F1 on 2WikiMultiHopQA from 25.2% to 70.3% via automated failure diagnosis and re-retrieval.
- Designed a hybrid sparse-dense retrieval pipeline (Qdrant + Elasticsearch) with cross-encoder reranking and citation grounding to reduce unsupported answers.
- Implemented cost-aware LLM routing to flag low-quality generations and trigger targeted remediation, balancing accuracy against latency and API cost.

### MangaTrans-CLI

https://github.com/taingph2502/MangaTrans-CLI

Apr 2026 - May 2026

A command-line manga translation pipeline designed for automated batch processing on consumer GPUs, from raw pages to cleaned and typeset output.

_PyTorch, OpenCV, YOLO, Ollama, Qwen, PaddleOCR-VL, SFT_

- Developed an asynchronous end-to-end manga translation pipeline covering text detection, OCR, image inpainting, translation, and text rendering with GPU-accelerated processing.
- Fine-tuned PaddleOCR-VL on 21,000 Manga109 images via SFT, raising Japanese Exact Match from 9.2% to 65.9% and lowering Character Error Rate from 55.4% to 9.1%.
- Built a VRAM-aware runtime manager and local LLM translation workflow with Ollama and Qwen 3.5, dynamically scaling image resolution and preserving cross-panel narrative consistency.

### Vietnamese Legal RAG System

https://github.com/taingph2502/Vietnamese-Legal-RAG-System

Apr 2025 - Apr 2025

An end-to-end experimental RAG system for answering Vietnamese legal questions with domain-adapted retrieval, evidence reranking, grounded generation, and citation-focused evaluation.

_PyTorch, Transformers, Sentence Transformers, FAISS, BM25, RRF, Unsloth, TRL_

- Built a domain-specific RAG experimentation pipeline over 230,000 cleaned Vietnamese legal passages, spanning preprocessing, retrieval, generator fine-tuning, and multi-layer evaluation.
- Fine-tuned a Vietnamese bi-encoder and BGE cross-encoder reranker, combining dense retrieval with BM25 through RRF to raise recall@10 from 61.5% to 87.5%.
- Designed a citation-oriented Gemma 4 LoRA pipeline and evaluation suite covering BERTScore, citation precision and recall, and RAGAS faithfulness and relevance metrics.

### NovelVerse AI

https://github.com/taingph2502/Novel-Verse-AI

Feb 2026 - Mar 2026

A self-hosted reading companion that turns Chinese web novels into a searchable Vietnamese library enriched with structured story knowledge and character-aware AI experiences.

_Next.js, TypeScript, React, Supabase, PostgreSQL, pgvector, DeepSeek, Gemini_

- Built a self-hosted Chinese-to-Vietnamese novel reading platform that crawls source sites, translates chapters, manages a personal library, synthesizes audio, and exports EPUB3.
- Engineered resumable crawl and translation jobs with layered anti-bot fallbacks, SSE progress streaming, pause, resume, cancel, and retry controls, and pre-run cost estimation.
- Extracted timelines, characters, and terminology into structured knowledge, then used pgvector-backed retrieval for semantic lore search, adaptive story Q&A, and grounded character chat.

### Carotid Artery Atherosclerosis Detection

https://github.com/taingph2502/carotid-artery-atherosclerosis-detection

May 2026 - Jul 2026

_PyTorch, Torchvision, EfficientNet, Scikit-learn, Pandas, NumPy, Pillow, Matplotlib, Grad-CAM_

An explainable multimodal deep learning system that combines carotid ultrasound images and clinical biomarkers for patient-level plaque detection, auxiliary risk modeling, and visual interpretation.

- Architected a PyTorch multimodal pipeline that fused EfficientNet-B0 ultrasound embeddings with an MLP over 8–9 clinical variables using gated fusion across 300 patients and 680 images.
- Engineered patient-level mean pooling, focal/masked multi-task losses, and patient-disjoint stratified 5-fold cross-validation, reporting 0.8881 ± 0.1236 mean AUC-ROC for plaque detection.
- Built patient-level Grad-CAM explanations that generated per-image heatmap overlays while preserving multi-image context, enabling visual inspection of evidence behind individual predictions.

### AI News Aggregator

https://github.com/taingph2502/ai-news-aggregator

Jan 2026 - Feb 2026

_OpenAI, Pydantic, RSS, Docling, PostgreSQL, Docker_

An automated AI news briefing system that aggregates multi-source updates, generates concise technical summaries, ranks them by reader relevance, and emails a curated digest.

- Engineered an end-to-end Python pipeline that collects OpenAI/Anthropic RSS and YouTube updates, enriches web pages with Docling and video transcripts, and delivers personalized AI briefings via SMTP.
- Developed structured LLM workflows with the OpenAI Responses API and Pydantic schemas to generate source-constrained technical summaries, rank relevance against configurable reader profiles, and produce tailored email introductions.
- Designed replaceable source, storage, AI, and delivery layers with PostgreSQL idempotency, duplicate model-call prevention, retryable page enrichment, and stage-level JSON reports for repeatable batch execution.

### 2024 Data Science Salaries Analysis

https://github.com/taingph2502/2024-DataScience-Salaries-Analysis

Feb 2025 - May 2025

A comparative salary-prediction study that evaluates traditional tabular models and LLM-based regression on real-world 2024 data science job listings.

_Python, Pandas, scikit-learn, XGBoost, Optuna, PyTorch, Transformers, QLoRA, Streamlit_

- Built an end-to-end salary prediction study from 2024 Glassdoor job data, covering Selenium-based collection, preprocessing, exploratory analysis, feature engineering, modeling, and deployment.
- Tuned XGBoost with Optuna to reach R² = 0.82, outperforming a Linear Regression baseline at R² = 0.71.
- Benchmarked tabular machine learning against few-shot LLM regression and a QLoRA-fine-tuned Llama 3.1 model, then exposed all three approaches through an interactive Streamlit application.

### Real-time Face Recognition

https://github.com/taingph2502/Real-time-Face-Recognition

Apr 2025 - May 2025

A lightweight webcam application for enrolling, indexing, and recognizing known identities in real time using learned face embeddings.

_PyTorch, timm, MTCNN, FAISS, OpenCV_

- Implemented a command-line workflow for webcam face enrollment, detection, gallery management, and real-time recognition.
- Designed a 128-dimensional, L2-normalized embedding model with a ResNet50d backbone and indexed gallery vectors in FAISS for cosine-similarity search.
- Reduced frame-level prediction flicker with a configurable similarity threshold and sliding 5-of-7-frame voting, while supporting identity addition, removal, and index rebuilding.

### Scene Text Recognition

https://github.com/taingph2502/Scene-Text-Recognition

Mar 2025 - Mar 2025

A deployable OCR pipeline for detecting and recognizing text in natural-scene images through a modular training, API, and web-interface workflow.

_PyTorch, YOLOv11, CRNN, CTC, FastAPI, Ray Serve, Streamlit_

- Built a two-stage OCR pipeline that combines YOLOv11m text detection with ResNet34-backed CRNN recognition and CTC sequence decoding.
- Trained and fine-tuned the models on ICDAR2003, recording detector precision of 0.881, recall of 0.905, and mAP@0.5 of 0.925 on the reported validation run.
- Served modular detection and OCR APIs with FastAPI and Ray Serve, paired with a Streamlit interface for GPU-accelerated inference.

### Dense Passage Retrieval

https://github.com/taingph2502/Dense-Passage-Retrieval

Jan 2025 - Mar 2025

A compact, reproducible PyTorch implementation of Dense Passage Retrieval for learning and benchmarking open-domain document retrieval on Natural Questions.

_PyTorch, Transformers, FAISS_

- Reimplemented a streamlined DPR dual-encoder retrieval pipeline over the Natural Questions dataset and the December 2018 English Wikipedia snapshot.
- Achieved 79.1% top-20 and 86.0% top-100 retrieval accuracy in the repository evaluation, compared with 78.4% and 85.4% reported by the original paper.
- Packaged pretrained query and document encoders with reproducible embedding and FAISS retrieval entry points; generated embeddings in 15 hours and built and searched the index in 7 minutes 27 seconds on two NVIDIA T4 GPUs.

# VII - Certifications

### Applications of AI for Anomaly Detection

_NVIDIA | Mar 2026_

https://drive.google.com/file/d/1vsKy74spWcGNh7Qscad3LO6xMUkRxslH/view?usp=drive_link

### **IELTS — International English Language Testing System**

_IDP Education Ltd | Oct 2025_

https://drive.google.com/file/d/127eHIz2o6ZOsf4o4nm9XrhAABMKuYtEc/view?usp=drive_link

### Natural Language Processing Specialization

_DeepLearning.AI | Aug 2025_

https://drive.google.com/file/d/1MZ3K403TCrj53htyL7i-IYyO7Yo_RKmT/view?usp=drive_link

### Deep Learning Specialization

_DeepLearning.AI | Aug 2025_

https://drive.google.com/file/d/1BqZqXw1T2_3IAIUYBwxI7941zhgqQyAl/view?usp=drive_link

### Machine Learning Specialization

_DeepLearning.AI | Jul 2025_

https://drive.google.com/file/d/1GBkf0NulgZwU1f8MrKLs3rDKXoZlEFe5/view?usp=drive_link

### Problem Solving Using Computational Thinking

_Coursera | Jun 2024_

https://drive.google.com/file/d/1LEBrhZtYyzz1L9Yh2nFA6cPdxVwH_U4g/view?usp=drive_link

### IELTS — International English Language Testing System

_British Council | Mar 2022_

https://drive.google.com/file/d/1XKpMSHnzu5v5KgajIXiENKpwqI2Rn8ft/view?usp=drive_link

# VIII - Social Activities

### Green Summer Volunteer Campaign of UIT Students' Union

_Member | Jul 2023 — Aug 2023_

- Co-organized interactive technology fairs to introduce modern IT applications to local school students.
- Provided free computer repair and technical assistance services to support local residents throughout the campaign.

### Study Board of Software Engineering

_English Team Member | Sep 2022 — Feb 2023_

- Co-organized internal training sessions and final exam review workshops for students.

### CS-UIT AI Club

_Member | Sep 2022 — Feb 2023_

- Researched and presented key AI academic papers during club seminars to broaden technical knowledge.
- Participated in AI competitions to apply theoretical concepts into solving practical, data-driven problems.

### Class Youth Union Committee

_Committee Member | Sep 2022 — Feb 2023_

- Assisted in planning and organizing class-level academic, cultural, and volunteering events.
- Served as the primary liaison between the Faculty and the class to streamline communication and increase event participation.

# IX - Contact

### Let's Build Reliable AI Systems

Have a role, project, or research idea involving LLM agents, RAG, or multimodal document AI? Email me at [tainguyenphu2502@gmail.com](mailto:tainguyenphu2502@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/taingph2502/).
