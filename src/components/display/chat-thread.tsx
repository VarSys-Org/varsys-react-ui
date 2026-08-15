"use client"

import React from "react"
import { cn } from "@/lib/cn"

export interface ChatMessage {
  id: string
  sender: "me" | "other"
  text: string
  name?: string
  avatar?: React.ReactNode
  time?: string
  status?: "sent" | "delivered" | "read" | "failed"
}

export interface ChatThreadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  messages: ChatMessage[]
  onSelect?: (message: ChatMessage) => void
  dense?: boolean
}

const statusLabel: Record<NonNullable<ChatMessage["status"]>, string> = {
  sent: "Sent",
  delivered: "Delivered",
  read: "Read",
  failed: "Failed",
}

function MessageAvatar({ message }: { message: ChatMessage }) {
  if (message.avatar) return <>{message.avatar}</>
  const initials = (message.name ?? "?")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
      {initials}
    </span>
  )
}

export function ChatThread({
  messages,
  onSelect,
  dense = false,
  className,
  ...props
}: ChatThreadProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        dense ? "gap-2" : "gap-4",
        className
      )}
      {...props}
    >
      {messages.map((message) => {
        const mine = message.sender === "me"
        return (
          <div
            key={message.id}
            className={cn("flex items-start gap-3", mine && "flex-row-reverse")}
          >
            <MessageAvatar message={message} />
            <div
              className={cn(
                "flex min-w-0 max-w-[75%] flex-col",
                mine && "items-end"
              )}
            >
              {(message.name || message.time) && (
                <div
                  className={cn(
                    "mb-1 flex items-center gap-2 text-xs text-muted-foreground",
                    mine && "flex-row-reverse"
                  )}
                >
                  {message.name && <span className="font-medium">{message.name}</span>}
                  {message.time && <time>{message.time}</time>}
                </div>
              )}
              <button
                type="button"
                onClick={() => onSelect?.(message)}
                className={cn(
                  "rounded-2xl px-4 py-2.5 text-start text-sm shadow-sm transition-colors",
                  dense && "px-3 py-1.5 text-xs",
                  mine
                    ? "rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm bg-muted text-foreground",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                )}
              >
                {message.text}
              </button>
              {message.status && (
                <span
                  className={cn(
                    "mt-1 text-[11px]",
                    message.status === "failed"
                      ? "text-destructive"
                      : "text-muted-foreground"
                  )}
                >
                  {statusLabel[message.status]}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
