import type { Meta, StoryObj } from "@storybook/react"
import { WebcamPixelGrid } from "../../components/effects/webcam-pixel-grid"

const meta: Meta<typeof WebcamPixelGrid> = {
  title: "Effects/WebcamPixelGrid",
  component: WebcamPixelGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[500px] w-full">
      <WebcamPixelGrid />
    </div>
  ),
}
