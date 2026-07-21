"use client";

import { Users } from "lucide-react";
import { socialActivityEntries } from "@/data/socialActivities";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function SocialActivities() {
  return (
    <section>
      <SectionTitle title="Social Activities" icon={Users} />
      <div className="space-y-4">
        {socialActivityEntries.map((activity, index) => (
          <GlassCard
            key={activity.title}
            className="p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-text-primary)]">
                  {activity.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {activity.role}
                </p>
              </div>
              <span className="shrink-0 text-xs font-medium text-[var(--color-accent)]">
                {activity.period}
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {activity.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
