import * as React from "react"
import { cn } from "@/lib/cn"

export interface ClipboardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  successText?: string
  copyLabel?: string
}

export function Clipboard({
  value,
  successText = "Copied",
  copyLabel = "Copy",
  className,
}: ClipboardProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const el = document.createElement("textarea")
      el.value = value
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("inline-flex items-center gap-x-3", className)}>
      <div className="text-sm text-foreground">{value}</div>

      <button
        type="button"
        onClick={handleCopy}
        className="group p-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-background border border-border text-foreground shadow-sm hover:bg-muted focus:outline-none focus:bg-muted disabled:pointer-events-none disabled:opacity-50"
      >
        {copied ? (
          <svg
            className="size-4 text-primary"
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
            className="size-4 group-hover:rotate-6 transition"
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
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          </svg>
        )}
        <span>{copied ? successText : copyLabel}</span>
      </button>
    </div>
  )
}

export default Clipboard
