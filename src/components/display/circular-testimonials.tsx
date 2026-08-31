"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/cn"

let circularTestimonialStylesInjected = false

function ensureCircularTestimonialStyles() {
  if (typeof document === "undefined" || circularTestimonialStylesInjected) return
  circularTestimonialStylesInjected = true
  const style = document.createElement("style")
  style.textContent = `
@keyframes ct-name-in {
  from { transform: translateY(var(--ct-from, -120%)); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes ct-word-in {
  from { filter: blur(8px); opacity: 0; transform: translateY(6px); }
  to { filter: blur(0); opacity: 1; transform: translateY(0); }
}
`
  document.head.appendChild(style)
}

export interface CircularTestimonialItem {
  id: string
  quote: string
  name: string
  designation: string
  src: string
}

export interface CircularTestimonialsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: CircularTestimonialItem[]
  /** Advance automatically every `autoplayInterval` ms. */
  autoplay?: boolean
  autoplayInterval?: number
  isRTL?: boolean
  /** Gap between the portrait fan and the quote column (any CSS length). */
  gap?: string
  imageWidth?: string
  imageBorderRadius?: string
  imageAspectRatio?: string
  /** Horizontal shift of the portrait fan relative to the quote. */
  imageContainerTranslateX?: string
  arrowIconSize?: number
  /** Font size of the quote text in px. */
  fontSize?: number
  className?: string
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"

function calculateGap(width: number) {
  const minWidth = 1024
  const maxWidth = 1456
  const minGap = 60
  const maxGap = 86
  if (width <= minWidth) return minGap
  if (width >= maxWidth) return maxGap + 0.06018 * (width - maxWidth)
  return minGap + ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth)
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  autoplayInterval = 5000,
  isRTL = false,
  gap = "4.7rem",
  imageWidth = "77%",
  imageBorderRadius = "1.5rem",
  imageAspectRatio = "1 / 1",
  imageContainerTranslateX = "76px",
  arrowIconSize = 24,
  fontSize = 18,
  className,
  ...props
}: CircularTestimonialsProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(1)
  const [autoplayActive, setAutoplayActive] = React.useState(autoplay)
  const [stickUp, setStickUp] = React.useState(60)
  const imageContainerRef = React.useRef<HTMLDivElement>(null)
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null)
  const total = testimonials.length

  React.useEffect(() => {
    ensureCircularTestimonialStyles()
  }, [])

  const updateTestimonial = React.useCallback(
    (dir: number) => {
      setDirection(dir)
      setActiveIndex((prev) => (prev + dir + total) % total)
    },
    [total],
  )

  const stopAutoplay = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setAutoplayActive(false)
  }, [])

  const handleNext = React.useCallback(() => {
    updateTestimonial(1)
    stopAutoplay()
  }, [updateTestimonial, stopAutoplay])

  const handlePrev = React.useCallback(() => {
    updateTestimonial(-1)
    stopAutoplay()
  }, [updateTestimonial, stopAutoplay])

  React.useEffect(() => {
    if (!autoplayActive) return
    intervalRef.current = setInterval(() => updateTestimonial(1), autoplayInterval)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [autoplayActive, autoplayInterval, updateTestimonial])

  React.useEffect(() => {
    const el = imageContainerRef.current
    if (!el) return
    const measure = () => setStickUp(calculateGap(el.offsetWidth) * 0.8)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const active = testimonials[activeIndex]
  const fromY = direction === 1 ? -120 : 120

  const fanTranslateX = (() => {
    const match = imageContainerTranslateX.match(/-?\d+(\.\d+)?/)
    if (!match) return imageContainerTranslateX
    const num = parseFloat(match[0])
    const unit = imageContainerTranslateX.replace(match[0], "")
    return `${isRTL ? -num : num}${unit}`
  })()

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={cn("w-full", className)} {...props}>
      <div className="grid items-center gap-y-10 md:grid-cols-2" style={{ gap }}>
        <div
          ref={imageContainerRef}
          className="relative aspect-square min-h-[300px]"
          style={{
            perspective: "1000px",
            transform: `translateX(${fanTranslateX})`,
          }}
        >
          {testimonials.map((t, index) => {
            let offset = index - activeIndex
            if (isRTL) offset = -offset
            if (offset > total / 2) offset -= total
            if (offset < -total / 2) offset += total

            const isActive = offset === 0
            const zIndex = total - Math.abs(offset)
            let x = 0
            let y = 0
            let rotateY = 0
            if (offset > 0) {
              x = 20
              y = -stickUp
              rotateY = -15
            } else if (offset < 0) {
              x = -20
              y = -stickUp
              rotateY = 15
            }

            return (
              <img
                key={t.id}
                src={t.src}
                alt={t.name}
                loading="lazy"
                decoding="async"
                className="absolute left-0 top-0 h-auto object-cover shadow-lg"
                style={{
                  width: imageWidth,
                  aspectRatio: imageAspectRatio,
                  borderRadius: imageBorderRadius,
                  opacity: isActive ? 1 : 0.7,
                  zIndex,
                  transform: `translateX(${x}%) translateY(${y}px) scale(${isActive ? 1 : 0.85}) rotateY(${rotateY}deg)`,
                  transition: `transform 0.8s ${EASE}, opacity 0.4s ease`,
                }}
              />
            )
          })}
        </div>

        <div className="relative flex flex-col justify-between">
          <div key={activeIndex} className="overflow-hidden">
            <div
              style={
                {
                  animation: `ct-name-in 0.8s ${EASE} both`,
                  "--ct-from": `${fromY}%`,
                } as React.CSSProperties
              }
            >
              <h3 className="text-2xl font-bold text-foreground">{active.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{active.designation}</p>
            </div>
          </div>

          <blockquote
            key={`quote-${active.id}`}
            className="mt-6 leading-relaxed text-foreground"
            style={{ fontSize: `${fontSize}px` }}
          >
            {active.quote.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ animation: `ct-word-in 0.35s ease both ${index * 0.02}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </blockquote>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-foreground text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft size={arrowIconSize} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-foreground text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowRight size={arrowIconSize} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircularTestimonials