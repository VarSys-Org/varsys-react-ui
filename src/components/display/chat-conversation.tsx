"use client"

import * as React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/cn"

export interface ChatConversationMessage {
  role: "user" | "assistant"
  content: string
  name?: string
  avatar?: React.ReactNode
}

export interface ChatConversationProps {
  messages?: ChatConversationMessage[]
  className?: string
  userLabel?: string
  assistantLabel?: string
  /** Stagger delay (seconds) between messages appearing. */
  interval?: number
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
}

const messageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function ChatConversation({
  messages = [],
  className,
  userLabel = "You",
  assistantLabel = "Assistant",
  interval = 0.3,
}: ChatConversationProps) {
  return (
    <motion.div
      variants={{ ...containerVariants, visible: { transition: { staggerChildren: interval } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn("flex w-full flex-col gap-4", className)}
    >
      {messages.map((message, index) => {
        const isUser = message.role === "user"
        const label = message.name ?? (isUser ? userLabel : assistantLabel)
        const initials = label.slice(0, 1).toUpperCase()
        return (
          <motion.div
            key={index}
            variants={messageVariants}
            className={cn(
              "flex w-full items-end gap-3",
              isUser ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                isUser
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {message.avatar ?? initials}
            </div>
            <div className={cn("flex max-w-[75%] flex-col gap-1", isUser ? "items-end" : "items-start")}>
              <span className="px-1 text-xs text-muted-foreground">{label}</span>
              <div
                className={cn(
                  "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  isUser
                    ? "rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm border border-border bg-muted text-foreground"
                )}
              >
                {message.content}
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

ChatConversation.displayName = "ChatConversation"

export default ChatConversation