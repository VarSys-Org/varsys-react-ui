import type { Meta, StoryObj } from "@storybook/react"
import { StripedPattern } from "../../components/effects/striped-pattern"

const meta: Meta<typeof StripedPattern> = {
  title: "Effects/StripedPattern",
  component: StripedPattern,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-background">
      <StripedPattern className="text-foreground/10" />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold">Striped Pattern</h2>
      </div>
    </div>
  ),
}

export const RightDirection: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-background">
      <StripedPattern direction="right" className="text-foreground/10" />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold">Right Facing Stripes</h2>
      </div>
    </div>
  ),
}
