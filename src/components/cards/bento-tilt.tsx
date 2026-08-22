import * as React from "react"
import { Clock3 } from "lucide-react"

import { cn } from "@/lib/cn"

export interface BentoTiltProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum tilt angle in degrees. */
  strength?: number
  /** Scale applied to the card while tilting. */
  scale?: number
}

export const BentoTilt = React.forwardRef<HTMLDivElement, BentoTiltProps>(
  (
    { className, strength = 5, scale = 0.95, children, ...props },
    ref,
  ) => {
    const [transform, setTransform] = React.useState("")
    const itemRef = React.useRef<HTMLDivElement>(null)

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const el = itemRef.current
      if (!el) return
      const { left, top, width, height } = el.getBoundingClientRect()
      const relativeX = (event.clientX - left) / width
      const relativeY = (event.clientY - top) / height
      const tiltX = (relativeY - 0.5) * strength
      const tiltY = (relativeX - 0.5) * -strength
      setTransform(
        `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      )
    }

    const handleMouseLeave = () => setTransform("")

    return (
      <div
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "transition-transform duration-300 ease-out will-change-transform",
          className,
        )}
        style={{ transform, ...props.style }}
        {...props}
      >
        {children}
      </div>
    )
  },
)

BentoTilt.displayName = "BentoTilt"

export interface BentoTiltCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Card title. */
  title?: React.ReactNode
  /** Short supporting description. */
  description?: string
  /** Render a "Coming soon" badge. */
  comingSoon?: boolean
  /** Optional icon shown above the title. */
  icon?: React.ReactNode
  /** Optional background image URL. */
  image?: string
}

export function BentoTiltCard({
  title,
  description,
  comingSoon,
  icon,
  image,
  className,
  children,
  ...props
}: BentoTiltCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-card p-5 text-card-foreground",
        className,
      )}
      {...props}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-20 transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className="relative z-10">
        {icon && <div className="flex size-9 items-center justify-center">{icon}</div>}
        {title && <h3 className="mt-3 text-lg font-semibold">{title}</h3>}
        {description && (
          <p className="mt-2 max-w-64 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="relative z-10">
        {comingSoon && (
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            <Clock3 aria-hidden="true" className="size-3" />
            Coming soon
          </span>
        )}
        {children}
      </div>
    </div>
  )
}

export default BentoTilt