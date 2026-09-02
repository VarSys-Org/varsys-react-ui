import type { Meta, StoryObj } from "@storybook/react"
import { ColorSwatch } from "../../components/display/color-swatch"

const meta: Meta<typeof ColorSwatch> = {
  title: "Display/ColorSwatch",
  component: ColorSwatch,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="flex flex-wrap items-center gap-3">
        <ColorSwatch color="#3b82f6" />
        <ColorSwatch color="#10b981" />
        <ColorSwatch color="#f59e0b" />
        <ColorSwatch color="#ef4444" />
        <ColorSwatch color="#8b5cf6" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="flex items-end gap-3">
        <ColorSwatch size="sm" color="#3b82f6" />
        <ColorSwatch color="#3b82f6" />
        <ColorSwatch size="lg" color="#3b82f6" />
      </div>
    </div>
  ),
}

export const Transparency: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="flex flex-wrap items-center gap-3">
        <ColorSwatch color="#3b82f680" />
        <ColorSwatch color="rgba(59, 130, 246, 0.5)" />
        <ColorSwatch color="transparent" />
        <ColorSwatch color="hsl(var(--primary))" />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <div className="flex items-center gap-3">
        <ColorSwatch color="#3b82f6" disabled />
        <ColorSwatch color="#10b981" disabled />
      </div>
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center px-8">
      <ColorSwatch />
    </div>
  ),
}