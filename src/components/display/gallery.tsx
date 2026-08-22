import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/cn"
import { Button } from "@/components/buttons/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/overlays/dialog"

export interface GalleryItem {
  /** Image URL. */
  src: string
  /** Accessible description of the image. */
  alt?: string
  /** Optional caption shown on hover and in the lightbox. */
  title?: string
}

export interface GalleryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Images to display. */
  items: GalleryItem[]
  /** Number of columns on large screens. */
  columns?: 1 | 2 | 3 | 4
  /** Aspect ratio applied to every tile. */
  aspect?: "square" | "video" | "auto"
  /** Open a lightbox when a tile is clicked. */
  lightbox?: boolean
}

const COLUMNS: Record<number, string> = {
  1: "grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

const ASPECT: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  auto: "",
}

export function Gallery({
  items,
  columns = 3,
  aspect = "square",
  lightbox = true,
  className,
  ...props
}: GalleryProps) {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  const showPrev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const showNext = () => setIndex((i) => (i + 1) % items.length)

  const current = items[index]

  return (
    <>
      <div
        className={cn("grid gap-3", COLUMNS[columns] ?? COLUMNS[3], className)}
        {...props}
      >
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              if (!lightbox) return
              setIndex(i)
              setOpen(true)
            }}
            className="group relative overflow-hidden rounded-lg bg-muted"
          >
            <img
              src={item.src}
              alt={item.alt ?? item.title ?? ""}
              className={cn(
                "size-full object-cover transition-transform duration-300 group-hover:scale-105",
                ASPECT[aspect] ?? ASPECT.square,
              )}
            />
            {item.title && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.title}
              </span>
            )}
          </button>
        ))}
      </div>

      {lightbox && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl gap-2 p-2 sm:p-3">
            <DialogTitle className="sr-only">
              {current?.title ?? "Gallery image"}
            </DialogTitle>
            {current && (
              <img
                src={current.src}
                alt={current.alt ?? current.title ?? ""}
                className="max-h-[70vh] w-full rounded-lg object-contain"
              />
            )}
            {current?.title && (
              <p className="px-2 text-center text-sm text-muted-foreground">
                {current.title}
              </p>
            )}
            <div className="flex items-center justify-center gap-2 pb-1">
              <Button variant="outline" size="sm" onClick={showPrev}>
                <ChevronLeft aria-hidden="true" />
                Previous
              </Button>
              <span className="text-xs tabular-nums text-muted-foreground">
                {index + 1} / {items.length}
              </span>
              <Button variant="outline" size="sm" onClick={showNext}>
                Next
                <ChevronRight aria-hidden="true" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default Gallery