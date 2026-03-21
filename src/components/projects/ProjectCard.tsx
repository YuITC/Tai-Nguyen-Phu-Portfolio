"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Project } from "@/types";
import { LANGUAGE_COLORS } from "@/data/projects";
import GlassCard from "@/components/ui/GlassCard";
import Tag from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <GlassCard
      hover
      className="p-5 cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)] leading-snug">
          {project.name}
        </h4>
        <div className="flex items-center gap-1 shrink-0">
          {project.isPinned && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-highlight)] bg-[var(--color-highlight)]/10 px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
          {project.stargazers_count > 0 && (
            <span className="flex items-center gap-0.5 text-xs text-[var(--color-highlight)]">
              <Star size={12} fill="currentColor" />
              {project.stargazers_count}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] mb-3 line-clamp-2">
        {project.description || "No description available."}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        {project.language && (
          <Tag label={project.language} variant="language" color={LANGUAGE_COLORS[project.language]} />
        )}
        {project.categories.slice(0, 3).map((cat) => (
          <span key={cat} className="text-[10px] text-[var(--color-text-secondary)] bg-slate-100 px-2 py-0.5 rounded-full">
            {cat}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
