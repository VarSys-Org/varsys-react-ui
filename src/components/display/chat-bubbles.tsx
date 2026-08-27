"use client"

import * as React from "react"

import { cn } from "@/lib/cn"

export interface ChatBubble {
  /** Bubble content. Can be text or custom React nodes. */
  content: React.ReactNode
  /** Align the bubble to the start (incoming) or end (outgoing). */
  align?: "start" | "end"
  /** Optional avatar shown next to the bubble. */
  avatar?: React.ReactNode
  /** Optional sender name shown above the bubble. */
  name?: string
  /** Optional timestamp shown under the bubble. */
  timestamp?: string
  /** Optional variant for the bubble surface. */
  variant?: "default" | "primary"
}

export interface ChatBubblesProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Messages to render. */
  items: ChatBubble[]
  /** Maximum width of each bubble. */
  bubbleWidth?: string
}

export function ChatBubbles({
  items,
  bubbleWidth = "max-w-lg",
  className,
  ...props
}: ChatBubblesProps) {
  return (
    <ul className={cn("space-y-5", className)} {...props}>
      {items.map((item, index) => {
        const isEnd = item.align === "end"

        return (
          <li
            key={`vs-chat-bubble-${index}`}
            className={cn(
              "flex gap-x-2 sm:gap-x-4",
              isEnd ? "ms-auto" : "me-11",
              item.name ? "items-start" : "items-center"
            )}
          >
            {!isEnd && item.avatar}
            <div className={cn(isEnd && "grow text-end space-y-3")}>
              {item.name && (
                <p
                  className={cn(
                    "text-xs font-medium text-muted-foreground",
                    isEnd && "text-end"
                  )}
                >
                  {item.name}
                </p>
              )}
              <div
                className={cn(
                  "inline-block rounded-2xl p-4 text-sm text-foreground",
                  item.variant === "primary"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border",
                  bubbleWidth,
                  isEnd && "text-start"
                )}
              >
                {item.content}
              </div>
              {item.timestamp && (
                <p
                  className={cn(
                    "text-xs text-muted-foreground",
                    isEnd && "text-end"
                  )}
                >
                  {item.timestamp}
                </p>
              )}
            </div>
            {isEnd && item.avatar}
          </li>
        )
      })}
    </ul>
  )
}

ChatBubbles.displayName = "ChatBubbles"

export default ChatBubbles