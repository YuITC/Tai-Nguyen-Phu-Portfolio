import { PersonalInfo, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Tai Nguyen Phu",
  title: "LLM & AI Agent Engineer",
  tagline:
    "Building reliable, context-aware AI systems—from grounded retrieval and agents to multimodal document intelligence.",
  dob: "February 25, 2004",
  location: "Ho Chi Minh, Vietnam",
  summary:
    "LLM and AI Agent Engineer specializing in reliable agentic RAG, multimodal document intelligence, and applied AI systems.",
  email: "tainguyenphu2502@gmail.com",
  phone: "+84 945 409 269",
  avatar: "/images/me.png",
  resumeUrl: "/resumes/2026-07-21.pdf",
  resumeViewUrl:
    "https://drive.google.com/file/d/1jtKPsenN--3jE13t8EkPA1wk_SoAwbt5/view?usp=drive_link",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/taingph2502", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/taingph2502/",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/taingph2502/",
    icon: "facebook",
  },
  {
    name: "HuggingFace",
    url: "https://huggingface.co/YuITC",
    icon: "huggingface",
  },
  { name: "Email", url: "mailto:tainguyenphu2502@gmail.com", icon: "mail" },
];

export const aboutText = [
  "I'm an AI engineer based in Ho Chi Minh City, specializing in LLM applications, agentic RAG, and multimodal document intelligence. I work across the full lifecycle—from data preparation and model adaptation to retrieval, evaluation, observability, and deployment—to turn research ideas into usable systems.",
  "I value measurable improvements, reproducible experiments, and explicit control over data, model behavior, and cost. Alongside my engineering work, I'm pursuing a Master of Computer Science at the University of Information Technology, VNU-HCM.",
];
