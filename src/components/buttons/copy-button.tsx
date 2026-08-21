"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/buttons/button"
import { cn } from "@/lib/cn"

export interface CopyButtonProps {
  /** The text to copy to the clipboard. */
  value: string
  /** Optional label to display instead of just the icon. */
  label?: string
  /** Duration (ms) the check state is shown before reverting. */
  feedbackDuration?: number
  className?: string
  variant?: React.ComponentProps<typeof Button>["variant"]
  size?: React.ComponentProps<typeof Button>["size"]
}

export function CopyButton({
  value,
  label,
  feedbackDuration = 1500,
  className,
  variant = "outline",
  size = "icon",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = value
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), feedbackDuration)
  }

  return (
    <Button
      type="button"
      variant={variant}
      size={label ? "default" : size}
      onClick={handleCopy}
      className={cn(label && "gap-2", className)}
      aria-label={label ?? "Copy to clipboard"}
    >
      {copied ? (
        <Check className="text-emerald-500" aria-hidden="true" />
      ) : (
        <Copy aria-hidden="true" />
      )}
      {label && <span>{copied ? "Copied" : label}</span>}
    </Button>
  )
}

export default CopyButton
