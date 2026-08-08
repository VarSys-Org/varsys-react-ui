"use client"

import React from "react"
import { cn } from "@/lib/utils"

export type UploadStatus =
  | "queued"
  | "uploading"
  | "complete"
  | "error"

export interface UploadFile {
  id: string
  name: string
  size?: number
  progress?: number
  status: UploadStatus
}

export interface UploadProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  files: UploadFile[]
  onSelect?: (file: UploadFile) => void
  onCancel?: (file: UploadFile) => void
  showCancel?: boolean
}

export function formatFileSize(bytes?: number): string {
  if (typeof bytes !== "number" || Number.isNaN(bytes)) return ""
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const statusVariant: Record<UploadStatus, { bar: string; label: string }> = {
  queued: { bar: "bg-muted-foreground", label: "Queued" },
  uploading: { bar: "bg-primary", label: "Uploading" },
  complete: { bar: "bg-emerald-500", label: "Complete" },
  error: { bar: "bg-destructive", label: "Failed" },
}

function statusIcon(status: UploadStatus) {
  switch (status) {
    case "queued":
      return (
        <svg
          className="size-4 text-muted-foreground"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
        </svg>
      )
    case "uploading":
      return (
        <svg
          className="size-4 animate-spin text-muted-foreground"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a9 9 0 1 0 9 9" />
        </svg>
      )
    case "complete":
      return (
        <svg
          className="size-4 text-emerald-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    case "error":
      return (
        <svg
          className="size-4 text-destructive"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      )
  }
}

export function UploadProgress({
  files,
  onSelect,
  onCancel,
  showCancel = true,
  className,
  ...props
}: UploadProgressProps) {
  return (
    <div className={cn("flex w-full flex-col gap-3", className)} {...props}>
      {files.map((file) => {
        const progress = Math.min(100, Math.max(0, file.progress ?? 0))
        const { bar, label } = statusVariant[file.status]
        return (
          <button
            key={file.id}
            type="button"
            onClick={() => onSelect?.(file)}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg border border-border bg-background p-3 text-start shadow-sm transition-colors",
              "hover:bg-muted/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            )}
          >
            <span className="shrink-0">{statusIcon(file.status)}</span>
            <span className="min-w-0 flex-1">
              <span className="flex items-baseline justify-between gap-2">
                <span className="truncate text-sm font-medium text-foreground">
                  {file.name}
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {formatFileSize(file.size) || label}
                </span>
              </span>
              <span className="mt-2 block h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <span
                  className={cn(
                    "block h-full rounded-full transition-all",
                    bar,
                    file.status === "uploading" && "animate-pulse"
                  )}
                  style={{ width: `${progress}%` }}
                />
              </span>
            </span>
            {showCancel && file.status !== "complete" && file.status !== "error" && (
              <span
                role="button"
                tabIndex={-1}
                onClick={(event) => {
                  event.stopPropagation()
                  onCancel?.(file)
                }}
                className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={`Cancel upload of ${file.name}`}
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
