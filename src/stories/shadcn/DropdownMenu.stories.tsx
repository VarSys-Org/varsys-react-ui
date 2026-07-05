import type { Meta, StoryObj } from "@storybook/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../components/ui/dropdown-menu"
import { Button } from "../../components/ui/button"

const meta: Meta<typeof DropdownMenu> = {
  title: "shadcn/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
