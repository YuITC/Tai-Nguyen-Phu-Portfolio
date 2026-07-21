"use client";

import { motion } from "motion/react";
import { Bot, Search, ScanText, Workflow, User } from "lucide-react";
import { aboutText } from "@/data/personal";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: Bot,
    title: "LLM & Agentic Systems",
    description:
      "I design stateful LLM workflows with routing, tool use, structured outputs, observability, and recovery paths so agent behavior can be inspected and improved.",
  },
  {
    icon: Search,
    title: "Retrieval & Grounding",
    description:
      "I build hybrid sparse-dense retrieval, reranking, citation grounding, and evaluation pipelines for domain-specific RAG systems.",
  },
  {
    icon: ScanText,
    title: "Multimodal Document AI",
    description:
      "I train and integrate OCR, vision-language models, layout analysis, and computer vision pipelines that turn complex documents and images into reliable structured data.",
  },
  {
    icon: Workflow,
    title: "Applied AI Engineering",
    description:
      "I take models from experiment to product through reproducible training, FastAPI services, local or GPU inference, and human-in-the-loop review workflows.",
  },
];

export default function AboutSection() {
  return (
    <section>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SectionTitle title="About Me" icon={User} />
      </motion.header>

      <motion.div
        className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {aboutText.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </motion.div>

      <SectionTitle title="What I'm Doing" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <GlassCard
            key={service.title}
            hover
            className="p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          >
            <service.icon
              size={32}
              className="text-[var(--color-accent)] mb-3"
            />
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)] mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {service.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
