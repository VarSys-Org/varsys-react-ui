import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedThemeToggler } from "../../components/effects/animated-theme-toggler"

const meta: Meta<typeof AnimatedThemeToggler> = {
  title: "Effects/AnimatedThemeToggler",
  component: AnimatedThemeToggler,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-12">
      <AnimatedThemeToggler className="rounded-full bg-secondary p-3 text-foreground hover:bg-secondary/80" />
    </div>
  ),
}
