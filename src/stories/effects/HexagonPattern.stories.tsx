import type { Meta, StoryObj } from "@storybook/react"
import { HexagonPattern } from "../../components/effects/hexagon-pattern"

const meta: Meta<typeof HexagonPattern> = {
  title: "Effects/HexagonPattern",
  component: HexagonPattern,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-background">
      <HexagonPattern className="text-foreground/10" />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold">Hexagon Pattern</h2>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-background">
      <HexagonPattern direction="vertical" className="text-foreground/10" />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <h2 className="text-2xl font-bold">Vertical Hexagons</h2>
      </div>
    </div>
  ),
}
