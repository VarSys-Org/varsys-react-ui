import * as React from "react"
import { cn } from "@/lib/utils"

export interface StrongPasswordProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  minLength?: number
}

export interface PasswordChecks {
  minLength: boolean
  lowercase: boolean
  uppercase: boolean
  number: boolean
  special: boolean
}

function scorePassword(value: string, minLength: number): { score: number; checks: PasswordChecks } {
  const checks: PasswordChecks = {
    minLength: value.length >= minLength,
    lowercase: /[a-z]/.test(value),
    uppercase: /[A-Z]/.test(value),
    number: /\d/.test(value),
    special: /[^A-Za-z0-9]/.test(value),
  }
  const passed = Object.values(checks).filter(Boolean).length
  return { score: value.length === 0 ? 0 : passed, checks }
}

const LEVELS = ["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]

export function StrongPassword({
  placeholder = "Enter password",
  minLength = 6,
  className,
}: StrongPasswordProps) {
  const [value, setValue] = React.useState("")

  const { score, checks } = React.useMemo(
    () => scorePassword(value, minLength),
    [value, minLength]
  )

  const rules = [
    { key: "minLength" as const, label: `Minimum number of characters is ${minLength}.` },
    { key: "lowercase" as const, label: "At least one lowercase letter." },
    { key: "uppercase" as const, label: "At least one uppercase letter." },
    { key: "number" as const, label: "At least one number." },
    { key: "special" as const, label: "At least one special character." },
  ]

  return (
    <div className={cn("max-w-sm", className)}>
      <div className="flex mb-2">
        <div className="flex-1">
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="py-2.5 sm:py-3 px-4 block w-full bg-background border-border rounded-md sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
            placeholder={placeholder}
          />
          <div className="flex mt-2 -mx-1">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "h-2 flex-auto rounded-full bg-primary opacity-50 mx-1",
                  i < score && "opacity-100 bg-teal-500"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div>
          <span className="text-sm text-foreground">Level:</span>{" "}
          <span className="text-sm font-semibold text-foreground">{LEVELS[score]}</span>
        </div>

        <h4 className="my-2 text-sm font-semibold text-foreground">
          Your password must contain:
        </h4>

        <ul className="space-y-1 text-sm text-muted-foreground">
          {rules.map((rule) => (
            <li
              key={rule.key}
              className={cn("flex items-center gap-x-2", checks[rule.key] && "text-teal-500")}
            >
              {checks[rule.key] ? (
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
              {rule.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default StrongPassword
