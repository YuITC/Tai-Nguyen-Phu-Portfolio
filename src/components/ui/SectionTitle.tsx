import { type LucideIcon } from "lucide-react";

interface SectionTitleProps {
  title: string;
  icon?: LucideIcon;
  count?: number;
  countLabel?: string;
}

export default function SectionTitle({
  title,
  icon: Icon,
  count,
  countLabel,
}: SectionTitleProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {Icon && (
        <div className="p-2.5 rounded-lg bg-[var(--color-accent)]/10">
          <Icon size={22} className="text-[var(--color-accent)]" />
        </div>
      )}
      <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>
      {typeof count === "number" && countLabel ? (
        <span
          className="inline-flex items-center rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]"
          aria-label={`${count} ${countLabel}`}
        >
          {count} {countLabel}
        </span>
      ) : null}
    </div>
  );
}
