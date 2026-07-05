import type { Meta, StoryObj } from "@storybook/react"
import { Toggle, toggleVariants } from "../../components/ui/toggle"

const meta: Meta<typeof Toggle> = {
  title: "shadcn/Toggle",
  component: Toggle,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: "Toggle" } }
export const Outline: Story = { args: { variant: "outline", children: "Outline Toggle" } }
