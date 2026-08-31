"use client"

import * as React from "react"
import { useState } from "react"
import { AlertCircle, ImageUp, Upload, X } from "lucide-react"

import { cn } from "@/lib/cn"

export interface ImageUploadProps {
  /** Max allowed size in MB. Defaults to 5. */
  maxSizeMB?: number
  /** Accepted MIME / extension list. Defaults to "image/*". */
  accept?: string
  /** Prompt text shown inside the empty dropzone. */
  label?: string
  /** Helper line under the prompt (defaults to a max-size hint). */
  hint?: string
  /** Pre-seeded image URL (uncontrolled initial value). */
  initialUrl?: string
  /** Name shown for the pre-seeded image. */
  initialName?: string
  /** Called with the newly selected File, or null when removed. */
  onImageChange?: (file: File | null) => void
  className?: string
}

type UploadedImage = {
  id: string
  name: string
  url: string
  file?: File
}

export function ImageUpload({
  maxSizeMB = 5,
  accept = "image/*",
  label = "Drop your image here",
  hint,
  initialUrl,
  initialName = "",
  onImageChange,
  className,
}: ImageUploadProps) {
  const maxSize = maxSizeMB * 1024 * 1024
  const {
    image,
    isDragging,
    errors,
    openFileDialog,
    getInputProps,
    removeFile,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useImageUpload({ accept, maxSize, initialUrl, initialName, onImageChange })

  const resolvedHint = hint ?? `SVG, PNG, JPG or GIF (max. ${maxSizeMB}MB)`

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="relative">
        <div
          role="button"
          tabIndex={-1}
          aria-label="Upload image"
          data-dragging={isDragging || undefined}
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "relative flex min-h-52 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-input p-4 transition-colors outline-none",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
            "hover:bg-accent/50 data-[dragging=true]:bg-accent/50",
            image && "border-solid",
          )}
        >
          <input
            {...getInputProps()}
            aria-label="Upload image file"
            className="sr-only"
            tabIndex={-1}
          />
          {image ? (
            <img
              alt={image.name || "Uploaded image"}
              src={image.url}
              className="size-full max-h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                aria-hidden="true"
                className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
              >
                <ImageUp className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground">{resolvedHint}</p>
              <Button
                className="mt-4"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation()
                  openFileDialog()
                }}
              >
                <Upload aria-hidden="true" className="size-4 opacity-60" />
                Select image
              </Button>
            </div>
          )}
        </div>
        {image && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              aria-label="Remove image"
              onClick={removeFile}
              className="z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div role="alert" className="flex items-center gap-1 text-xs text-destructive">
          <AlertCircle className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  )
}

function useImageUpload({
  accept,
  maxSize,
  initialUrl,
  initialName,
  onImageChange,
}: {
  accept: string
  maxSize: number
  initialUrl?: string
  initialName?: string
  onImageChange?: (file: File | null) => void
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<UploadedImage | null>(
    initialUrl ? { id: initialUrl, name: initialName ?? "", url: initialUrl } : null,
  )
  const [isDragging, setIsDragging] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const validate = (file: File): string | null => {
    if (file.size > maxSize) {
      return `File exceeds the maximum size of ${formatBytes(maxSize)}.`
    }
    const acceptedTypes = accept.split(",").map((t) => t.trim()).filter(Boolean)
    const isAccepted = acceptedTypes.some((type) => {
      if (type.endsWith("/*")) return file.type.startsWith(type.slice(0, -1))
      if (type.startsWith(".")) return file.name.toLowerCase().endsWith(type.toLowerCase())
      return file.type === type
    })
    if (accept !== "*" && !isAccepted) {
      return "File is not an accepted image type."
    }
    return null
  }

  const addFiles = (fileList: FileList | File[]) => {
    const files = Array.from(fileList)
    if (files.length === 0) return

    const nextErrors: string[] = []
    let added: UploadedImage | null = null

    for (const file of files) {
      const error = validate(file)
      if (error) {
        nextErrors.push(error)
        continue
      }
      if (added) URL.revokeObjectURL(added.url)
      added = {
        id: `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        name: file.name,
        url: URL.createObjectURL(file),
        file,
      }
    }

    setErrors(nextErrors)
    if (added) {
      setImage((prev) => {
        if (prev?.file) URL.revokeObjectURL(prev.url)
        return added
      })
      onImageChange?.(added.file ?? null)
    }
  }

  const removeFile = () => {
    setImage((prev) => {
      if (prev?.file) URL.revokeObjectURL(prev.url)
      onImageChange?.(null)
      return null
    })
    setErrors([])
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
  }

  const openFileDialog = () => inputRef.current?.click()

  const getInputProps = (props: React.InputHTMLAttributes<HTMLInputElement> = {}) => ({
    ...props,
    accept,
    ref: inputRef,
    type: "file" as const,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) addFiles(e.target.files)
      e.target.value = ""
    },
  })

  return {
    image,
    isDragging,
    errors,
    addFiles,
    removeFile,
    openFileDialog,
    getInputProps,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  }
}

function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))}${sizes[i]}`
}

function Button({
  className,
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
}) {
  return (
    <button
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent px-2.5 text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/80",
        variant === "outline" &&
          "border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        variant === "ghost" && "hover:bg-muted hover:text-foreground",
        className,
      )}
      {...props}
    />
  )
}

export default ImageUpload