import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { BellIcon, DownloadIcon, UserIcon } from "lucide-react"
import { DragAndDrop } from "../../components/layout/drag-and-drop"
import type { DragAndDropItem } from "../../components/layout/drag-and-drop"

const meta: Meta<typeof DragAndDrop> = {
  title: "Layout/DragAndDrop",
  component: DragAndDrop,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const defaultItems: DragAndDropItem[] = [
  { id: "1", icon: <BellIcon className="size-4" />, label: "Newsletter" },
  { id: "2", icon: <DownloadIcon className="size-4" />, label: "Downloads" },
  { id: "3", icon: <UserIcon className="size-4" />, label: "Team Account" },
  { id: "4", icon: <BellIcon className="size-4" />, label: "Notifications" },
]

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState(defaultItems)
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        <DragAndDrop items={items} onChange={setItems} />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <DragAndDrop items={defaultItems} disabled />
    </div>
  ),
}

export const WithTrailing: Story = {
  render: () => {
    const [items, setItems] = useState<DragAndDropItem[]>(
      defaultItems.map((item) => ({
        ...item,
        trailing: (
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {item.id} unread
          </span>
        ),
      }))
    )
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        <DragAndDrop items={items} onChange={setItems} />
      </div>
    )
  },
}