import type { Meta, StoryObj } from "@storybook/react"
import { PixelCard } from "../../components/cards/pixel-card"

const meta: Meta<typeof PixelCard> = {
  title: "Cards/PixelCard",
  component: PixelCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <PixelCard>
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground">Industrial Grade</h3>
          <p className="mt-2 text-sm text-muted-foreground">Hover or focus to ignite the pixels.</p>
        </div>
      </PixelCard>
    </div>
  ),
}

export const Blue: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <PixelCard variant="blue">
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold text-sky-100">Telemetry</h3>
          <p className="mt-2 text-sm text-sky-200/70">Real-time data streams.</p>
        </div>
      </PixelCard>
    </div>
  ),
}

export const Yellow: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <PixelCard variant="yellow">
        <div className="p-8 text-center">
          <h3 className="text-xl font-semibold text-yellow-100">Warning</h3>
          <p className="mt-2 text-sm text-yellow-200/70">Threshold breached.</p>
        </div>
      </PixelCard>
    </div>
  ),
}