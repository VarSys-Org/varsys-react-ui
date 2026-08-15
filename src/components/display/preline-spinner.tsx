"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

const SPINNER_KEYFRAMES = `
@keyframes preline-pulse-dot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.82; } }
@keyframes preline-wave { 0%, 100% { transform: scaleY(0.4); opacity: 0.5; } 50% { transform: scaleY(1); opacity: 1; } }
@keyframes preline-bars { 0%, 100% { transform: scaleY(0.55); opacity: 0.45; } 50% { transform: scaleY(1); opacity: 1; } }
@keyframes preline-caret { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
@keyframes preline-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
@keyframes preline-ellipsis { 0%, 70%, 100% { transform: translateY(0); } 35% { transform: translateY(-0.4em); } }
@keyframes preline-typing { 0% { opacity: 1; scale: 1; } 50% { opacity: 0.75; scale: 0.75; } 100% { opacity: 1; scale: 1; } }
`

let keyframesInjected = false

function ensureKeyframes() {
  if (typeof document === "undefined" || keyframesInjected) return
  keyframesInjected = true
  const style = document.createElement("style")
  style.textContent = SPINNER_KEYFRAMES
  document.head.appendChild(style)
}

export type PrelineSpinnerVariant =
  | "circle"
  | "svg"
  | "throbber"
  | "ring"
  | "pulse"
  | "wave"
  | "bars"
  | "terminal"
  | "caret"
  | "shimmer"
  | "dots"
  | "ellipsis"
  | "typing"

export type PrelineSpinnerSize = "sm" | "md" | "lg"

export interface PrelineSpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: PrelineSpinnerVariant
  size?: PrelineSpinnerSize
  className?: string
  label?: string
}

const SIZE_MAP: Record<PrelineSpinnerSize, string> = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
}

export function PrelineSpinner({
  variant = "circle",
  size = "md",
  className,
  label = "Loading...",
}: PrelineSpinnerProps) {
  React.useEffect(() => {
    ensureKeyframes()
  }, [])

  const common = {
    role: "status" as const,
    "aria-label": "loading",
  }

  const renderCircle = () => (
    <span
      {...common}
      className={cn(
        "inline-block animate-spin border-3 border-current border-t-transparent rounded-full",
        SIZE_MAP[size],
        className,
      )}
    >
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderSvg = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <svg
        className={cn("shrink-0 animate-spin text-foreground", SIZE_MAP[size])}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM3.13375 12C3.13375 16.8967 7.10331 20.8662 12 20.8662C16.8967 20.8662 20.8662 16.8967 20.8662 12C20.8662 7.10331 16.8967 3.13375 12 3.13375C7.10331 3.13375 3.13375 7.10331 3.13375 12Z"
          fill="currentColor"
          opacity=".2"
        />
        <path
          d="M12 0C9.62662 -2.83022e-08 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913446 7.4078C0.00519403 9.60051 -0.232446 12.0133 0.230577 14.3411C0.693599 16.6689 1.83649 18.8071 3.51472 20.4853L5.73062 18.2694C4.49065 17.0294 3.64622 15.4496 3.30412 13.7297C2.96201 12.0098 3.13759 10.2271 3.80866 8.60703C4.47972 6.98694 5.61613 5.60222 7.07418 4.62798C8.53222 3.65375 10.2464 3.13375 12 3.13375L12 0Z"
          fill="currentColor"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderThrobber = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <svg
        className={cn("shrink-0 animate-spin text-foreground", SIZE_MAP[size])}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
          <path d="M12 2.75V5.25" opacity="0.15" />
          <path d="M16.95 4.08L15.7 6.25" opacity="0.22" />
          <path d="M19.92 7.05L17.75 8.3" opacity="0.32" />
          <path d="M21.25 12H18.75" opacity="0.42" />
          <path d="M19.92 16.95L17.75 15.7" opacity="0.54" />
          <path d="M16.95 19.92L15.7 17.75" opacity="0.66" />
          <path d="M12 21.25V18.75" opacity="0.78" />
          <path d="M7.05 19.92L8.3 17.75" opacity="0.9" />
          <path d="M4.08 16.95L6.25 15.7" opacity="1" />
          <path d="M2.75 12H5.25" opacity="0.86" />
          <path d="M4.08 7.05L6.25 8.3" opacity="0.7" />
          <path d="M7.05 4.08L8.3 6.25" opacity="0.5" />
        </g>
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderRing = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <span
        className="relative flex items-center justify-center text-foreground"
        aria-hidden="true"
        style={{ width: "1.5rem", height: "1.5rem" }}
      >
        <span className="absolute inline-flex size-4 animate-ping rounded-full border border-current/50" />
        <span className="inline-flex size-4 rounded-full border border-current" />
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderPulse = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <span
        className="inline-flex size-2 shrink-0 origin-center rounded-full bg-foreground"
        style={{ animation: "preline-pulse-dot 1s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderWave = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <span className="flex h-6 items-center justify-center gap-0.5" aria-hidden="true">
        {[0, 0.12, 0.24, 0.36, 0.48].map((delay) => (
          <span
            key={delay}
            className="h-3.5 w-1 origin-center rounded-full bg-foreground"
            style={{ animation: `preline-wave 0.9s ease-in-out infinite ${delay}s` }}
          />
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderBars = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <span className="flex h-6 items-center justify-center gap-1" aria-hidden="true">
        {[0, 0.12, 0.24].map((delay) => (
          <span
            key={delay}
            className="h-4.5 w-1.5 origin-bottom rounded-xs bg-foreground/80"
            style={{ animation: `preline-bars 1s ease-in-out infinite ${delay}s` }}
          />
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderTerminal = () => (
    <span {...common} className={cn("inline-flex font-mono text-sm font-semibold text-foreground", className)}>
      <span className="flex h-6 items-center justify-center gap-0.5" aria-hidden="true">
        <span>&gt;</span>
        <span
          className="inline-block h-4 w-1.5 bg-current"
          style={{ animation: "preline-caret 1s steps(1) infinite" }}
        />
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderCaret = () => (
    <span {...common} className={cn("inline-flex text-foreground", className)}>
      <span className="flex h-6 items-center justify-center gap-0.5" aria-hidden="true">
        <span>{label.replace("...", "")}</span>
        <span
          className="inline-block h-3.5 w-1 bg-current"
          style={{ animation: "preline-caret 1s steps(1) infinite" }}
        />
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderShimmer = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <span
        className="inline-block bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg, hsl(var(--muted-foreground)) 0%, hsl(var(--foreground)) 45%, hsl(var(--muted-foreground)) 55%, hsl(var(--muted-foreground)) 100%)",
          backgroundSize: "200% 100%",
          animation: "preline-shimmer 1.5s linear infinite",
        }}
        aria-hidden="true"
      >
        {label.replace("...", "")}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderDots = () => (
    <span {...common} className={cn("inline-flex text-foreground", className)}>
      <span className="flex h-6 items-end justify-center" aria-hidden="true">
        <span className="pb-px">{label.replace("...", "")}</span>
        <span className="ms-0.5 inline-flex items-end gap-px pb-px">
          {[0, 0.12, 0.24].map((delay) => (
            <span
              key={delay}
              className="inline-block"
              style={{ animation: `preline-ellipsis 1s ease-in-out infinite ${delay}s` }}
            >
              .
            </span>
          ))}
        </span>
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderEllipsis = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <span className="inline-flex items-end gap-1.5" aria-hidden="true">
        {[0, 0.12, 0.24].map((delay) => (
          <span
            key={delay}
            className="inline-block size-1.5 shrink-0 rounded-full bg-foreground"
            style={{ animation: `preline-ellipsis 0.7s ease-in-out infinite ${delay}s` }}
          />
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  const renderTyping = () => (
    <span {...common} className={cn("inline-flex", className)}>
      <span className="inline-flex gap-x-1" aria-hidden="true">
        {[0, 0.2, 0.4].map((delay) => (
          <span
            key={delay}
            className="size-1.5 rounded-full bg-muted-foreground"
            style={{ animation: `preline-typing 1s ease-in-out infinite ${delay}s` }}
          />
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  )

  switch (variant) {
    case "circle":
      return renderCircle()
    case "svg":
      return renderSvg()
    case "throbber":
      return renderThrobber()
    case "ring":
      return renderRing()
    case "pulse":
      return renderPulse()
    case "wave":
      return renderWave()
    case "bars":
      return renderBars()
    case "terminal":
      return renderTerminal()
    case "caret":
      return renderCaret()
    case "shimmer":
      return renderShimmer()
    case "dots":
      return renderDots()
    case "ellipsis":
      return renderEllipsis()
    case "typing":
      return renderTyping()
    default:
      return renderCircle()
  }
}

export default PrelineSpinner
