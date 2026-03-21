"use client";

import { motion } from "motion/react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import ResumeActions from "./ResumeActions";

export default function ResumeSection() {
  return (
    <section>
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">Resume</h2>
      </motion.header>
      <div className="space-y-10">
        <Education />
        <Experience />
        <Skills />
        <Certifications />
      </div>
      <ResumeActions />
    </section>
  );
}
