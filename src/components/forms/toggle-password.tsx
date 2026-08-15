import * as React from "react"
import { cn } from "@/lib/cn"

export interface TogglePasswordProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  label?: string
  placeholder?: string
  defaultValue?: string
  asCheckbox?: boolean
}

export function TogglePassword({
  id,
  label = "Password",
  placeholder = "Enter password",
  defaultValue = "",
  asCheckbox = false,
  className,
}: TogglePasswordProps) {
  const autoId = React.useId()
  const inputId = id ?? autoId
  const [visible, setVisible] = React.useState(false)

  return (
    <div className={cn("max-w-sm w-full", className)}>
      <label htmlFor={inputId} className="block mb-2 text-sm text-foreground">
        {label}
      </label>

      {asCheckbox ? (
        <>
          <input
            id={inputId}
            type="password"
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="py-2.5 sm:py-3 px-4 block w-full bg-background border-border rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
          />
          <div className="flex items-center mt-4">
            <input
              id={`${inputId}-checkbox`}
              type="checkbox"
              onChange={(e) => setVisible(e.target.checked)}
              className="shrink-0 size-4 bg-transparent border-border rounded-sm text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary checked:border-primary disabled:opacity-50 disabled:pointer-events-none"
            />
            <label
              htmlFor={`${inputId}-checkbox`}
              className="ms-2 text-sm text-muted-foreground cursor-pointer"
            >
              Show password
            </label>
          </div>
        </>
      ) : (
        <div className="relative">
          <input
            id={inputId}
            type={visible ? "text" : "password"}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="py-2.5 sm:py-3 ps-4 pe-10 block w-full bg-background border-border rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
          />
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute inset-y-0 right-0 flex items-center z-20 px-3 cursor-pointer text-muted-foreground rounded-e-md focus:outline-none focus:text-primary"
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? (
              <svg
                className="shrink-0 size-3.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                className="shrink-0 size-3.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" x2="22" y1="2" y2="22" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default TogglePassword
