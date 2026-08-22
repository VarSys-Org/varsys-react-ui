import * as React from "react"
import { useId } from "react"

import { cn } from "@/lib/cn"
import { Input } from "@/components/forms/input"

export interface AnimatedInputProps
  extends React.ComponentProps<"input"> {
  /** Label shown above the input and used as its accessible name. */
  label: string
}

export const AnimatedInput = React.forwardRef<
  HTMLInputElement,
  AnimatedInputProps
>(({ className, label, id, placeholder = " ", ...props }, ref) => {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className={cn("group relative", className)}>
      <label
        htmlFor={inputId}
        className="pointer-events-none absolute top-1/2 left-1 origin-left -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground transition-all duration-150 group-focus-within:top-0 group-focus-within:scale-[.85] group-focus-within:font-medium group-focus-within:text-foreground group-focus-within:text-xs has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:scale-[.85] has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground has-[+input:not(:placeholder-shown)]:text-xs"
      >
        <span className="inline-flex bg-background px-2">{label}</span>
      </label>
      <Input ref={ref} id={inputId} placeholder={placeholder} {...props} />
    </div>
  )
})

AnimatedInput.displayName = "AnimatedInput"

export default AnimatedInput