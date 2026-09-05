import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from "../../components/display/kanban"

const meta: Meta<typeof Kanban> = {
  title: "Display/Kanban",
  component: Kanban,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const initialColumns: Record<string, string[]> = {
  todo: ["Design the new landing page", "Review Q3 analytics", "Prepare investor deck"],
  inprogress: ["Refactor auth module", "Ship dark mode toggle"],
  done: ["Set up CI pipeline", "Write onboarding emails"],
}

function KanbanDemo() {
  const [columns, setColumns] = useState<Record<string, string[]>>(initialColumns)
  return (
    <div className="w-full max-w-4xl p-6">
      <Kanban value={columns} onValueChange={setColumns} className="h-[28rem]">
        <KanbanBoard className="rounded-xl">
          {Object.entries(columns).map(([columnId, items]) => (
            <KanbanColumn key={columnId} value={columnId} className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <KanbanColumnHandle aria-label={`Move ${columnId} column`} className="cursor-grab">
                    <span className="text-sm font-medium">{columnId}</span>
                  </KanbanColumnHandle>
                </div>
                <span className="text-sm text-muted-foreground">{items.length}</span>
              </div>
              {items.map((item) => (
                <KanbanItem key={item} value={item} className="rounded-md border bg-background px-3 py-2 text-sm">
                  <div className="flex items-center gap-2">
                    <KanbanItemHandle aria-label="Drag item" className="cursor-grab">
                      <span className="size-1.5 rounded-full bg-primary" />
                    </KanbanItemHandle>
                    <span>{item}</span>
                  </div>
                </KanbanItem>
              ))}
            </KanbanColumn>
          ))}
        </KanbanBoard>
        <KanbanOverlay className="rounded-lg border bg-background px-3 py-2 text-sm shadow-lg">
          {({ value }) => <span>{value}</span>}
        </KanbanOverlay>
      </Kanban>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-6">
      <KanbanDemo />
    </div>
  ),
}