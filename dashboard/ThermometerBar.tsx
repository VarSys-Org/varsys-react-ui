import { useMemo } from "react";

interface ThermometerBarProps {
  label: string;
  value: number | null | undefined;
  unit?: string;
  min?: number;
  max?: number;
  thresholds?: { warn: number; danger: number };
  decimals?: number;
  tag?: string;
  className?: string;
  mono?: boolean;
}

function getBarColor(
  val: number | null | undefined,
  thresholds: { warn: number; danger: number },
): string {
  if (!val && val !== 0) return "var(--status-neutral)";
  if (val >= thresholds.danger) return "var(--status-error)";
  if (val >= thresholds.warn) return "var(--status-warn)";
  return "var(--status-connected)";
}

export function ThermometerBar({
  label,
  value,
  unit = "",
  min = 0,
  max = 100,
  thresholds = { warn: 60, danger: 85 },
  decimals = 1,
  tag,
  className = "",
  mono = true,
}: ThermometerBarProps) {
  const displayVal =
    value !== undefined && value !== null
      ? Number.isFinite(decimals)
        ? value.toFixed(decimals)
        : value.toString()
      : "\u2014";

  const pct =
    value !== undefined && value !== null
      ? Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100))
      : 0;

  const barColor = useMemo(
    () => getBarColor(value, thresholds),
    [value, thresholds],
  );

  return (
    <div className={`mb-3 last:mb-0 ${className}`}>
      <div className="flex justify-between items-end text-xs mb-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[var(--text-muted)]">{label}</span>
          {tag && (
            <span className="text-[9px] font-mono text-[var(--text-dim)] border border-[var(--panel-border)] bg-[var(--panel-muted)]/30 px-1 rounded leading-none">
              {tag}
            </span>
          )}
        </div>
        <span className={`text-[var(--text-primary)] ${mono ? "font-mono" : ""}`}>
          {displayVal}
          {unit && value !== undefined && value !== null && (
            <span className="text-[var(--text-dim)] ml-0.5">{unit}</span>
          )}
        </span>
      </div>
      <div className="w-full h-2 bg-[var(--panel-border)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: barColor }}
        />
      </div>
    </div>
  );
}
