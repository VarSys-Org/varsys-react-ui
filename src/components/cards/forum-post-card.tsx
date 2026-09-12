"use client"

import * as React from "react"
import { MessageCircle, UserRound } from "lucide-react"
import { cn } from "@/lib/cn"

export interface ForumPostCardProps extends React.HTMLAttributes<HTMLElement> {
  question?: string
  excerpt?: string
  comments?: number
  author?: string
  authorImage?: string
  solved?: boolean
  onToggleSolved?: () => void
  href?: string
}

export function ForumPostCard({
  question = "Question about Rendering",
  excerpt = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, accusantium temporibus iure delectus ut totam natus nesciunt ex? Ducimus, enim.",
  comments = 14,
  author = "John",
  authorImage = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=1160",
  solved = false,
  onToggleSolved,
  href = "#",
  className,
}: ForumPostCardProps) {
  return (
    <article className={cn("rounded-xl border-2 border-border bg-card", className)}>
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <a href="#" className="block shrink-0">
          {authorImage ? (
            <img
              alt=""
              src={authorImage}
              className="size-14 rounded-lg object-cover"
            />
          ) : (
            <span className="grid size-14 place-content-center rounded-lg bg-primary/10 text-primary">
              <UserRound aria-hidden="true" className="size-7" />
            </span>
          )}
        </a>

        <div>
          <h3 className="font-medium sm:text-lg">
            <a href={href} className="hover:underline">
              {question}
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MessageCircle aria-hidden="true" className="size-4" />
              <p className="text-xs">{comments} comments</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <p className="hidden sm:block sm:text-xs sm:text-muted-foreground">
              Posted by{" "}
              <a href="#" className="font-medium underline hover:text-foreground">
                {author}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          aria-pressed={solved}
          onClick={onToggleSolved}
          className={cn(
            "-me-0.5 -mb-0.5 inline-flex cursor-pointer items-center gap-1 rounded-ss-xl rounded-ee-xl px-3 py-1.5 text-white transition",
            solved
              ? "bg-emerald-600 hover:bg-emerald-500"
              : "bg-muted text-muted-foreground hover:bg-border"
          )}
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>

          <span className="text-[10px] font-medium sm:text-xs">
            {solved ? "Solved!" : "Mark as solved"}
          </span>
        </button>
      </div>
    </article>
  )
}

ForumPostCard.displayName = "ForumPostCard"

export default ForumPostCard