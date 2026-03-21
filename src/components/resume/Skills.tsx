"use client";

import { motion } from "motion/react";
import { Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Tag from "@/components/ui/Tag";

export default function Skills() {
  return (
    <div>
      <SectionTitle title="Skills" icon={Wrench} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, i) => (
          <GlassCard key={category.name} className="p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-accent)] mb-3">{category.name}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <motion.div key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: i * 0.1 + j * 0.03 }}>
                  <Tag label={skill} variant="skill" />
                </motion.div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
