"use client";

import { CalendarDays, Star } from "lucide-react";
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
      className="p-5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.displayName}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)] leading-snug">
          {project.displayName}
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

      <div className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)]">
        <CalendarDays size={14} aria-hidden="true" />
        <span>{project.period}</span>
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] mb-3 line-clamp-3">
        {project.description}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        {project.language && (
          <Tag label={project.language} variant="language" color={LANGUAGE_COLORS[project.language]} />
        )}
        {project.techStack.slice(0, 3).map((technology) => (
          <span key={technology} className="text-[10px] text-[var(--color-text-secondary)] bg-slate-100 px-2 py-0.5 rounded-full">
            {technology}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
