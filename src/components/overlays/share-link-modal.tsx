"use client"

import * as React from "react"
import { Copy, X } from "lucide-react"
import { cn } from "@/lib/cn"

export interface ShareLinkModalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  url?: string
  title?: string
  description?: string
  doneLabel?: string
  copiedLabel?: string
}

export function ShareLinkModal({
  open: openProp,
  onOpenChange,
  url = "https://example.lorem/shortlink",
  title = "Get a shareable link",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  doneLabel = "Done",
  copiedLabel = "Copied",
  className,
}: ShareLinkModalProps) {
  const [internalOpen, setInternalOpen] = React.useState(true)
  const [copyState, setCopyState] = React.useState(false)

  const open = openProp ?? internalOpen

  const setOpen = (value: boolean) => {
    setInternalOpen(value)
    onOpenChange?.(value)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopyState(true)
    } catch (err) {
      console.error("Async: Could not copy text: ", err)
    }
  }

  React.useEffect(() => {
    if (!copyState) return
    const id = setTimeout(() => setCopyState(false), 3000)
    return () => clearTimeout(id)
  }, [copyState])

  if (!open) return null

  return (
    <div className={cn("fixed inset-0 z-10 overflow-y-auto", className)}>
      <div
        className="fixed inset-0 h-full w-full bg-black opacity-40"
        onClick={() => setOpen(false)}
      />
      <div className="flex min-h-screen items-center px-4 py-8">
        <div className="relative mx-auto w-full max-w-lg rounded-md bg-background p-4 shadow-lg">
          <div className="space-y-4 py-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-medium text-foreground">
                  {title}
                </h4>
                <p className="mt-4 text-[15px] text-muted-foreground">
                  {description}
                </p>
              </div>
              <button
                type="button"
                className="rounded-md p-2 text-muted-foreground hover:bg-muted"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-2">
              <p className="overflow-hidden text-sm text-muted-foreground">
                {url}
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className={cn(
                  "relative text-muted-foreground duration-150 hover:text-foreground",
                  copyState && "pointer-events-none text-indigo-600",
                )}
              >
                <Copy className="pointer-events-none h-6 w-6" />
                {copyState ? (
                  <div className="absolute -top-12 -left-3 rounded-xl bg-indigo-600 px-2 py-1.5 text-[10px] font-semibold text-white after:absolute after:inset-x-0 after:mx-auto after:top-[22px] after:h-2 after:w-2 after:rotate-45 after:bg-indigo-600">
                    <span className="relative z-10">{copiedLabel}</span>
                  </div>
                ) : null}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-indigo-600 px-8 py-2.5 text-white outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
            >
              {doneLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareLinkModal
