import { useRef, useState } from "react"
import { UploadCloud } from "lucide-react"
import { cn } from "@/lib/utils"

export function UploadFileCard({
  className,
  accept,
  multiple,
  onFilesSelected,
}: {
  className?: string
  accept?: string
  multiple?: boolean
  onFilesSelected?: (files: FileList) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return
    setFileName(
      multiple ? `${files.length} files selected` : files[0].name
    )
    onFilesSelected?.(files)
  }

  return (
    <div
      className={cn(
        "mx-auto mt-12 flex h-40 max-w-md items-center justify-center rounded-lg border-2 border-dashed transition-colors",
        isDragging ? "border-primary bg-primary/5" : "border-border",
        className
      )}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault()
        setIsDragging(false)
        handleFiles(e.dataTransfer.files)
      }}
    >
      <label className="cursor-pointer p-4 text-center md:p-8" htmlFor="file">
        <UploadCloud className="mx-auto h-10 w-10 text-primary" />
        <p className="mx-auto mt-3 max-w-xs text-muted-foreground">
          {fileName ? (
            <span className="font-medium text-foreground">{fileName}</span>
          ) : (
            <>
              Click to{" "}
              <span className="font-medium text-primary">Upload your file</span>{" "}
              or drag and drop your file here
            </>
          )}
        </p>
      </label>
      <input
        accept={accept}
        className="hidden"
        id="file"
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
        ref={inputRef}
        type="file"
      />
    </div>
  )
}
