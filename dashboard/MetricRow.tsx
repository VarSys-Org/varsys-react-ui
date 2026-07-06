interface MetricRowProps {
  label: string;
  value: string | number;
  unit?: string;
  decimals?: number;
  mono?: boolean;
  className?: string;
}

function formatValue(val: string | number, decimals?: number): string {
  if (val === undefined || val === null || val === "") return "\u2014";
  if (typeof val === "number") {
    return Number.isFinite(decimals) ? val.toFixed(decimals) : val.toString();
  }
  return val;
}

export function MetricRow({
  label,
  value,
  unit,
  decimals,
  mono = true,
  className = "",
}: MetricRowProps) {
  const displayVal = formatValue(value, decimals);
  const hasVal = value !== undefined && value !== null && value !== "";

  return (
    <div
      className={`grid grid-cols-[1fr_auto] items-center px-4 py-2.5 gap-2 table-row-hover ${className}`}
    >
      <span
        className="text-xs font-medium text-[var(--text-muted)] truncate"
        title={label}
      >
        {label}
      </span>
      <div className="flex items-baseline gap-1.5 shrink-0">
        <span
          className={`text-sm font-semibold ${
            mono ? "font-mono" : ""
          } ${
            hasVal
              ? "text-[var(--text-primary)]"
              : "text-[var(--text-dim)]"
          }`}
        >
          {displayVal}
        </span>
        {unit && hasVal && (
          <span className="text-xs font-medium text-[var(--text-dim)]">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}
