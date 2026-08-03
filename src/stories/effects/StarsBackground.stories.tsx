import type { Meta, StoryObj } from "@storybook/react"
import { StarsBackground } from "../../components/effects/stars-background"

const meta: Meta<typeof StarsBackground> = {
  title: "Effects/StarsBackground",
  component: StarsBackground,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-80 w-full overflow-hidden rounded-lg border border-border bg-neutral-950">
      <StarsBackground />
    </div>
  ),
}

export const Dense: Story = {
  render: () => (
    <div className="relative h-80 w-full overflow-hidden rounded-lg border border-border bg-neutral-950">
      <StarsBackground starDensity={0.0006} />
    </div>
  ),
}
