"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export type ThemeAppearance = "light" | "dark" | "system"

export interface ThemeContextValue {
  appearance: ThemeAppearance
  resolvedTheme: "light" | "dark"
  setAppearance: (appearance: ThemeAppearance) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

export function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) {
    throw new Error("useTheme must be used within a <Theme> component")
  }
  return ctx
}

export type ThemeRadius = "none" | "small" | "medium" | "large" | "full"
export type ThemeScale = "90" | "95" | "100" | "105" | "110"
export type ThemeAccentColor = "primary" | "blue" | "green" | "red" | "amber" | "violet"

export interface ThemeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Appearance of the theme; "system" follows the OS preference. */
  appearance?: ThemeAppearance
  /** Accent color applied as a CSS variable. */
  accentColor?: ThemeAccentColor | string
  /** Border radius scale applied as a CSS variable. */
  radius?: ThemeRadius | string
  /** UI scaling applied as a CSS variable. */
  scaling?: ThemeScale | string
  /** Persist the appearance choice to localStorage. */
  persist?: boolean
}

const RADIUS_VALUES: Record<string, string> = {
  none: "0px",
  small: "4px",
  medium: "8px",
  large: "12px",
  full: "9999px",
}

const SCALE_VALUES: Record<string, string> = {
  "90": "0.9",
  "95": "0.95",
  "100": "1",
  "105": "1.05",
  "110": "1.1",
}

const ACCENT_VALUES: Record<string, string> = {
  primary: "var(--primary)",
  blue: "#3b82f6",
  green: "#10b981",
  red: "#ef4444",
  amber: "#f59e0b",
  violet: "#8b5cf6",
}

export function Theme({
  appearance = "system",
  accentColor,
  radius = "medium",
  scaling = "100",
  persist = false,
  className,
  style,
  children,
  ...props
}: ThemeProps) {
  const [localAppearance, setLocalAppearance] = React.useState<ThemeAppearance>(appearance)
  const [systemDark, setSystemDark] = React.useState(false)

  React.useEffect(() => {
    setLocalAppearance(appearance)
  }, [appearance])

  React.useEffect(() => {
    if (!persist) return
    try {
      const saved = window.localStorage.getItem("varsys-theme") as ThemeAppearance | null
      if (saved === "light" || saved === "dark" || saved === "system") {
        setLocalAppearance(saved)
      }
    } catch {}
  }, [persist])

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (event: MediaQueryListEvent) => setSystemDark(event.matches)
    setSystemDark(media.matches)
    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [])

  const resolvedTheme: "light" | "dark" =
    localAppearance === "system" ? (systemDark ? "dark" : "light") : localAppearance

  const setAppearance = React.useCallback(
    (next: ThemeAppearance) => {
      setLocalAppearance(next)
      if (persist) {
        try {
          window.localStorage.setItem("varsys-theme", next)
        } catch {}
      }
    },
    [persist]
  )

  const accentCss = accentColor ? ACCENT_VALUES[accentColor] ?? accentColor : undefined
  const radiusCss = RADIUS_VALUES[radius] ?? radius
  const scaleCss = SCALE_VALUES[scaling] ?? scaling

  return (
    <ThemeContext.Provider value={{ appearance: localAppearance, resolvedTheme, setAppearance }}>
      <div
        data-theme={resolvedTheme}
        data-accent-color={accentColor}
        data-radius={radius}
        data-scaling={scaling}
        className={cn(resolvedTheme === "dark" && "dark", className)}
        style={{
          colorScheme: resolvedTheme,
          ...(accentCss ? ({ "--accent": accentCss } as React.CSSProperties) : {}),
          ...(radiusCss ? ({ "--radius": radiusCss } as React.CSSProperties) : {}),
          ...(scaleCss ? ({ "--scale": scaleCss } as React.CSSProperties) : {}),
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

Theme.displayName = "Theme"

export default Theme