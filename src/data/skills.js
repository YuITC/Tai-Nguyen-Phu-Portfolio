export const skillCategories = [
    {
        id: 'ai-ml-dl',
        label: 'AI/ML/DL',
        groups: [
            { 
                name: 'Machine Learning', 
                tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost'] 
            },
            { 
                name: 'Deep Learning', 
                tools: ['PyTorch', 'TensorFlow', 'PyTorch Lightning', 'JAX'] 
            },
            { 
                name: 'Computer Vision', 
                tools: ['OpenCV', 'YOLO', 'Detectron2', 'Segment Anything'] 
            },
            { 
                name: 'Natural Language Processing', 
                tools: ['Hugging Face Tokenizers', 'Transformers', 'SpaCy', 'SentencePiece', 'tiktoken'] 
            },
            { 
                name: 'LLMs & Generative AI', 
                tools: ['SentenceTransformer', 'PEFT (LoRA, QLoRA)', 'Prompt Engineering'] 
            },
            { 
                name: 'Agentic & RAG Systems', 
                tools: ['LangChain', 'LangGraph', 'LangSmith', 'smolagents'] 
            },
            { 
                name: 'LLM Inference APIs', 
                tools: ['OpenAI API', 'Anthropic API', 'Groq API', 'Gemini API'] 
            }
        ]
    },
    {
        id: 'data-eng',
        label: 'Data Engineering',
        groups: [
            { 
                name: 'Data Manipulation & Analysis', 
                tools: ['NumPy', 'Pandas', 'Polars', 'PyArrow', 'Pydantic'] 
            },
            { 
                name: 'Data Visualization', 
                tools: ['Matplotlib', 'Seaborn', 'Plotly'] 
            },
            {
                name: 'Big Data (basic)',
                tools: ['Spark', 'Hadoop']
            },
            {
                name: 'Datastores & ETL (basic)',
                tools: ['MySQL', 'MongoDB', 'Firebase', 'Apache Airflow']
            },
            { 
                name: 'Vector Databases (basic)', 
                tools: ['FAISS', 'Chroma', 'Milvus', 'Weaviate', 'Pinecone'] 
            }
        ]
    },
    {
        id: 'soft-devops',
        label: 'Software Engineering, DevOps & MLOps',
        groups: [
            { 
                name: 'Programming Languages (Proficient)', 
                tools: ['Python', 'C/C++'] 
            },
            { 
                name: 'Programming Languages (Basic)', 
                tools: ['Bash', 'SQL', 'TypeScript/JavaScript', 'HTML', 'CSS'] 
            },
            { 
                name: 'Frameworks & API Development', 
                tools: ['FastAPI', 'Flask', 'Ray Serve'] 
            },
            { 
                name: 'Version Control & CI/CD', 
                tools: ['Git', 'GitHub', 'GitHub Actions'] 
            },
            { 
                name: 'Containerization & Cloud (basic)', 
                tools: ['Docker', 'Kubernetes', 'AWS'] 
            },
            { 
                name: 'MLOps & Experiment Tracking (basic)', 
                tools: ['Weights & Biases', 'MLflow'] 
            },
            { 
                name: 'IDE & Tools', 
                tools: ['VS Code', 'Visual Studio', 'Cursor', 'Jupyter Notebooks'] 
            },
            { 
                name: 'Operating Systems (basic)', 
                tools: ['Linux/Ubuntu', 'Windows'] 
            }
        ]
    },
    {
        id: 'core-soft',
        label: 'Core CS Knowledge & Professional Skills',
        groups: [
            { 
                name: 'Mathematics', 
                tools: ['Linear Algebra', 'Discrete Math', 'Calculus', 'Statistics & Probability'] 
            },
            { 
                name: 'CS Fundamentals', 
                tools: ['Data Structures & Algorithms', 'Design & Analysis of Algorithms', 'Computational Thinking'] 
            },
            { 
                name: 'Soft Skills', 
                tools: ['Critical Thinking', 'Problem Solving', 'Adaptability', 'Presentation', 'Teamwork', 'Collaboration'] 
            },
            { 
                name: 'Languages', 
                tools: ['English (IELTS 7.0)'] 
            }
        ]
    }
];
