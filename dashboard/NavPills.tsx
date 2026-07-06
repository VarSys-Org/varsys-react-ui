import { type ReactNode } from "react";

interface NavPill {
  key: string;
  label: string;
  icon?: ReactNode;
}

interface NavPillsProps {
  items: NavPill[];
  activeKey?: string;
  onChange?: (key: string) => void;
  className?: string;
}

export function NavPills({
  items,
  activeKey,
  onChange,
  className = "",
}: NavPillsProps) {
  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {items.map((item) => {
        const active = item.key === activeKey;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange?.(item.key)}
            className={`inline-flex items-center gap-1.5 rounded-full border text-xs whitespace-nowrap transition-colors px-3 py-1.5 ${
              active
                ? "bg-[var(--brand-primary)] text-white border-[var(--brand-primary)]"
                : "border-[var(--panel-border)] text-[var(--text-primary)] bg-[var(--panel-bg)] hover:border-[var(--brand-primary)]"
            }`}
          >
            {item.icon && <span className="w-3.5 h-3.5">{item.icon}</span>}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
