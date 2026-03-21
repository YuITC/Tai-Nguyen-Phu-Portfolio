"use client";

import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { LANGUAGE_COLORS } from "@/data/projects";
import Modal from "@/components/ui/Modal";
import Tag from "@/components/ui/Tag";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.name}>
      <div className="space-y-5">
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)]">
            {project.name}
          </h3>
          {project.language && (
            <div className="mt-1">
              <Tag label={project.language} variant="language" color={LANGUAGE_COLORS[project.language]} />
            </div>
          )}
        </div>

        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {project.description || "No description available."}
        </p>

        {project.categories.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {project.categories.map((cat) => (
                <Tag key={cat} label={cat} variant="skill" />
              ))}
            </div>
          </div>
        )}

        {project.topics.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Topics</h4>
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <span key={topic} className="text-xs text-[var(--color-text-secondary)] bg-slate-100 px-2 py-0.5 rounded-full">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-text-primary)] text-white text-sm font-medium hover:bg-slate-700 transition-colors">
            <Github size={16} />
            View on GitHub
          </a>
          {project.homepage && (
            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-medium hover:bg-[var(--color-accent)]/10 transition-colors">
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
