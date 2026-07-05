import type { Meta, StoryObj } from "@storybook/react"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "../../components/navigation/menubar"

const meta: Meta<typeof Menubar> = {
  title: "shadcn/Menubar",
  component: Menubar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New Tab</MenubarItem><MenubarItem>New Window</MenubarItem><MenubarSeparator /><MenubarItem>Print</MenubarItem></MenubarContent></MenubarMenu>
      <MenubarMenu><MenubarTrigger>Edit</MenubarTrigger><MenubarContent><MenubarItem>Undo</MenubarItem><MenubarItem>Redo</MenubarItem></MenubarContent></MenubarMenu>
    </Menubar>
  ),
}
