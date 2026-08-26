"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface BarsSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner in pixels. */
  size?: number
  /** CSS color of the spinner bars. */
  color?: string
}

const BARS_CSS = `
.vs-bars-spinner {
  position: relative;
  height: var(--spinner-size, 20px);
  width: var(--spinner-size, 20px);
}

.vs-bars-spinner__bar {
  position: absolute;
  top: -3.9%;
  left: -10%;
  height: 8%;
  width: 24%;
  border-radius: 6px;
  background: var(--spinner-color);
  animation: vs-bars-spin 1.2s linear infinite;
}

.vs-bars-spinner__bar:nth-child(1) { animation-delay: -1.2s; transform: rotate(0.0001deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(2) { animation-delay: -1.1s; transform: rotate(30deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(3) { animation-delay: -1s; transform: rotate(60deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(4) { animation-delay: -0.9s; transform: rotate(90deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(5) { animation-delay: -0.8s; transform: rotate(120deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(6) { animation-delay: -0.7s; transform: rotate(150deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(7) { animation-delay: -0.6s; transform: rotate(180deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(8) { animation-delay: -0.5s; transform: rotate(210deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(9) { animation-delay: -0.4s; transform: rotate(240deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(10) { animation-delay: -0.3s; transform: rotate(270deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(11) { animation-delay: -0.2s; transform: rotate(300deg) translate(146%); }
.vs-bars-spinner__bar:nth-child(12) { animation-delay: -0.1s; transform: rotate(330deg) translate(146%); }

@keyframes vs-bars-spin {
  0% { opacity: 1; }
  100% { opacity: 0.15; }
}
`

export const BarsSpinner = React.forwardRef<HTMLDivElement, BarsSpinnerProps>(
  ({ className, size = 20, color = "currentColor", ...props }, ref) => {
    const bars = Array.from({ length: 12 })

    return (
      <div
        ref={ref}
        className={cn("vs-bars-spinner", className)}
        style={{
          ["--spinner-size" as string]: `${size}px`,
          ["--spinner-color" as string]: color,
        }}
        {...props}
      >
        <style>{BARS_CSS}</style>
        {bars.map((_, i) => (
          <div className="vs-bars-spinner__bar" key={`vs-bars-spinner-bar-${i}`} />
        ))}
      </div>
    )
  },
)

BarsSpinner.displayName = "BarsSpinner"

export default BarsSpinner