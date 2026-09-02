import type { Meta, StoryObj } from "@storybook/react"
import { Fps } from "../../components/display/fps"

const meta: Meta<typeof Fps> = {
  title: "Display/Fps",
  component: Fps,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative flex h-64 items-center justify-center overflow-hidden border border-dashed">
      <p className="text-sm text-muted-foreground">
        FPS counter rendered in the top-right corner
      </p>
      <Fps label="FPS" strategy="absolute" position="top-right" />
    </div>
  ),
}

export const TopLeft: Story = {
  render: () => (
    <div className="relative flex h-64 items-center justify-center overflow-hidden border border-dashed">
      <p className="text-sm text-muted-foreground">Absolute position top-left</p>
      <Fps strategy="absolute" position="top-left" />
    </div>
  ),
}

export const WithThresholds: Story = {
  render: () => (
    <div className="relative flex h-64 items-center justify-center overflow-hidden border border-dashed">
      <p className="text-sm text-muted-foreground">
        Warnings below 60, errors below 30
      </p>
      <Fps
        label="FPS"
        strategy="absolute"
        position="bottom-right"
        warningThreshold={60}
        errorThreshold={30}
      />
    </div>
  ),
}