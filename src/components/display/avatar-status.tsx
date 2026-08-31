import * as React from "react"
import { cn } from "@/lib/cn"

export type AvatarStatus = "online" | "away" | "busy" | "offline"

export interface AvatarStatusProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Avatar image URL. When omitted (or on load error) the fallback initials are shown. */
  src?: string
  /** Alt text for the image. */
  alt?: string
  /** Fallback initials/label rendered while loading or when no image is available. */
  fallback: string
  /** Presence indicator. */
  status?: AvatarStatus
  /** Avatar size. */
  size?: "sm" | "md" | "lg"
  /** Ring color behind the status dot (defaults to the page background). */
  ringClassName?: string
}

const sizeMap = {
  sm: { avatar: "size-8 text-xs", dot: "size-2.5" },
  md: { avatar: "size-10 text-sm", dot: "size-3" },
  lg: { avatar: "size-14 text-base", dot: "size-4" },
} as const

const statusMap: Record<AvatarStatus, string> = {
  online: "bg-emerald-500",
  away: "bg-amber-500",
  busy: "bg-red-500",
  offline: "bg-muted-foreground",
}

export function AvatarStatus({
  src,
  alt = "",
  fallback,
  status = "online",
  size = "md",
  ringClassName,
  className,
  ...props
}: AvatarStatusProps) {
  const [failed, setFailed] = React.useState(false)
  const showImage = Boolean(src) && !failed
  const { avatar: avatarCls, dot: dotCls } = sizeMap[size]

  return (
    <span
      className={cn("relative inline-flex shrink-0 rounded-full", avatarCls, className)}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="size-full rounded-full object-cover"
        />
      ) : (
        <span className="flex size-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground">
          {fallback}
        </span>
      )}

      <span
        aria-hidden="true"
        className={cn(
          "absolute right-0 bottom-0 rounded-full ring-2",
          dotCls,
          statusMap[status],
          ringClassName ?? "ring-background",
        )}
      />
    </span>
  )
}

export default AvatarStatus