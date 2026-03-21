"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { educationEntries } from "@/data/education";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Education() {
  return (
    <div>
      <SectionTitle title="Education" icon={GraduationCap} />
      <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
        {educationEntries.map((entry, i) => (
          <motion.div
            key={i}
            className="flex gap-4 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0 relative z-10">
              <Image
                src={entry.logo}
                alt={entry.institution}
                width={40}
                height={40}
                className="object-contain w-full h-full p-1"
              />
            </div>
            <div className="flex-1 pb-4">
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)]">
                {entry.degree}
              </h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {entry.institution}
              </p>
              <span className="text-xs text-[var(--color-accent)] font-medium">
                {entry.period}
              </span>
              {entry.gpa && (
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  GPA: {entry.gpa}
                </p>
              )}
              {entry.achievements && (
                <ul className="mt-2 space-y-1">
                  {entry.achievements.map((ach, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
