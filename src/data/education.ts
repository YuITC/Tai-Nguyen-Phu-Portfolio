import { EducationEntry } from "@/types";

export const educationEntries: EducationEntry[] = [
  {
    degree: "Master of Computer Science",
    institution: "University of Information Technology — VNUHCM",
    logo: "/images/UIT.png",
    period: "Dec 2025 — Present",
    gpa: "3.5/4.0",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Information Technology — VNUHCM",
    logo: "/images/UIT.png",
    period: "Sep 2022 — Sep 2025",
    gpa: "3.5/4.0",
    achievements: [
      "Graduated with honors (very good)",
      'Kaggle Competition: "Home Credit — Credit Risk Model Stability"',
      "UIT Global Scholarship",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Le Khiet High School for the Gifted",
    logo: "/images/lekhiet.png",
    period: "Sep 2019 — Jun 2022",
    gpa: "3.5/4.0",
    achievements: [
      "Graduated with honors (very good)",
      "Second Prize — Provincial Informatics Competition for Excellent Students",
      "Second Prize — Provincial Youth Informatics Competition",
      "First Prize — City-level Informatics Competition for Excellent Students",
      "First Prize — School-level Informatics Competition for Excellent Students",
      "Student in the Specialized Computer Science Class",
    ],
  },
];
