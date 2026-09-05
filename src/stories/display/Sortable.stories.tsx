import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { GripVerticalIcon } from "lucide-react"
import {
  Sortable,
  SortableContent,
  SortableItem,
  SortableItemHandle,
  SortableOverlay,
} from "../../components/display/sortable"

const meta: Meta<typeof Sortable> = {
  title: "Display/Sortable",
  component: Sortable,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const initialItems = [
  "Design the new landing page",
  "Review Q3 analytics",
  "Prepare investor deck",
  "Refactor auth module",
  "Ship dark mode toggle",
  "Set up CI pipeline",
]

function SortableDemo() {
  const [items, setItems] = useState<string[]>(initialItems)
  return (
    <div className="w-full max-w-md">
      <Sortable value={items} onValueChange={setItems}>
        <SortableContent className="flex flex-col gap-2">
          {items.map((item) => (
            <SortableItem
              key={item}
              value={item}
              className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2.5 text-sm shadow-xs"
            >
              <SortableItemHandle
                aria-label="Drag item"
                className="cursor-grab touch-none"
              >
                <GripVerticalIcon className="size-4 text-muted-foreground" />
              </SortableItemHandle>
              <span>{item}</span>
            </SortableItem>
          ))}
        </SortableContent>
        <SortableOverlay className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2.5 text-sm shadow-lg">
          {({ value }) => (
            <>
              <GripVerticalIcon className="size-4 text-muted-foreground" />
              <span>{value as string}</span>
            </>
          )}
        </SortableOverlay>
      </Sortable>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-6">
      <SortableDemo />
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => {
    const HorizontalDemo = () => {
      const [items, setItems] = useState(["One", "Two", "Three", "Four"])
      return (
        <Sortable
          orientation="horizontal"
          value={items}
          onValueChange={setItems}
        >
          <SortableContent className="flex flex-row gap-2">
            {items.map((item) => (
              <SortableItem
                key={item}
                value={item}
                className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm shadow-xs"
              >
                <SortableItemHandle
                  aria-label="Drag item"
                  className="cursor-grab touch-none"
                >
                  <GripVerticalIcon className="size-4 text-muted-foreground" />
                </SortableItemHandle>
                <span>{item}</span>
              </SortableItem>
            ))}
          </SortableContent>
        </Sortable>
      )
    }
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-6">
        <HorizontalDemo />
      </div>
    )
  },
}