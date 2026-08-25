"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react"

import { cn } from "@/lib/cn"

export interface TiltedCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Image source rendered inside the card. */
  imageSrc?: string
  /** Accessible label for the image. */
  altText?: string
  /** Caption displayed in the tooltip on hover. */
  captionText?: string
  /** Height of the outer container. */
  containerHeight?: string
  /** Width of the outer container. */
  containerWidth?: string
  /** Height of the rendered image. */
  imageHeight?: string
  /** Width of the rendered image. */
  imageWidth?: string
  /** Scale factor applied to the image on hover. */
  scaleOnHover?: number
  /** Maximum tilt amplitude in degrees. */
  rotateAmplitude?: number
  /** Show a warning banner on touch devices. */
  showMobileWarning?: boolean
  /** Show the caption tooltip that follows the pointer. */
  showTooltip?: boolean
  /** Content layered above the image. */
  overlayContent?: React.ReactNode
  /** Whether the overlay content is visible. */
  displayOverlayContent?: boolean
}

export function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  className,
  ...props
}: TiltedCardProps) {
  const ref = React.useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = React.useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]),
    { stiffness: 150, damping: 20 },
  )
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]),
    { stiffness: 150, damping: 20 },
  )

  const glareX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100])
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, hsl(var(--primary) / 0.25), transparent 60%)`

  const captionX = useSpring(useTransform(x, [-0.5, 0.5], [containerHeight.includes("px") ? -30 : -30, 30]), {
    stiffness: 150,
    damping: 20,
  })
  const captionY = useSpring(useTransform(y, [-0.5, 0.5], [-30, 30]), {
    stiffness: 150,
    damping: 20,
  })

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5
    x.set(offsetX)
    y.set(offsetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <figure
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      style={{ height: containerHeight, width: containerWidth }}
      {...props}
    >
      {isMobile && showMobileWarning && (
        <div className="absolute inset-0 z-50 flex items-center justify-center rounded-xl bg-background/80 text-xs text-muted-foreground">
          This effect is intended for desktop devices
        </div>
      )}

      <motion.div
        data-slot="tilted-card"
        className="relative h-full w-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          draggable={false}
          className="rounded-xl object-cover shadow-lg"
          style={{ height: imageHeight, width: imageWidth, transform: `scale(${scaleOnHover})` }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{ background: glareBackground }}
        />
      </motion.div>

      {overlayContent && displayOverlayContent && (
        <div className="absolute inset-0 z-40 flex items-center justify-center rounded-xl">
          {overlayContent}
        </div>
      )}

      {showTooltip && captionText && (
        <motion.figcaption
          className="pointer-events-none absolute z-50 rounded-lg bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-md"
          style={{ x: captionX, y: captionY }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  )
}

export default TiltedCard
