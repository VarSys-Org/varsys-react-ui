import type { Meta, StoryObj } from "@storybook/react"
import { BoldIcon, ItalicIcon, UnderlineIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "lucide-react"

import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarGroup, ToolbarLink } from "../../components/navigation/toolbar"

const meta: Meta<typeof Toolbar> = {
  title: "Navigation/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarButton aria-label="Bold"><BoldIcon /></ToolbarButton>
        <ToolbarButton aria-label="Italic"><ItalicIcon /></ToolbarButton>
        <ToolbarButton aria-label="Underline"><UnderlineIcon /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton aria-label="Align left"><AlignLeftIcon /></ToolbarButton>
        <ToolbarButton aria-label="Align center"><AlignCenterIcon /></ToolbarButton>
        <ToolbarButton aria-label="Align right"><AlignRightIcon /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarLink href="#">Link</ToolbarLink>
    </Toolbar>
  ),
}
