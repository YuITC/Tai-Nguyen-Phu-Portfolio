import { type LucideIcon } from "lucide-react";

interface SectionTitleProps {
  title: string;
  icon?: LucideIcon;
}

export default function SectionTitle({ title, icon: Icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && (
        <div className="p-2.5 rounded-lg bg-[var(--color-accent)]/10">
          <Icon size={22} className="text-[var(--color-accent)]" />
        </div>
      )}
      <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>
    </div>
  );
}
