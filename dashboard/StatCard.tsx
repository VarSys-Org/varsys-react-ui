import { type ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({
  label,
  value,
  change,
  icon,
  className = "",
}: StatCardProps) {
  const isPositive = change?.startsWith("+");
  const changeColor = isPositive
    ? "text-green-500"
    : change?.startsWith("-")
      ? "text-red-500"
      : "text-[var(--text-muted)]";

  return (
    <div
      className={`panel-shell p-3 flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[var(--text-muted)]">
          {label}
        </span>
        {icon && (
          <span className="w-3.5 h-3.5 text-[var(--brand-primary)] shrink-0">
            {icon}
          </span>
        )}
      </div>
      <div className="mt-2">
        <div className="text-xl font-semibold text-[var(--text-primary)] leading-tight font-mono">
          {value}
        </div>
        {change && (
          <div className={`text-[10px] mt-0.5 ${changeColor}`}>{change}</div>
        )}
      </div>
    </div>
  );
}
