import { ReactNode } from "react";

interface PanelShellProps {
  title?: string;
  icon?: ReactNode;
  tag?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
}

export function PanelShell({
  title,
  icon,
  tag,
  children,
  className = "",
  headerClassName = "",
}: PanelShellProps) {
  return (
    <div className={`panel-shell flex flex-col ${className}`}>
      {title && (
        <div
          className={`flex items-center gap-2 px-4 py-3 border-b border-[var(--panel-border)] bg-[var(--shell-bg)] ${headerClassName}`}
        >
          {icon && (
            <span className="w-4 h-4 text-[var(--brand-primary)] shrink-0">
              {icon}
            </span>
          )}
          <h3 className="font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider">
            {title}
          </h3>
          {tag && (
            <span className="ml-auto text-[10px] font-mono text-[var(--text-dim)] border border-[var(--panel-border)] bg-[var(--panel-muted)] px-1.5 py-0.5 rounded leading-none">
              {tag}
            </span>
          )}
        </div>
      )}
      <div className="flex-1 bg-[var(--panel-bg)] p-4">
        {children}
      </div>
    </div>
  );
}
