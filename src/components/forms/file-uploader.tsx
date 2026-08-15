"use client"

import * as React from "react"
import { UploadCloud, X } from "lucide-react"
import { cn } from "@/lib/cn"

export interface FileUploaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  browseLabel?: string
  multiple?: boolean
  accept?: string
  disabled?: boolean
  showList?: boolean
  onFilesSelected?: (files: File[]) => void
  className?: string
}

export function FileUploader({
  label = "Upload your file(s)",
  description,
  browseLabel = "Browse files",
  multiple = true,
  accept,
  disabled = false,
  showList = true,
  onFilesSelected,
  className,
  ...props
}: FileUploaderProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [files, setFiles] = React.useState<File[]>([])
  const [dragging, setDragging] = React.useState(false)

  const handleFiles = (list: FileList | null) => {
    if (!list) return
    const next = Array.from(list)
    const merged = multiple ? [...files, ...next] : next
    setFiles(merged)
    onFilesSelected?.(merged)
  }

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index)
    setFiles(next)
    onFilesSelected?.(next)
  }

  return (
    <div
      {...props}
      className={cn("w-full", className)}
      onDragOver={(e) => {
        e.preventDefault()
        if (!disabled) setDragging(true)
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragging(false)
        if (!disabled) handleFiles(e.dataTransfer.files)
      }}
    >
      <label
        htmlFor="varsys-file-uploader"
        className={cn(
          "flex cursor-pointer flex-col items-center rounded-lg border border-dashed p-4 text-foreground shadow-sm transition-colors sm:p-6",
          dragging && !disabled && "border-primary bg-primary/5",
          disabled && "cursor-not-allowed opacity-60",
        )}
      >
        <UploadCloud className="size-6" />
        <span className="mt-4 text-sm font-medium">{label}</span>
        {description ? (
          <span className="mt-1 text-xs text-muted-foreground">{description}</span>
        ) : null}
        <span className="mt-2 inline-block rounded-md border border-border bg-muted px-3 py-1.5 text-center text-xs font-medium text-foreground shadow-sm hover:bg-accent">
          {browseLabel}
        </span>
        <input
          ref={inputRef}
          id="varsys-file-uploader"
          multiple={multiple}
          accept={accept}
          type="file"
          disabled={disabled}
          className="sr-only"
          onChange={(e) => {
            handleFiles(e.target.files)
            e.target.value = ""
          }}
        />
      </label>

      {showList && files.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.lastModified}`}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 py-2 text-sm"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-foreground">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={`Remove ${file.name}`}
              >
                <X className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default FileUploader
