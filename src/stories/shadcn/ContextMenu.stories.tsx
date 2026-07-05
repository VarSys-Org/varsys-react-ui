import type { Meta, StoryObj } from "@storybook/react"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "../../components/ui/context-menu"

const meta: Meta<typeof ContextMenu> = {
  title: "shadcn/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
