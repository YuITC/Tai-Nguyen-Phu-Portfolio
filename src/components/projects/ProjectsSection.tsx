"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { FolderGit2, Terminal } from "lucide-react";
import { Project } from "@/types";
import { CATEGORIES, type CategoryName } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryName>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [projects, activeCategory]);

  const pinnedProjects = filteredProjects.filter((p) => p.isPinned);
  const otherProjects = filteredProjects.filter((p) => !p.isPinned);

  return (
    <section>
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <SectionTitle title="Projects" icon={Terminal} />
      </motion.header>

      <motion.div className="flex flex-wrap gap-2 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
        {CATEGORIES.map((category) => (
          <Tag key={category} label={category} variant="category" active={activeCategory === category} onClick={() => setActiveCategory(category)} />
        ))}
      </motion.div>

      {pinnedProjects.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FolderGit2 size={16} className="text-[var(--color-highlight)]" />
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Featured</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pinnedProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} onClick={() => setSelectedProject(project)} index={i} />
            ))}
          </div>
        </div>
      )}

      {otherProjects.length > 0 && (
        <div>
          {pinnedProjects.length > 0 && (
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-4">All Projects</h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} onClick={() => setSelectedProject(project)} index={i} />
            ))}
          </div>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <p className="text-center text-[var(--color-text-secondary)] py-12">No projects found in this category.</p>
      )}

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
