"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"

import { cn } from "@/lib/cn"

export interface DragAndDropItem {
  /** Unique identifier used for reordering. */
  id: string
  /** Item label. */
  label?: React.ReactNode
  /** Optional icon rendered at the start of the row. */
  icon?: React.ReactNode
  /** Optional trailing content rendered at the end of the row. */
  trailing?: React.ReactNode
}

export interface DragAndDropProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "onChange"> {
  /** Items to render. */
  items: DragAndDropItem[]
  /** Callback fired whenever the order changes. */
  onChange?: (items: DragAndDropItem[]) => void
  /** Disable dragging entirely. */
  disabled?: boolean
}

export function DragAndDrop({
  items,
  onChange,
  disabled,
  className,
  ...props
}: DragAndDropProps) {
  const [dragIndex, setDragIndex] = React.useState<number | null>(null)
  const [overIndex, setOverIndex] = React.useState<number | null>(null)

  const reorder = (from: number, to: number) => {
    const next = [...items]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)
    onChange?.(next)
  }

  return (
    <ul
      className={cn("flex flex-col", className)}
      {...props}
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          draggable={!disabled}
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "move"
            setDragIndex(index)
          }}
          onDragOver={(e) => {
            e.preventDefault()
            if (dragIndex !== null && overIndex !== index) setOverIndex(index)
          }}
          onDragLeave={() => {
            if (overIndex === index) setOverIndex(null)
          }}
          onDrop={(e) => {
            e.preventDefault()
            if (dragIndex !== null && dragIndex !== index) {
              reorder(dragIndex, index)
            }
            setDragIndex(null)
            setOverIndex(null)
          }}
          onDragEnd={() => {
            setDragIndex(null)
            setOverIndex(null)
          }}
          className={cn(
            "inline-flex items-center gap-x-3 py-3 px-4 text-sm font-medium bg-card border border-border text-card-foreground -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg cursor-grab active:cursor-grabbing transition-shadow",
            dragIndex === index && "opacity-50",
            overIndex === index && "ring-2 ring-ring/40 shadow-md"
          )}
        >
          {!disabled && (
            <GripVerticalIcon className="shrink-0 size-4 text-muted-foreground" />
          )}
          {item.icon}
          <span className="grow">{item.label}</span>
          {item.trailing}
        </li>
      ))}
    </ul>
  )
}

DragAndDrop.displayName = "DragAndDrop"

export default DragAndDrop