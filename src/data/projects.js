export const projects = [
  {
    id: 'proj-multimodal-rag',
    title: 'RAG chatbot with memory and multimodal-multilingual support',
    dateRange: 'May 2025 - July 2025',
    types: ['NLP', 'Application', 'RAG', 'LLM', 'Chatbot'],
    description: 'An RAG application that enables natural language conversations with any kind of PDF files, processing not just text, but also images, tables, and diagrams within it. By extracting, analyzing, and contextualizing diverse content elements, arXivRAG provides comprehensive answers to complex research questions that extend beyond simple text-based search.',
    technologies: ['Python', 'PyTorch', 'Unstructured', 'LangChain', 'Chroma', 'SentenceTransformers', 'FastAPI', 'arXiv API', 'Gemini API', 'Docker', 'AWS'],
    repo: 'https://github.com/YuITC/arXivRAG-Multimodal-Conversational-RAG-System',
    demo: '',
    visuals: ['/src/assets/prj/nlp_multimodal_rag.png'],
    details: [
      'Built a RAG system for scientific PDF files that enables multimodal processing capabilities on text, table, and image data.',
      'Designed a multilingual, multimodal retrieval pipeline using BGE-M3 embeddings and Chroma vector databases.',
      'Conducted prompt engineering with multi-turn prompts and scenario-based testing using the Gemini Model API.',
      "Implemented conversational memory management using LangChain's ConversationSummaryMemory, enabling context aware follow-up QA in chatbot interactions.",
      'Implemented a citation-aware abstractive QA mechanism, mapping answers to source documents with text-level references for verifiability.',
      'Developed an arXiv paper search engine, allowing dynamic retrieval of 150,000+ scientific publications in real-time.',
      'Containerized and deployed a FastAPI-based end-to-end web application on AWS EC2 and Hugging Face Spaces for reproducibility and scalability.'
    ]
  },
  {
    id: 'proj-face-attendance',
    title: 'Real-time face attendance system with ArcFace and transfer learning technique',
    dateRange: 'Apr 2025 - May 2025',
    types: ['Computer Vision', 'Application', 'Face Recognition', 'CNN', 'Fine-tuning'],
    description: 'A real-time Face Attendance application using Transfer Learning technique with ResNet, ArcFace, designed as a production-ready web application system for small-scale deployments.',
    technologies: ['Python', 'PyTorch', 'ArcFace', 'CNNs', 'OpenCV', 'MTCNN', 'FAISS', 'Numpy', 'Flask', 'SQLite'],
    repo: '#',
    demo: '',
    visuals: ['/src/assets/prj/cv_face_attendance.png'],
    details: [
      'Developed a Face Attendance System leveraging MTCNN for face detection and image data augmentation, enhancing model robustness in real-world conditions.',
      'Implemented transfer learning on ResNet50d to extract 128-dimensional face embeddings, and trained with ArcFace loss for superior inter-class discrimination.',
      'Achieved 80% accuracy and 0.88 AUC on the LFW benchmark dataset, demonstrating strong model generalization and reliability.',
      'Built a real-time face search engine using FAISS with sliding-window voting, improving video-based recognition accuracy in live environments.',
      'Designed and deployed a Flask-based web application with MVC architecture, SQLite database, user authentication, and role-based access control for attendance management.'
    ]
  },
  {
    id: 'proj-legal-doc-retrieval',
    title: 'Vietnamese legal document semantic retrieval system',
    dateRange: 'Mar 2025 - Apr 2025',
    types: ['NLP', 'Application', 'Retrieval', 'LLM', 'Fine-tuning'],
    description: 'A semantic retrieval system for Vietnamese legal documents using Sentence Transformers, fine-tuned on custom data and evaluated with MTEB, supporting scalable vector search via FAISS.',
    technologies: ['Python', 'PyTorch', 'SentenceTransformers', 'MTEB', 'Accelerate', 'Gradio', 'Docker', 'Pandas', 'FAISS'],
    repo: 'https://github.com/YuITC/Vietnamese-Legal-Doc-Retrieval',
    demo: 'https://huggingface.co/spaces/YuITC/Vietnamese-Legal-Doc-Retrieval',
    visuals: ['/src/assets/prj/nlp_legal_doc_retrieval.png'],
    details: [
      'Fine-tuned a multilingual SBERT model on a curated Vietnamese legal corpus to improve domain-specific retrieval accuracy.',
      'Achieved NDCG@10: 60.4% and MAP@10: 53.6% on the MTEB benchmark (BKAI Legal Retrieval dataset).',
      'Built a full semantic retrieval pipeline: data preprocessing, model fine-tuning (contrastive learning), evaluation using MTEB, and deployment.',
      'Implemented a GPU-accelerated FAISS index with approximately 100K documents for ANN search with sub-second latency.',
      'Deployed an end-user interface using Gradio, containerized via Docker for scalable and reproducible deployment.'
    ]
  },
  {
    id: 'proj-style-transfer',
    title: 'Real-time neural style transfer application with pretrain style',
    dateRange: 'Mar 2025',
    types: ['Computer Vision', 'Application', 'Style Transfer', 'CNN'],
    description: 'A real-time neural style transfer application using feed-forward networks and OpenCV, deployed with Streamlit.',
    technologies: ['Python', 'PyTorch', 'VGG', 'TransformerNet', 'OpenCV', 'Numpy', 'Streamlit'],
    repo: 'https://github.com/YuITC/Realtime-Style-Transfer',
    demo: 'https://realtime-style-transfer.streamlit.app/',
    visuals: ['/src/assets/prj/cv_style_transfer.png'],
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
    types: ['Computer Vision', 'Application', 'OCR', 'CNN'],
    description: 'A scalable OCR system using YOLOv11m and CRNN with CTC loss, deployed via FastAPI + Ray Serve, supporting real-time OCR with GPU acceleration and an interactive Streamlit UI.',
    technologies: ['Python', 'PyTorch', 'YOLOv11m', 'OpenCV', 'CRNN', 'Scikit-learn', 'FastAPI', 'Ray Serve', 'Streamlit'],
    repo: 'https://github.com/YuITC/Scene-Text-Recognition',
    demo: 'https://scene-text-recognition.streamlit.app/',
    visuals: ['/src/assets/prj/cv_ocr.png'],
    details: [
      'Built a Scene Text Recognition pipeline integrating YOLOv11m for text detection and CRNN (ResNet34) for recognition, achieving ~88% precision on the ICDAR2003 benchmark.',
      'Designed and deployed a scalable OCR API with FastAPI and Ray Serve, supporting autoscaling, GPU acceleration, and real-time text extraction.',
      'Implemented CTC loss and transformer-based text sequence modeling to improve recognition accuracy in natural scene images.',
      'Developed an interactive Streamlit application for instant OCR from image uploads or URLs, enhancing usability and accessibility.',
      'Optimized the end-to-end pipeline for low-latency inference, ensuring robust performance in high-throughput production environments.'
    ]
  },
  {
    id: 'proj-dpr',
    title: 'Dense passage retrieval for open-domain QA',
    dateRange: 'Dec 2024 - Jan 2025',
    types: ['NLP', 'Research', 'Retrieval', 'QA', 'LLM'],
    description: 'PyTorch reimplementation of the paper "Dense Passage Retrieval for Open-Domain Question Answering" with modular design, low GPU optimization (T4), and accuracy improvements over the original paper for enhanced usability and performance.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'Accelerate', 'FAISS', 'Numpy', 'Pandas', 'Matplotlib'],
    repo: 'https://github.com/YuITC/Dense-Passage-Retrieval',
    demo: '',
    visuals: ['/src/assets/prj/nlp_dpr.png'],
    details: [
      'Developed a modular dense passage retrieval system using dual-encoder Transformers (Hugging Face), enabling high-accuracy semantic search across large-scale QA datasets.',
      'Improved top-k retrieval accuracy by ~1% over the original DPR baseline through custom training strategies and encoder tuning.',
      'Integrated FAISS for efficient vector indexing and similarity search, supporting low-latency, scalable inference under constrained GPU memory.',
      'Optimized training/inference on 16GB NVIDIA T4 GPU using mixed precision (FP16), dynamic batching, and memory-efficient PyTorch data pipelines.',
      'Report: https://github.com/YuITC/Dense-Passage-Retrieval/blob/Main/Report.pdf'
    ]
  },
  {
    id: 'proj-ds-salary-prediction',
    title: 'Glassdoor 2024 data science job salary prediction',
    dateRange: 'Dec 2024 - Jan 2025',
    types: ['Data Science', 'Machine Learning', 'Application'],
    description: 'A salary prediction system for Data Science roles using XGBoost and Glassdoor 2024 data, featuring ML model comparison, hyperparameter tuning, and an interactive Streamlit app for predictions.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    repo: 'https://github.com/YuITC/2024-DataScience-Salaries-Analysis',
    demo: 'https://data-science-salary-predict.streamlit.app/',
    visuals: ['/src/assets/prj/ds_data_job_pred.png'],
    details: [
      'Developed a machine learning-powered salary prediction system trained on Glassdoor 2024 Data Science job listings.',
      'Conducted comprehensive EDA and feature engineering, including data preprocessing, categorical encoding, missing value imputation, and creation of interaction terms to capture complex salary dynamics.',
      'Achieved R² = 0.815 with XGBoost, significantly outperforming the baseline Linear Regression (R² = 0.7).',
      'Performed hyperparameter optimization via GridSearchCV to maximize model performance.',
      'Built and deployed an Streamlit web application with salary predictions feature based on user-provided job attributes.'
    ]
  }
];
