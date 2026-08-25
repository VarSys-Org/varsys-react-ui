"use client"

import * as React from "react"
import { Check, Eye, EyeOff, X } from "lucide-react"

import { cn } from "@/lib/cn"

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label rendered above the field. */
  label?: string
  /** Show the live strength meter below the field. */
  showStrength?: boolean
  /** Show the password requirements checklist. */
  showRequirements?: boolean
  /** Optional validation error message. */
  error?: string
}

const strengthLabels = ["Weak", "Fair", "Good", "Strong"]

function getScore(value: string) {
  let score = 0
  if (value.length >= 8) score++
  if (value.length >= 12) score++
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++
  if (/\d/.test(value)) score++
  if (/[^a-zA-Z0-9]/.test(value)) score++
  return Math.min(4, score)
}

const requirementChecks: { key: string; test: (value: string) => boolean; label: string }[] = [
  { key: "length", test: (value) => value.length >= 8, label: "At least 8 characters" },
  { key: "case", test: (value) => /[a-z]/.test(value) && /[A-Z]/.test(value), label: "Upper and lowercase letters" },
  { key: "number", test: (value) => /\d/.test(value), label: "At least one number" },
  { key: "symbol", test: (value) => /[^a-zA-Z0-9]/.test(value), label: "At least one symbol" },
]

export function PasswordInput({
  label,
  showStrength = true,
  showRequirements = true,
  error,
  className,
  value,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = React.useState(false)
  const [touched, setTouched] = React.useState(false)

  const currentValue = typeof value === "string" ? value : ""
  const score = getScore(currentValue)

  const input = (
    <input
      type={visible ? "text" : "password"}
      value={value}
      onBlur={(event) => {
        setTouched(true)
        props.onBlur?.(event)
      }}
      className={cn(
        "h-11 w-full rounded-lg border bg-background px-4 pr-12 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:ring-3 focus-visible:outline-none",
        error
          ? "border-destructive focus-visible:ring-destructive/40"
          : "border-border focus-visible:ring-ring/50",
        className,
      )}
      {...props}
    />
  )

  return (
    <div className="w-full" data-slot="password-input">
      {label && (
        <label htmlFor={props.id} className="mb-1.5 block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        {input}
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setVisible((prev) => !prev)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          {visible ? <EyeOff aria-hidden="true" className="size-4" /> : <Eye aria-hidden="true" className="size-4" />}
        </button>
      </div>

      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}

      {showStrength && currentValue.length > 0 && (
        <div className="mt-2.5">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors",
                  index < score ? strengthColor(score) : "bg-muted",
                )}
              />
            ))}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Strength: <span className="font-medium text-foreground">{strengthLabels[score - 1]}</span>
          </p>
        </div>
      )}

      {showRequirements && currentValue.length > 0 && (
        <ul className="mt-2.5 space-y-1">
          {requirementChecks.map((requirement) => {
            const passed = requirement.test(currentValue)
            return (
              <li
                key={requirement.key}
                className={cn(
                  "flex items-center gap-1.5 text-xs",
                  passed ? "text-primary" : "text-muted-foreground",
                )}
              >
                {passed ? (
                  <Check aria-hidden="true" className="size-3.5" />
                ) : (
                  <X aria-hidden="true" className="size-3.5 opacity-50" />
                )}
                {requirement.label}
              </li>
            )
          })}
        </ul>
      )}

      {touched && currentValue.length === 0 && (
        <p className="mt-1.5 text-xs text-muted-foreground">Enter a password</p>
      )}
    </div>
  )
}

function strengthColor(score: number) {
  if (score <= 1) return "bg-destructive"
  if (score === 2) return "bg-amber-500"
  if (score === 3) return "bg-lime-500"
  return "bg-emerald-500"
}

export default PasswordInput
