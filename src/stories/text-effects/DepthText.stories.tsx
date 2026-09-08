import type { Meta, StoryObj } from "@storybook/react"
import { DepthText } from "../../components/text-effects/depth-text"

const meta: Meta<typeof DepthText> = {
  title: "TextEffects/DepthText",
  component: DepthText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <DepthText text="Depth" />
    </div>
  ),
}

export const ThickStack: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <DepthText text="STACK" layers={48} depth={4} tilt={10} />
    </div>
  ),
}

export const Static: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <DepthText text="Orbit off" autoOrbit={false} pointerTracking={false} />
    </div>
  ),
}