import * as React from "react"
import { cn } from "@/lib/utils"

export interface TimePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  onTimeChange?: (time: string) => void
}

const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i === 0 ? 12 : i).padStart(2, "0")
)
const MINUTES = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0"))
const PERIODS = ["AM", "PM"] as const

export function TimePicker({
  placeholder = "hh:mm aa",
  onTimeChange,
  className,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [hour, setHour] = React.useState<string | null>(null)
  const [minute, setMinute] = React.useState<string | null>(null)
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM")

  const value = React.useMemo(
    () => (hour && minute ? `${hour}:${minute} ${period}` : ""),
    [hour, minute, period]
  )

  const select = (setter: (v: string) => void) => (next: string) => {
    setter(next)
    onTimeChange?.(next)
  }

  return (
    <div className={cn("max-w-32", className)}>
      <div className="relative w-full">
        <input
          type="text"
          value={value}
          readOnly
          onClick={() => setOpen((v) => !v)}
          className="py-2.5 sm:py-3 ps-4 pe-12 block w-full bg-background border-border rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
          placeholder={placeholder}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pe-3">
          <div className="relative inline-flex">
            <button
              type="button"
              className="size-7 shrink-0 inline-flex justify-center items-center rounded-full bg-background text-foreground hover:bg-muted focus:outline-none focus:bg-muted disabled:opacity-50 disabled:pointer-events-none"
              aria-haspopup="menu"
              aria-expanded={open}
              aria-label="Pick time"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </button>

            {open ? (
              <div
                className="absolute top-full mt-2 right-0 min-w-30 bg-popover border border-border shadow-xl rounded-lg z-50"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="flex flex-row divide-x divide-border">
                  <div className="p-1 max-h-56 overflow-y-auto">
                    {HOURS.map((h) => (
                      <label
                        key={h}
                        className={cn(
                          "group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-foreground cursor-pointer rounded-md hover:bg-muted",
                          hour === h && "bg-primary text-primary-foreground"
                        )}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          name="hs-time-hour"
                          checked={hour === h}
                          onChange={() => select(setHour)(h)}
                        />
                        <span className="block">{h}</span>
                      </label>
                    ))}
                  </div>

                  <div className="p-1 max-h-56 overflow-y-auto">
                    {MINUTES.map((m) => (
                      <label
                        key={m}
                        className={cn(
                          "group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-foreground cursor-pointer rounded-md hover:bg-muted",
                          minute === m && "bg-primary text-primary-foreground"
                        )}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          name="hs-time-minute"
                          checked={minute === m}
                          onChange={() => select(setMinute)(m)}
                        />
                        <span className="block">{m}</span>
                      </label>
                    ))}
                  </div>

                  <div className="p-1">
                    {PERIODS.map((p) => (
                      <label
                        key={p}
                        className={cn(
                          "group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-foreground cursor-pointer rounded-md hover:bg-muted",
                          period === p && "bg-primary text-primary-foreground"
                        )}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          name="hs-time-period"
                          checked={period === p}
                          onChange={() => setPeriod(p)}
                        />
                        <span className="block">{p}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimePicker
