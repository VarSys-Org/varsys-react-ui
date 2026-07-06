import { ReactNode } from "react";

interface BadgeProps {
  variant?: "success" | "danger" | "warning" | "info" | "primary" | "neutral";
  children: ReactNode;
  className?: string;
}

const VARIANT_STYLES: Record<string, string> = {
  success:
    "bg-[var(--success-bg)] text-[var(--success-text)] border-[var(--success-border)]",
  danger:
    "bg-[var(--danger-bg)] text-[var(--danger-text)] border-[var(--danger-border)]",
  warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  info: "bg-sky-500/10 text-sky-500 border-sky-500/20",
  primary:
    "bg-[rgba(var(--brand-rgb),0.1)] text-[var(--brand-primary)] border-[rgba(var(--brand-rgb),0.25)]",
  neutral: "bg-[var(--panel-muted)] text-[var(--text-muted)] border-[var(--panel-border)]",
};

export function Badge({
  variant = "neutral",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide border ${VARIANT_STYLES[variant] || VARIANT_STYLES.neutral} ${className}`}
    >
      {children}
    </span>
  );
}
