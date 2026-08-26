import type { Meta, StoryObj } from "@storybook/react"
import { ColorSelector } from "../../components/forms/color-selector"

const meta: Meta<typeof ColorSelector> = {
  title: "Forms/ColorSelector",
  component: ColorSelector,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const colors = ["red", "green", "blue", "yellow", "purple", "pink", "indigo", "orange"]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ColorSelector colors={colors} defaultValue="blue" />
    </div>
  ),
}

export const Named: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ColorSelector colors={colors} defaultValue="purple" name="accent-color" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-48 flex-col items-center justify-center gap-6 bg-background p-10">
      <ColorSelector colors={colors} defaultValue="red" size="sm" />
      <ColorSelector colors={colors} defaultValue="green" size="default" />
      <ColorSelector colors={colors} defaultValue="orange" size="lg" />
    </div>
  ),
}

export const CustomHex: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ColorSelector colors={["#f43f5e", "#0ea5e9", "#22c55e", "#facc15", "#a855f7"]} defaultValue="#f43f5e" />
    </div>
  ),
}