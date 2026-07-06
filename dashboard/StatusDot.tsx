interface StatusDotProps {
  status?: "ok" | "warn" | "error" | "neutral" | "unknown";
  pulse?: boolean;
  size?: number;
  className?: string;
}

const COLOR_MAP = {
  ok: { bg: "#22c55e", glow: "rgba(34, 197, 94, 0.5)" },
  warn: { bg: "#f59e0b", glow: "rgba(245, 158, 11, 0.5)" },
  error: { bg: "var(--brand-primary)", glow: "rgba(var(--brand-rgb), 0.6)" },
  neutral: { bg: "#6b7280", glow: "rgba(107, 114, 128, 0.3)" },
  unknown: { bg: "#6b7280", glow: "rgba(107, 114, 128, 0.3)" },
};

export function StatusDot({
  status = "unknown",
  pulse = false,
  size = 10,
  className = "",
}: StatusDotProps) {
  const color = COLOR_MAP[status] || COLOR_MAP.unknown;
  const px = `${size}px`;

  return (
    <span
      className={`inline-block rounded-full ${pulse ? "animate-pulse" : ""} ${className}`}
      style={{
        width: px,
        height: px,
        backgroundColor: color.bg,
        boxShadow: `0 0 6px ${color.glow}`,
      }}
      title={status}
    />
  );
}
