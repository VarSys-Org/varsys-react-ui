import { ReactNode } from "react";
import { StatusDot } from "./StatusDot";

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface IndicatorRow {
  label: string;
  cells: Record<string, IndicatorCell>;
}

type IndicatorCell =
  | { type: "dot"; value: number | null | undefined }
  | { type: "value"; value: string | number | null | undefined }
  | { type: "custom"; node: ReactNode };

interface IndicatorTableProps {
  columns: Column[];
  rows: IndicatorRow[];
  className?: string;
}

function dotStatus(val: number | null | undefined) {
  if (val === undefined || val === null) return "unknown" as const;
  if (val === 0) return "ok" as const;
  return "error" as const;
}

export function IndicatorTable({
  columns,
  rows,
  className = "",
}: IndicatorTableProps) {
  if (!columns.length || !rows.length) return null;

  return (
    <div className={className}>
      <div
        className="grid gap-4 px-4 py-2 border-b border-[var(--panel-border)]/50 bg-[var(--panel-muted)]/30 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider"
        style={{
          gridTemplateColumns: `1fr ${columns.slice(1).map(() => "48px").join(" ")}`,
        }}
      >
        {columns.map((col) => (
          <div
            key={col.key}
            className={col.key === columns[0].key ? "text-left" : "text-center"}
          >
            {col.label}
          </div>
        ))}
      </div>

      <div className="divide-y divide-[var(--panel-border)]/30">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="grid gap-4 px-4 py-2.5 items-center table-row-hover hover:bg-[var(--table-row-hover)]"
            style={{
              gridTemplateColumns: `1fr ${columns.slice(1).map(() => "48px").join(" ")}`,
            }}
          >
            <div className="text-xs font-medium text-[var(--text-primary)] truncate">
              {row.label}
            </div>
            {columns.slice(1).map((col) => {
              const cell = row.cells[col.key];
              if (!cell) return <div key={col.key} />;

              if (cell.type === "dot") {
                return (
                  <div key={col.key} className="flex justify-center items-center">
                    <StatusDot
                      status={dotStatus(cell.value)}
                      pulse={dotStatus(cell.value) === "error"}
                      size={10}
                    />
                  </div>
                );
              }

              if (cell.type === "value") {
                const v = cell.value;
                return (
                  <div
                    key={col.key}
                    className="flex justify-center items-center text-xs font-mono text-[var(--text-muted)]"
                  >
                    {v !== undefined && v !== null ? String(v) : "\u2014"}
                  </div>
                );
              }

              if (cell.type === "custom") {
                return (
                  <div key={col.key} className="flex justify-center items-center">
                    {cell.node}
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
