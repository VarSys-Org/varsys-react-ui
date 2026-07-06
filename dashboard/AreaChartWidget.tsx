import { useMemo } from "react";

interface DataPoint {
  label: string;
  value: number;
}

interface AreaChartWidgetProps {
  data: DataPoint[];
  color?: string;
  height?: number;
  className?: string;
}

export function AreaChartWidget({
  data,
  color,
  height = 120,
  className = "",
}: AreaChartWidgetProps) {
  const accent = color || "var(--brand-primary)";

  const pathData = useMemo(() => {
    if (!data || data.length === 0) return { line: "", area: "" };

    const n = data.length;
    const w = 100;
    const h = 100;
    const maxVal = Math.max(...data.map((d) => d.value), 1);
    const stepX = w / (n - 1 || 1);

    const points = data.map((d, i) => ({
      x: i * stepX,
      y: h - (d.value / maxVal) * h * 0.85 - h * 0.05,
    }));

    const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const area = `${line} L${(n - 1) * stepX},${h} L0,${h} Z`;

    return { line, area };
  }, [data]);

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`area-fill-${accent}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity={0.25} />
            <stop offset="100%" stopColor={accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <path
          d={pathData.area}
          fill={`url(#area-fill-${accent})`}
          className="transition-all duration-500"
        />
        <path
          d={pathData.line}
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
    </div>
  );
}
