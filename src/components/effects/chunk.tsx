"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Check } from "lucide-react"

import { cn } from "@/lib/cn"

export type ChunkDifficulty = "easy" | "normal" | "hard"

export interface ChunkProps {
  phrases?: string[]
  difficulty?: ChunkDifficulty
  completedMessage?: string
  className?: string
  onComplete?: () => void
}

const DIFFICULTY: Record<ChunkDifficulty, number> = {
  easy: 0.4,
  normal: 0.2,
  hard: 0.1,
}

const DEFAULT_PHRASES = [
  "Building",
  "Analyzing",
  "Enhancing",
  "Crafting",
  "Processing",
  "Assembling",
  "Polishing",
  "Finalizing",
]

function Chunk({
  phrases = DEFAULT_PHRASES,
  difficulty = "normal",
  completedMessage = "We've crafted it for you",
  className,
  onComplete,
}: ChunkProps) {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [phrases])

  useEffect(() => {
    let animationFrame: number

    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPaused(true)
          return prev
        }
        const randomIncrement = (Math.random() * 15 + 5) * DIFFICULTY[difficulty]
        return Math.min(prev + randomIncrement, 100)
      })
      animationFrame = requestAnimationFrame(updateProgress)
    }

    if (!isPaused) {
      animationFrame = requestAnimationFrame(updateProgress)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused, difficulty])

  useEffect(() => {
    if (isPaused) {
      onComplete?.()
    }
  }, [isPaused, onComplete])

  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div className="relative flex h-24 w-72 items-center justify-center overflow-hidden rounded-full bg-background p-3 shadow-md ring-1 ring-border">
        <AnimatePresence mode="wait">
          {!isPaused ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-4">
                <motion.span
                  className="size-6 shrink-0 rounded-full border-[3px] border-primary border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.span
                  key={phrases[index]}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-medium text-foreground"
                >
                  {phrases[index]}
                </motion.span>
                <span className="text-sm tabular-nums text-muted-foreground">
                  {Math.round(progress)}%
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center gap-3">
                <Check className="size-6 text-primary" />
                <span className="text-sm font-medium text-foreground">{completedMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

Chunk.displayName = "Chunk"

export { Chunk }

export default Chunk