"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { experienceEntries } from "@/data/experience";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <div>
      <SectionTitle title="Experience" icon={Briefcase} />
      <div className="space-y-6">
        {experienceEntries.map((entry, i) => (
          <motion.div key={i} className="flex gap-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.15 }}>
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0">
              <Image src={entry.logo} alt={entry.company} width={40} height={40} className="object-contain w-full h-full p-1" />
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)]">{entry.role}</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">{entry.company}</p>
              <span className="text-xs text-[var(--color-accent)] font-medium">{entry.period}</span>
              <ul className="mt-2 space-y-1">
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
