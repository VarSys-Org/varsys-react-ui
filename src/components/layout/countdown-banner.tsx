"use client"

import { useEffect, useState } from "react"
import { TicketPercent, XIcon } from "lucide-react"

import { Button } from "@/components/buttons/button"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export interface CountdownBannerProps {
  /** Target date (Date, timestamp, or ISO string). Defaults to 9h 45m 24s from now for demo purposes. */
  endDate?: Date | number | string
  title?: string
  description?: string
  ctaLabel?: string
  onCtaClick?: () => void
  className?: string
}

function getEndDate(endDate?: Date | number | string): Date {
  if (endDate === undefined) {
    return new Date(
      Date.now() + 9 * 60 * 60 * 1000 + 45 * 60 * 1000 + 24 * 1000,
    )
  }
  return new Date(endDate)
}

export function CountdownBanner({
  endDate,
  title = "Black Friday Sale!",
  description = "It kicks off today and is available for just 24 hours — don't miss out!",
  ctaLabel = "Buy now",
  onCtaClick,
  className,
}: CountdownBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const target = getEndDate(endDate)

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  if (!isVisible || timeLeft.isExpired) return null

  return (
    <div className={`dark bg-muted text-foreground px-4 py-3 ${className ?? ""}`}>
      <div className="flex gap-2 md:items-center">
        <div className="flex grow gap-3 md:items-center">
          <div
            className="bg-primary/15 flex size-9 shrink-0 items-center justify-center rounded-full max-md:mt-0.5"
            aria-hidden="true"
          >
            <TicketPercent className="opacity-80" size={16} />
          </div>
          <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">{title}</p>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
            <div className="flex gap-3 max-md:flex-wrap">
              <div className="divide-primary-foreground bg-primary/15 flex items-center divide-x rounded-md text-sm tabular-nums">
                {timeLeft.days > 0 && (
                  <span className="flex h-8 items-center justify-center p-2">
                    {timeLeft.days}
                    <span className="text-muted-foreground">d</span>
                  </span>
                )}
                <span className="flex h-8 items-center justify-center p-2">
                  {timeLeft.hours.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">h</span>
                </span>
                <span className="flex h-8 items-center justify-center p-2">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">m</span>
                </span>
                <span className="flex h-8 items-center justify-center p-2">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                  <span className="text-muted-foreground">s</span>
                </span>
              </div>
              <Button size="sm" className="text-sm" onClick={onCtaClick}>
                {ctaLabel}
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <XIcon
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}

export default CountdownBanner