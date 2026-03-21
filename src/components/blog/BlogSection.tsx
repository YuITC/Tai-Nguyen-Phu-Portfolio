"use client";

import { motion } from "motion/react";
import { PenLine, BookOpen } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BlogSection() {
  return (
    <section>
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <SectionTitle title="Blog" icon={BookOpen} />
      </motion.header>

      <motion.div
        className="flex flex-col items-center justify-center py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="p-4 rounded-full bg-[var(--color-accent)]/10 mb-4">
          <PenLine size={32} className="text-[var(--color-accent)]" />
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-text-primary)] mb-2">
          Coming Soon
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-sm">
          I&apos;m working on sharing insights about AI engineering, RAG systems, and LLM applications. Stay tuned!
        </p>
      </motion.div>
    </section>
  );
}
