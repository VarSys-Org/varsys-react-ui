"use client"

import type React from "react"
import confetti from "canvas-confetti"
import type {
  GlobalOptions as ConfettiGlobalOptions,
  Options as ConfettiOptions,
} from "canvas-confetti"

import { Button } from "@/components/buttons/button"

export interface ConfettiButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick"> {
  options?: ConfettiOptions & ConfettiGlobalOptions & { canvas?: HTMLCanvasElement }
  onClick?: React.MouseEventHandler<HTMLElement>
}

export function ConfettiButton({
  options,
  children,
  onClick,
  ...props
}: ConfettiButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    confetti({
      ...options,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
    })
    onClick?.(event)
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}

export default ConfettiButton