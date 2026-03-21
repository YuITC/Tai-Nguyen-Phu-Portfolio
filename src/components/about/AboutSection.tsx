"use client";

import { motion } from "motion/react";
import { BrainCircuit, Bot, FlaskConical } from "lucide-react";
import { aboutText } from "@/data/personal";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: BrainCircuit,
    title: "LLM & RAG Systems",
    description:
      "Building production-ready retrieval-augmented generation pipelines with adaptive retrieval and self-correcting mechanisms.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Designing autonomous agents with tool use, multi-step reasoning, and self-correction capabilities.",
  },
  {
    icon: FlaskConical,
    title: "ML Research",
    description:
      "Exploring optimization techniques for language models including fine-tuning, prompt engineering, and DSPy.",
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
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
          About Me
        </h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
