export const projects = [
  {
    id: 'proj-agentic-rag',
    title: ' Multimodal agentic RAG system for PDF documents',
    dateRange: 'May 2025 - July 2025',
    types: ['NLP', 'LLM', 'Agent', 'RAG', 'Multimodal', 'App'],
    description: 'An Agentic RAG system that enhances traditional RAG by enabling multimodal PDF analysis. It processes not only text but also images, tables, and combined queries that mix visual and textual information. The architecture integrates LangGraph for intelligent agentic reasoning, Docling for deep PDF understanding, and Milvus for hybrid search with improved retrieval accuracy. A user-friendly web interface ensures smooth interaction. The system is designed for researchers, data scientists, and developers who require intelligent document analysis and question answering across large PDF collections containing diverse content.',
    technologies: ['LangChain', 'LangGraph', 'Docling', 'Milvus', 'Attu', 'Docker', 'OpenAI', 'HuggingFace', 'PIL', 'OpenCV', 'PyTorch', 'Flask'],
    repo: 'https://github.com/YuITC/Agentic-RAG',
    demo: '',
    visuals: ['./assets/prj/nlp_agentic_rag.png'],
    details: [
      'Designed and implemented an end-to-end Agentic RAG workflow with LangGraph, building modular nodes for generation, retrieval, analysis, rewriting, and synthesis.',
      'Engineered a multimodal PDF ingestion pipeline leveraging OpenAI Vision and Docling to enable structured extraction and intelligent querying across text and images.',
      'Integrated Milvus vector store with BM25 hybrid retrieval and BGE-M3 embeddings, orchestrated and monitored via Docker and Attu for scalable deployment.',
      'Enhanced transparency and multi-turn interaction by implementing conversational memory and detailed agent step tracing within the workflow.',
      'Delivered a Flask-based web application supporting PDF/image uploads, model selection, real-time workflow visualization, and an interactive chat interface.'
    ]
  },
  {
    id: 'proj-legal-doc-retrieval',
    title: 'Vietnamese legal document semantic retrieval system',
    dateRange: 'Mar 2025 - Apr 2025',
    types: ['NLP', 'LLM', 'Retrieval', 'Fine-tuning', 'App'],
    description: 'A semantic retrieval system for Vietnamese legal documents using Sentence Transformers, fine-tuned on custom data and evaluated with MTEB, supporting scalable vector search via FAISS.',
    technologies: ['Python', 'PyTorch', 'SentenceTransformers', 'MTEB', 'Accelerate', 'Gradio', 'Docker', 'Pandas', 'FAISS'],
    repo: 'https://github.com/YuITC/Vietnamese-Legal-Doc-Retrieval',
    demo: 'https://huggingface.co/spaces/YuITC/Vietnamese-Legal-Doc-Retrieval',
    visuals: ['./assets/prj/nlp_legal_doc_retrieval.png'],
    details: [
      'Fine-tuned a multilingual SBERT model on a corpus of 100K+ Vietnamese legal documents using MNR and advanced batch sampling strategies, enhancing semantic retrieval performance for domain-specific queries.',
      'Attained strong benchmark results with NDCG@10 of 60.4% and MAP@10 of 53.6% on MTEB (BKAI Legal Retrieval), demonstrating effectiveness in legal information retrieval tasks.',
      'Built a complete pipeline encompassing data preprocessing, contrastive fine-tuning, task-specific MTEB evaluation, and deployment workflows.',
      'Engineered a FAISS-based retrieval system with an interactive Gradio interface, enabling efficient semantic search and user accessibility.',
      'Containerized the entire system with Docker to ensure reproducibility, portability, and seamless deployment across environments.'
    ]
  },
  // {
  //   id: 'proj-face-attendance',
  //   title: 'Real-time face attendance system with ArcFace and transfer learning technique',
  //   dateRange: 'Apr 2025 - May 2025',
  //   types: ['Computer Vision', 'Application', 'Face Recognition', 'CNN', 'Fine-tuning'],
  //   description: 'A real-time Face Attendance application using Transfer Learning technique with ResNet, ArcFace, designed as a production-ready web application system for small-scale deployments.',
  //   technologies: ['Python', 'PyTorch', 'ArcFace', 'CNNs', 'OpenCV', 'MTCNN', 'FAISS', 'Numpy', 'Flask', 'SQLite'],
  //   repo: '#',
  //   demo: '',
  //   visuals: ['./assets/prj/cv_face_attendance.png'],
  //   details: [
  //     'Developed a Face Attendance System leveraging MTCNN for face detection and image data augmentation, enhancing model robustness in real-world conditions.',
  //     'Implemented transfer learning on ResNet50d to extract 128-dimensional face embeddings, and trained with ArcFace loss for superior inter-class discrimination.',
  //     'Achieved 80% accuracy and 0.88 AUC on the LFW benchmark dataset, demonstrating strong model generalization and reliability.',
  //     'Built a real-time face search engine using FAISS with sliding-window voting, improving video-based recognition accuracy in live environments.',
  //     'Designed and deployed a Flask-based web application with MVC architecture, SQLite database, user authentication, and role-based access control for attendance management.'
  //   ]
  // },
  {
    id: 'proj-style-transfer',
    title: 'Real-time neural style transfer application with pretrain style',
    dateRange: 'Mar 2025',
    types: ['CV', 'DL', 'CNN', 'Style Transfer', 'App'],
    description: 'A real-time neural style transfer application using feed-forward networks and OpenCV, deployed with Streamlit.',
    technologies: ['Python', 'PyTorch', 'VGG', 'TransformerNet', 'OpenCV', 'Numpy', 'Streamlit'],
    repo: 'https://github.com/YuITC/Realtime-Style-Transfer',
    demo: 'https://realtime-style-transfer.streamlit.app/',
    visuals: ['./assets/prj/cv_style_transfer.png'],
    details: [
      'Engineered a real-time neural style transfer system using a lightweight feed-forward CNN trained on MS-COCO and fine-tuned with artistic styles (e.g., Monet, Van Gogh).',
      'Integrated OpenCV for live webcam streaming and real-time frame processing, enabling seamless artistic transformation on video feeds.',
      'Deployed the application via Streamlit, delivering an interactive web interface with instant style switching and high-quality preview rendering.',
      'Implemented frame-by-frame normalization, resizing, and transformation pipelines to ensure consistent visual fidelity across diverse devices and resolutions.',
      'Optimized inference performance for low-latency style transfer, achieving smooth real-time rendering without compromising output quality.'
    ]
  },
  {
    id: 'proj-scene-text-ocr',
    title: 'Scene text recognition system with YOLOv11m and CRNN',
    dateRange: 'Feb 2025 - Mar 2025',
    types: ['CV', 'DL', 'OCR', 'CNN', 'App'],
    description: 'A scalable OCR system using YOLOv11m and CRNN with CTC loss, deployed via FastAPI + Ray Serve, supporting real-time OCR with GPU acceleration and an interactive Streamlit UI.',
    technologies: ['Python', 'PyTorch', 'YOLOv11m', 'OpenCV', 'CRNN', 'Scikit-learn', 'FastAPI', 'Ray Serve', 'Streamlit'],
    repo: 'https://github.com/YuITC/Scene-Text-Recognition',
    demo: 'https://scene-text-recognition.streamlit.app/',
    visuals: ['./assets/prj/cv_ocr.png'],
    details: [
      'Built a Scene Text Recognition pipeline integrating YOLOv11m for text detection and CRNN (ResNet34) for recognition, achieving ~88% precision on the ICDAR2003 benchmark.',
      'Designed and deployed a scalable OCR API with FastAPI and Ray Serve, supporting autoscaling, GPU acceleration, and real-time text extraction.',
      'Implemented CTC loss and transformer-based text sequence modeling to improve recognition accuracy in natural scene images.',
      'Developed an interactive Streamlit application for instant OCR from image uploads or URLs, enhancing usability and accessibility.',
      'Optimized the end-to-end pipeline for low-latency inference, ensuring robust performance in high-throughput production environments.'
    ]
  },
  {
    id: 'proj-ds-salary-prediction',
    title: 'Glassdoor 2024 data science job salary prediction',
    dateRange: 'Dec 2024 - Jan 2025',
    types: ['Data Science', 'ML', 'LLM', 'Prompt Engineering', 'Fine-tuning'],
    description: 'This project predicts data science job salaries using 2024 Glassdoor data with both traditional machine learning and large language models (LLMs). It offers a comparison of predictive methods, helping professionals, recruiters, and researchers analyze salary trends. By incorporating job-related features, the project tackles the challenge of accurate salary estimation while exploring LLMs in regression tasks. An interactive Streamlit app delivers accessible predictions for technical and non-technical users alike, making it a practical tool for understanding compensation patterns in the data science field.',
    technologies: [`Selenium`, `Pandas`, `NumPy`, `Scikit-learn`, `XGBoost`, `Optuna`, `PyTorch`, `Transformers`, `PEFT (QLoRA)`, `SFT`, `OpenAI SDK`, `Hugging Face`, `Weights & Biases`],
    repo: 'https://github.com/YuITC/2024-DataScience-Salaries-Analysis',
    demo: '',
    visuals: ['./assets/prj/ds_dsjob_pred.png'],
    details: [
      'Crawled 2024 Glassdoor Data Science jobs and performed comprehensive preprocessing, EDA, and feature engineering.',
      'Achieved R² = 0.82 using XGBoost, significantly outperforming the Linear Regression baseline (R² = 0.71).',
      'Enhanced XGBoost predictive performance and robustness through advanced hyperparameter tuning with Optuna.',
      'Experimented with LLM-based regression approaches via few-shot prompting with OpenAI\'s GPT-5 SDK and supervised fine-tuning (SFT + QLoRA) with LLaMA 3.1.',
      'Benchmarked model performance across traditional ML, few-shot LLMs, and fine-tuned LLMs; built a salary prediction Streamlit app based on the three modeling approaches.'
    ]
  },
  {
    id: 'proj-dpr',
    title: 'Dense passage retrieval for open-domain QA',
    dateRange: 'Dec 2024 - Jan 2025',
    types: ['NLP', 'LLM', 'Retrieval', 'QA', 'Research'],
    description: 'PyTorch reimplementation of the paper "Dense Passage Retrieval for Open-Domain Question Answering" with modular design, low GPU optimization (T4), and accuracy improvements over the original paper for enhanced usability and performance.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'Accelerate', 'FAISS', 'Numpy', 'Pandas', 'Matplotlib'],
    repo: 'https://github.com/YuITC/Dense-Passage-Retrieval',
    demo: '',
    visuals: ['./assets/prj/nlp_dpr.png'],
    details: [
      'Developed a modular dense passage retrieval system using dual-encoder Transformers (Hugging Face), enabling high-accuracy semantic search across large-scale QA datasets.',
      'Improved top-k retrieval accuracy by ~1% over the original DPR baseline through custom training strategies and encoder tuning.',
      'Integrated FAISS for efficient vector indexing and similarity search, supporting low-latency, scalable inference under constrained GPU memory.',
      'Optimized training/inference on 16GB NVIDIA T4 GPU using mixed precision (FP16), dynamic batching, and memory-efficient PyTorch data pipelines.',
      'Report: https://github.com/YuITC/Dense-Passage-Retrieval/blob/Main/Report.pdf'
    ]
  },
];
