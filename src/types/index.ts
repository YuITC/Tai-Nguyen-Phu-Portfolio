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
  icon: string;
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
  icon: string;
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

export type TabName = "About" | "Education" | "Experience" | "Skills" | "Certifications" | "Projects" | "Blog" | "Contact";
