"use client"

import * as React from "react"
import { ArrowUp, FileIcon, Paperclip, Square, X } from "lucide-react"

import { cn } from "@/lib/cn"

export type PromptInputStatus = "idle" | "streaming"

export interface PromptInputProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange" | "onSubmit"
  > {
  /** Controlled text — the component never owns it. */
  value: string
  onValueChange: (value: string) => void
  /** Fired on submit with the current text and attachments; the component never clears either. */
  onSubmit: (value: string, files: File[]) => void
  /** "streaming" swaps the send button for a Stop control; the field stays typable either way. */
  status?: PromptInputStatus
  /** Called when Stop is clicked (only rendered while `status === "streaming"`). */
  onStop?: () => void
  /** Rows the field grows to before it switches to internal scrolling. Default 8. */
  maxRows?: number
  /** Soft cap on characters — exceeding it disables submit; the field itself never truncates. */
  maxLength?: number
  /** Controlled attachment list. Omit for an uncontrolled component that tracks its own files. */
  files?: File[]
  onFilesChange?: (files: File[]) => void
  /** Native `accept` syntax — also used to filter pasted/dropped files. */
  accept?: string
  /** Left-aligned slot next to the attach button — model pickers, tool toggles, etc. */
  toolbar?: React.ReactNode
  /** Enter submits, Shift+Enter inserts a newline. Cmd/Ctrl+Enter always submits regardless. Default true. */
  submitOnEnter?: boolean
  /** Shows a character counter, turning destructive near/over `maxLength`. */
  counter?: boolean
}

function resizeTextarea(el: HTMLTextAreaElement, maxRows: number) {
  const style = window.getComputedStyle(el)
  let lineHeight = parseFloat(style.lineHeight)
  if (Number.isNaN(lineHeight)) lineHeight = parseFloat(style.fontSize) * 1.2
  const box =
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom) +
    parseFloat(style.borderTopWidth) +
    parseFloat(style.borderBottomWidth)
  const maxHeight = lineHeight * maxRows + box

  el.style.height = "auto"
  const next = Math.min(el.scrollHeight, maxHeight)
  el.style.height = `${next}px`
  el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden"
}

function matchesAccept(file: File, accept?: string): boolean {
  if (!accept) return true
  const type = file.type.toLowerCase()
  const name = file.name.toLowerCase()
  return accept
    .split(",")
    .map((rule) => rule.trim().toLowerCase())
    .filter(Boolean)
    .some((rule) => {
      if (rule.startsWith(".")) return name.endsWith(rule)
      if (rule.endsWith("/*")) return type.startsWith(rule.slice(0, -1))
      return type === rule
    })
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  const units = ["KB", "MB", "GB", "TB"]
  let size = bytes / 1024
  let unit = 0
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024
    unit += 1
  }
  const rounded = size >= 10 ? Math.round(size) : Math.round(size * 10) / 10
  return `${rounded} ${units[unit]}`
}

function fileKey(file: File): string {
  return `${file.name}-${file.size}-${file.lastModified}`
}

interface AttachmentThumbnailProps {
  file: File
  disabled?: boolean
  onRemove: () => void
}

function AttachmentThumbnail({ file, disabled, onRemove }: AttachmentThumbnailProps) {
  const isImage = file.type.startsWith("image/")
  const [url] = React.useState<string | null>(() =>
    isImage ? URL.createObjectURL(file) : null
  )

  React.useEffect(() => {
    return () => {
      if (url) URL.revokeObjectURL(url)
    }
  }, [url])

  if (isImage && url) {
    return (
      <li className="relative size-14 shrink-0 overflow-hidden rounded-lg border bg-muted">
        <img alt={file.name} className="size-full object-cover" src={url} />
        <button
          aria-label={`Remove ${file.name}`}
          className="absolute top-0.5 right-0.5 inline-flex size-5 items-center justify-center rounded-full bg-background/80 text-foreground shadow-xs backdrop-blur transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"
          disabled={disabled}
          onClick={onRemove}
          type="button"
        >
          <X aria-hidden="true" className="size-3" />
        </button>
      </li>
    )
  }

  return (
    <li className="flex max-w-48 shrink-0 items-center gap-1.5 rounded-lg border bg-muted px-2 py-1.5 text-xs">
      <FileIcon aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground" />
      <span className="min-w-0 flex-1 truncate">{file.name}</span>
      <span className="shrink-0 text-muted-foreground">{formatBytes(file.size)}</span>
      <button
        aria-label={`Remove ${file.name}`}
        className="shrink-0 rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"
        disabled={disabled}
        onClick={onRemove}
        type="button"
      >
        <X aria-hidden="true" className="size-3.5" />
      </button>
    </li>
  )
}

const iconButtonClass =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"

const sendButtonClass =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"

export const PromptInput = React.forwardRef<HTMLTextAreaElement, PromptInputProps>(
  (
    {
      value,
      onValueChange,
      onSubmit,
      status = "idle",
      onStop,
      maxRows = 8,
      maxLength,
      files,
      onFilesChange,
      accept,
      toolbar,
      submitOnEnter = true,
      counter = false,
      disabled = false,
      placeholder,
      className,
      onKeyDown,
      onPaste,
      ...props
    },
    ref,
  ) => {
    const descriptionId = React.useId()
    const counterId = `${descriptionId}-counter`

    const innerRef = React.useRef<HTMLTextAreaElement | null>(null)
    const fileInputRef = React.useRef<HTMLInputElement>(null)
    const dragDepthRef = React.useRef(0)

    const setRefs = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        innerRef.current = node
        if (typeof ref === "function") ref(node)
        else if (ref) ref.current = node
      },
      [ref],
    )

    const [internalFiles, setInternalFiles] = React.useState<File[]>([])
    const [dragActive, setDragActive] = React.useState(false)

    const filesControlled = files !== undefined
    const currentFiles = filesControlled ? files : internalFiles

    const updateFiles = (next: File[]) => {
      if (!filesControlled) setInternalFiles(next)
      onFilesChange?.(next)
    }

    const addFiles = (incoming: File[]) => {
      const accepted = incoming.filter((f) => matchesAccept(f, accept))
      if (accepted.length === 0) return
      const seen = new Set(currentFiles.map(fileKey))
      const fresh = accepted.filter((file) => {
        const key = fileKey(file)
        if (seen.has(key)) return false
        seen.add(key)
        return true
      })
      if (fresh.length > 0) updateFiles([...currentFiles, ...fresh])
    }

    const removeFileAt = (index: number) => {
      updateFiles(currentFiles.filter((_, i) => i !== index))
    }

    React.useLayoutEffect(() => {
      const el = innerRef.current
      if (el) resizeTextarea(el, maxRows)
    }, [value, maxRows])

    const overLimit = maxLength !== undefined && value.length > maxLength
    const nearLimit =
      maxLength !== undefined && !overLimit && value.length >= maxLength * 0.9
    const submitDisabled = disabled || value.trim().length === 0 || overLimit

    const submit = () => {
      if (submitDisabled) return
      onSubmit(value, currentFiles)
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onValueChange(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.nativeEvent.isComposing) {
        const forceSubmit = e.metaKey || e.ctrlKey
        const wantsSubmit = forceSubmit || (submitOnEnter && !e.shiftKey)
        if (wantsSubmit && status !== "streaming" && !submitDisabled) {
          e.preventDefault()
          onSubmit(value, currentFiles)
        }
      }
      onKeyDown?.(e)
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
      const pasted = Array.from(e.clipboardData?.files ?? [])
      if (pasted.length > 0) {
        e.preventDefault()
        addFiles(pasted)
      }
      onPaste?.(e)
    }

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
      if (disabled || !e.dataTransfer.types.includes("Files")) return
      e.preventDefault()
      dragDepthRef.current += 1
      setDragActive(true)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      if (disabled) return
      e.preventDefault()
    }

    const handleDragLeave = () => {
      if (disabled) return
      dragDepthRef.current = Math.max(0, dragDepthRef.current - 1)
      if (dragDepthRef.current === 0) setDragActive(false)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      if (disabled) return
      e.preventDefault()
      dragDepthRef.current = 0
      setDragActive(false)
      addFiles(Array.from(e.dataTransfer.files))
    }

    return (
      <div
        className={cn(
          "flex w-full flex-col gap-2 rounded-2xl border border-input bg-background p-2 shadow-xs transition-colors motion-reduce:transition-none",
          "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
          dragActive && "border-primary bg-primary/5",
          disabled && "opacity-60",
          className,
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          accept={accept}
          className="hidden"
          disabled={disabled}
          multiple
          onChange={(e) => {
            const picked = Array.from(e.target.files ?? [])
            e.target.value = ""
            if (picked.length > 0) addFiles(picked)
          }}
          ref={fileInputRef}
          tabIndex={-1}
          type="file"
        />

        {currentFiles.length > 0 && (
          <ul aria-label="Attachments" className="flex flex-wrap gap-2 px-1 pt-1">
            {currentFiles.map((file, index) => (
              <AttachmentThumbnail
                disabled={disabled}
                file={file}
                key={fileKey(file)}
                onRemove={() => removeFileAt(index)}
              />
            ))}
          </ul>
        )}

        <textarea
          aria-describedby={counter ? counterId : undefined}
          aria-label={placeholder ?? "Prompt input"}
          className="w-full resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={placeholder}
          ref={setRefs}
          rows={1}
          value={value}
          {...props}
        />

        <div className="flex items-center justify-between gap-2 px-1 pb-1">
          <div className="flex min-w-0 items-center gap-1">
            <button
              aria-label="Attach files"
              className={iconButtonClass}
              disabled={disabled}
              onClick={() => fileInputRef.current?.click()}
              type="button"
            >
              <Paperclip aria-hidden="true" className="size-4" />
            </button>
            {toolbar}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {counter && (
              <span
                className={cn(
                  "text-xs tabular-nums",
                  overLimit || nearLimit ? "text-destructive" : "text-muted-foreground",
                )}
                id={counterId}
              >
                {value.length}
                {maxLength !== undefined ? `/${maxLength}` : ""}
              </span>
            )}

            {status === "streaming" ? (
              <button
                aria-label="Stop generating"
                className={sendButtonClass}
                disabled={disabled}
                onClick={() => onStop?.()}
                type="button"
              >
                <Square aria-hidden="true" className="size-3 fill-current" />
              </button>
            ) : (
              <button
                aria-label="Send message"
                className={sendButtonClass}
                disabled={submitDisabled}
                onClick={submit}
                type="button"
              >
                <ArrowUp aria-hidden="true" className="size-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    )
  },
)

PromptInput.displayName = "PromptInput"

export default PromptInput