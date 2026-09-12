"use client"

import * as React from "react"
import { BadgeCheck, Clock3, Pause, Play } from "lucide-react"
import { cn } from "@/lib/cn"

export interface PodcastCardProps extends React.HTMLAttributes<HTMLElement> {
  episode?: string
  title?: string
  description?: string
  duration?: string
  featuring?: string[]
  authorName?: string
  href?: string
  playing?: boolean
  onTogglePlay?: () => void
}

export function PodcastCard({
  episode = "Episode #101",
  title = "Some Interesting Podcast Title",
  description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum sit rerum, atque, quo culpa ut necessitatibus eius suscipit eum accusamus.",
  duration = "48:32 minutes",
  featuring = ["Barry", "Sandra", "August"],
  authorName = "Studio",
  href = "#",
  playing = false,
  onTogglePlay,
  className,
}: PodcastCardProps) {
  return (
    <article
      className={cn(
        "rounded-xl bg-card p-4 text-foreground ring-3 ring-primary/10 sm:p-6 lg:p-8",
        className
      )}
    >
      <div className="flex items-start sm:gap-8">
        <button
          type="button"
          aria-label={playing ? "Pause episode" : "Play episode"}
          aria-pressed={playing}
          onClick={onTogglePlay}
          className="hidden size-20 shrink-0 cursor-pointer place-content-center rounded-full border-2 border-primary text-primary transition hover:bg-primary hover:text-background sm:grid"
        >
          <div className="flex items-center gap-1">
            {playing ? (
              <Pause aria-hidden="true" className="size-5 fill-current" />
            ) : (
              <Play aria-hidden="true" className="ml-1 size-5 fill-current" />
            )}
          </div>
        </button>

        <button
          type="button"
          aria-label={playing ? "Pause episode" : "Play episode"}
          aria-pressed={playing}
          onClick={onTogglePlay}
          className="size-10 shrink-0 place-content-center rounded-full border-2 border-primary text-primary sm:hidden"
        >
          {playing ? (
            <Pause aria-hidden="true" className="size-4 fill-current" />
          ) : (
            <Play aria-hidden="true" className="ml-0.5 size-4 fill-current" />
          )}
        </button>

        <div>
          <strong className="rounded-sm border border-primary bg-primary px-3 py-1.5 text-[10px] font-medium text-background">
            {episode}
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <a href={href} className="hover:underline">
              {title}
            </a>
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">{description}</p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock3 aria-hidden="true" className="size-4" />
              <p className="text-xs font-medium">{duration}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="mt-2 text-xs font-medium text-muted-foreground sm:mt-0">
              Featuring&nbsp;
              {featuring.map((guest, index) => (
                <React.Fragment key={guest}>
                  <a href="#" className="underline hover:text-foreground">
                    {guest}
                  </a>
                  {index < featuring.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>

      {authorName ? (
        <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
          <BadgeCheck aria-hidden="true" className="size-4 text-primary" />
          <span>{authorName}</span>
        </div>
      ) : null}
    </article>
  )
}

PodcastCard.displayName = "PodcastCard"

export default PodcastCard