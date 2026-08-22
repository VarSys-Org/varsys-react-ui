import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { LoaderCircleIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"
import { buttonVariants } from "@/components/buttons/button"

export interface LoaderButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {
  /** Whether the button is busy. Disables the button and shows a spinner. */
  loading?: boolean
  /** Accessible label announced while loading. */
  loadingText?: string
}

function LoaderButton({
  className,
  variant = "default",
  size = "default",
  loading = false,
  loadingText = "Loading…",
  children,
  disabled,
  ...props
}: LoaderButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="loader-button"
      data-loading={loading || undefined}
      disabled={disabled || loading}
      className={cn(
        buttonVariants({ variant, size, className }),
        "relative disabled:opacity-100",
        loading && "pointer-events-none",
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5",
          loading && "text-transparent",
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <LoaderCircleIcon aria-hidden="true" className="size-4 animate-spin" />
          <span className="sr-only">{loadingText}</span>
        </span>
      )}
    </ButtonPrimitive>
  )
}

LoaderButton.displayName = "LoaderButton"

export { LoaderButton }

export default LoaderButton