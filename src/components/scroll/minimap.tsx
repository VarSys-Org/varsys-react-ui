"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MinimapProviderProps {
  children: React.ReactNode
  scrollRef?: React.RefObject<HTMLElement | null>
}

interface MinimapContextValue {
  scrollRef?: React.RefObject<HTMLElement | null>
  progress: number
  scrollTo: (progress: number) => void
}

const MinimapContext = React.createContext<MinimapContextValue>({
  progress: 0,
  scrollTo: () => {},
})

export const useMinimap = () => React.useContext(MinimapContext)

export const MinimapProvider = ({
  children,
  scrollRef,
}: MinimapProviderProps) => {
  const [progress, setProgress] = React.useState(0)

  React.useLayoutEffect(() => {
    const getScroller = () =>
      (scrollRef?.current as HTMLElement | null) ??
      (document.scrollingElement as HTMLElement | null)

    const updateProgress = () => {
      const scroller = getScroller()
      if (!scroller) return
      const maxScroll = scroller.scrollHeight - scroller.clientHeight
      if (maxScroll <= 0) {
        setProgress(0)
        return
      }
      setProgress(scroller.scrollTop / maxScroll)
    }

    const raf = () => {
      updateProgress()
      rafId = window.requestAnimationFrame(raf)
    }
    let rafId = window.requestAnimationFrame(raf)

    updateProgress()
    window.addEventListener("resize", updateProgress)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener("resize", updateProgress)
    }
  }, [scrollRef])

  const scrollTo = React.useCallback(
    (nextProgress: number) => {
      const scroller =
        (scrollRef?.current as HTMLElement | null) ??
        (document.scrollingElement as HTMLElement | null)
      if (!scroller) return
      const clamped = Math.min(1, Math.max(0, nextProgress))
      const maxScroll = scroller.scrollHeight - scroller.clientHeight
      scroller.scrollTop = clamped * maxScroll
    },
    [scrollRef],
  )

  const contextValue = React.useMemo(
    () => ({ scrollRef, progress, scrollTo }),
    [scrollRef, progress, scrollTo],
  )

  return (
    <MinimapContext.Provider value={contextValue}>
      {children}
    </MinimapContext.Provider>
  )
}

export interface MinimapProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number
  width?: number
  scrollRef?: React.RefObject<HTMLElement | null>
}

const MinimapViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { height: number }
>(({ height, className, ...props }, forwardedRef) => {
  const trackRef = React.useRef<HTMLDivElement>(null)
  const isDragging = React.useRef(false)
  const { progress, scrollTo } = useMinimap()

  const handlePointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      isDragging.current = true
      const track = trackRef.current
      if (!track) return
      const rect = track.getBoundingClientRect()
      const ratio = (event.clientY - rect.top) / rect.height
      scrollTo(ratio)
    },
    [scrollTo],
  )

  const handlePointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return
      const track = trackRef.current
      if (!track) return
      const rect = track.getBoundingClientRect()
      const ratio = (event.clientY - rect.top) / rect.height
      scrollTo(ratio)
    },
    [scrollTo],
  )

  const stopDragging = React.useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <div
      ref={trackRef}
      className={cn(
        "relative w-full touch-none select-none overflow-hidden rounded-md border border-border bg-muted",
        className,
      )}
      style={{ height }}
      role="slider"
      aria-label="Scroll minimap"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
      {...props}
    >
      <MinimapLine
        className="pointer-events-none absolute inset-x-0 z-20"
        style={{ top: `${Math.min(1, Math.max(0, progress)) * 100}%` }}
      />
    </div>
  )
})

MinimapViewport.displayName = "MinimapViewport"

export const Minimap = React.forwardRef<HTMLDivElement, MinimapProps>(
  (
    { height = 160, width = 12, scrollRef, className, ...props },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cn("relative", className)}
        style={{ width }}
        {...props}
      >
        <MinimapProvider scrollRef={scrollRef}>
          <MinimapViewport height={height} />
        </MinimapProvider>
      </div>
    )
  },
)

Minimap.displayName = "Minimap"

export interface MinimapTrackProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const MinimapTrack = React.forwardRef<
  HTMLDivElement,
  MinimapTrackProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      data-slot="minimap-track"
      className={cn(
        "pointer-events-none absolute inset-0 z-10 flex flex-col gap-1 px-1 py-1",
        className,
      )}
      {...props}
    />
  )
})

MinimapTrack.displayName = "MinimapTrack"

export interface MinimapItemProps extends React.HTMLAttributes<HTMLDivElement> {
  position: number
  active?: boolean
}

export const MinimapItem = React.forwardRef<HTMLDivElement, MinimapItemProps>(
  ({ position, active, className, style, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        data-slot="minimap-item"
        data-active={active || undefined}
        className={cn(
          "h-1 w-full rounded-full transition-colors",
          "bg-foreground/25",
          "data-active:bg-primary",
          className,
        )}
        style={{ marginTop: `${position * 100}%`, ...style }}
        {...props}
      />
    )
  },
)

MinimapItem.displayName = "MinimapItem"

export interface MinimapLineProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const MinimapLine = React.forwardRef<HTMLDivElement, MinimapLineProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        data-slot="minimap-line"
        className={cn(
          "h-4 w-full border-y border-primary bg-primary/15",
          className,
        )}
        {...props}
      />
    )
  },
)

MinimapLine.displayName = "MinimapLine"

export interface MinimapBubbleProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const MinimapBubble = React.forwardRef<
  HTMLDivElement,
  MinimapBubbleProps
>(({ className, ...props }, forwardedRef) => {
  const { progress } = useMinimap()
  return (
    <div
      ref={forwardedRef}
      data-slot="minimap-bubble"
      className={cn(
        "rounded-md bg-foreground px-1.5 py-0.5 text-xs font-medium text-background shadow-md",
        className,
      )}
      {...props}
    >
      {Math.round(progress * 100)}%
    </div>
  )
})

MinimapBubble.displayName = "MinimapBubble"

export default Minimap
