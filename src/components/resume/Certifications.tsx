"use client";

import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { certificationEntries } from "@/data/certifications";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Certifications() {
  return (
    <div>
      <SectionTitle title="Certifications" icon={Award} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificationEntries.map((cert, i) => (
          <GlassCard key={`${cert.name}-${cert.date}`} hover className="p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--color-text-primary)] leading-snug">{cert.name}</h4>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{cert.provider}</p>
                <span className="text-xs text-[var(--color-accent)] font-medium">{cert.date}</span>
              </div>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors shrink-0" aria-label={`View ${cert.name} certificate`}>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
