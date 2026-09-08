import type { Meta, StoryObj } from "@storybook/react"
import { LiquidChrome } from "../../components/effects/liquid-chrome"

const meta: Meta<typeof LiquidChrome> = {
  title: "Effects/LiquidChrome",
  component: LiquidChrome,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <LiquidChrome className="h-80 w-full rounded-2xl border border-border" />
    </div>
  ),
}

export const SlowerCalm: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <LiquidChrome className="h-80 w-full rounded-2xl border border-border" baseColor={[0.2, 0.25, 0.3]} speed={0.1} amplitude={0.35} interactive={false} />
    </div>
  ),
}

export const ElectricBlue: Story = {
  render: () => (
    <div className="min-h-96 bg-background p-10">
      <LiquidChrome className="h-80 w-full rounded-2xl border border-border" baseColor={[0.1, 0.3, 0.9]} speed={0.3} frequencyX={4} frequencyY={3} />
    </div>
  ),
}