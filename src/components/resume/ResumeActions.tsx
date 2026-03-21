"use client";

import { motion } from "motion/react";
import { Download, Eye } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function ResumeActions() {
  return (
    <motion.div className="flex flex-wrap gap-3 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
      <a href={personalInfo.resumeUrl} download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
        <Download size={16} />
        Download Resume
      </a>
      <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-accent)] text-[var(--color-accent)] font-medium text-sm hover:bg-[var(--color-accent)]/10 transition-colors">
        <Eye size={16} />
        View Resume
      </a>
    </motion.div>
  );
}
