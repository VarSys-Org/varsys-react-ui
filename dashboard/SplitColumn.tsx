import { ReactNode } from "react";

interface SplitColumnProps {
  left: ReactNode;
  right: ReactNode;
  leftLabel?: string;
  rightLabel?: string;
  leftTag?: string;
  rightTag?: string;
  className?: string;
}

export function SplitColumn({
  left,
  right,
  leftLabel,
  rightLabel,
  leftTag,
  rightTag,
  className = "",
}: SplitColumnProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-6 relative h-full ${className}`}
    >
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[var(--panel-border)]/50 -translate-x-1/2 hidden md:block" />

      <div className="flex flex-col gap-4 min-w-0">
        {(leftLabel || leftTag) && (
          <div className="flex items-center justify-between text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider bg-[var(--panel-muted)]/20 py-1 px-2 rounded">
            <span>{leftLabel}</span>
            {leftTag && (
              <span className="text-[10px] font-mono text-[var(--text-dim)] border border-[var(--panel-border)] bg-[var(--panel-bg)] px-1.5 py-0.5 rounded leading-none">
                {leftTag}
              </span>
            )}
          </div>
        )}
        <div className="flex-1">{left}</div>
      </div>

      <div className="flex flex-col gap-4 min-w-0">
        {(rightLabel || rightTag) && (
          <div className="flex items-center justify-between text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider bg-[var(--panel-muted)]/20 py-1 px-2 rounded">
            <span>{rightLabel}</span>
            {rightTag && (
              <span className="text-[10px] font-mono text-[var(--text-dim)] border border-[var(--panel-border)] bg-[var(--panel-bg)] px-1.5 py-0.5 rounded leading-none">
                {rightTag}
              </span>
            )}
          </div>
        )}
        <div className="flex-1">{right}</div>
      </div>
    </div>
  );
}
