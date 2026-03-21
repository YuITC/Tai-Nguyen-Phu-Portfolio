interface TagProps {
  label: string;
  variant?: "skill" | "category" | "language";
  active?: boolean;
  onClick?: () => void;
  color?: string;
}

export default function Tag({
  label,
  variant = "skill",
  active = false,
  onClick,
  color,
}: TagProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200";

  const variantClasses = {
    skill:
      "font-[family-name:var(--font-mono)] bg-slate-100 text-slate-700 border border-slate-200",
    category: active
      ? "bg-[var(--color-accent)] text-white shadow-md cursor-pointer"
      : "bg-white/60 text-slate-600 border border-slate-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] cursor-pointer",
    language: "bg-slate-50 text-slate-600",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {variant === "language" && color && (
        <span
          className="w-2.5 h-2.5 rounded-full inline-block"
          style={{ backgroundColor: color }}
        />
      )}
      {label}
    </button>
  );
}
