"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/cn"

export interface TagsInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value?: string[]
  onValueChange?: (tags: string[]) => void
  onTagsChange?: (tags: string[]) => void
  placeholder?: string
  separator?: string | RegExp
  maxTags?: number
  disabled?: boolean
  error?: boolean
  className?: string
  inputClassName?: string
}

export function TagsInput({
  value: tags = [],
  onValueChange,
  onTagsChange,
  placeholder = "Type and press Enter to add...",
  separator = /[,\n]/,
  maxTags,
  disabled,
  error,
  className,
  inputClassName,
  onKeyDown,
  onBlur,
  ...props
}: TagsInputProps) {
  const [inputValue, setInputValue] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const emitChange = React.useCallback(
    (next: string[]) => {
      onValueChange?.(next)
      onTagsChange?.(next)
    },
    [onValueChange, onTagsChange],
  )

  const addTags = React.useCallback(
    (raw: string) => {
      const parsed = raw
        .split(separator)
        .map((tag) => tag.trim())
        .filter(Boolean)
      if (parsed.length === 0) return
      const next = [...tags]
      for (const tag of parsed) {
        if (maxTags != null && next.length >= maxTags) break
        if (!next.includes(tag)) next.push(tag)
      }
      if (next.length !== tags.length) emitChange(next)
    },
    [tags, separator, maxTags, emitChange],
  )

  const removeTag = React.useCallback(
    (index: number) => {
      emitChange(tags.filter((_, i) => i !== index))
    },
    [tags, emitChange],
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value

    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault()
      addTags(value)
      setInputValue("")
    } else if (
      event.key === "Backspace" &&
      value === "" &&
      tags.length > 0
    ) {
      event.preventDefault()
      removeTag(tags.length - 1)
    }

    onKeyDown?.(event)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.trim()) {
      addTags(event.currentTarget.value)
      setInputValue("")
    }
    onBlur?.(event)
  }

  return (
    <div
      className={cn(
        "flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-lg border border-input bg-transparent px-2 py-1.5 text-sm shadow-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
        error && "border-destructive focus-within:border-destructive focus-within:ring-destructive/30",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {tags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
        >
          {tag}
          {!disabled && (
            <button
              type="button"
              aria-label={`Remove tag ${tag}`}
              onClick={(event) => {
                event.stopPropagation()
                removeTag(index)
              }}
              className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="size-3.5" />
            </button>
          )}
        </span>
      ))}
      <input
        ref={inputRef}
        value={inputValue}
        disabled={disabled}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={tags.length === 0 ? placeholder : undefined}
        aria-invalid={error || undefined}
        className={cn(
          "min-w-28 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
          inputClassName,
        )}
        {...props}
      />
    </div>
  )
}

export default TagsInput