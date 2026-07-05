import type { Meta, StoryObj } from "@storybook/react"
import { Badge, badgeVariants } from "../../components/ui/badge"

const meta: Meta<typeof Badge> = {
  title: "shadcn/Badge",
  component: Badge,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: "Badge" } }
export const Secondary: Story = { args: { variant: "secondary", children: "Secondary" } }
export const Destructive: Story = { args: { variant: "destructive", children: "Destructive" } }
export const Outline: Story = { args: { variant: "outline", children: "Outline" } }
