import type { Meta, StoryObj } from "@storybook/react"
import { PopButton } from "../../components/buttons/pop-button"

const meta: Meta<typeof PopButton> = {
  title: "Buttons/PopButton",
  component: PopButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <PopButton>Click me</PopButton>
      <PopButton color="blue">Primary action</PopButton>
      <PopButton color="emerald" size="lg">
        Big button
      </PopButton>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <PopButton color="red">Red</PopButton>
      <PopButton color="orange">Orange</PopButton>
      <PopButton color="violet">Violet</PopButton>
      <PopButton color="pink">Pink</PopButton>
      <PopButton color="cyan">Cyan</PopButton>
      <PopButton color="lime">Lime</PopButton>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <PopButton size="sm">Small</PopButton>
      <PopButton>Default</PopButton>
      <PopButton size="lg">Large</PopButton>
    </div>
  ),
}