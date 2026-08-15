import type { Meta, StoryObj } from "@storybook/react"
import { MarqueeStrip } from "../../components/layout/marquee-strip"

const meta: Meta<typeof MarqueeStrip> = {
  title: "Layout/MarqueeStrip",
  component: MarqueeStrip,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  "24/7 support available",
  "Fast shipping on all orders",
  "New components released weekly",
  "Save 20% on your first order",
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <MarqueeStrip items={items} />
    </div>
  ),
}

export const NoEdgeFade: Story = {
  render: () => (
    <div className="p-8">
      <MarqueeStrip items={items} edgeFade={false} />
    </div>
  ),
}

export const CustomDuration: Story = {
  render: () => (
    <div className="p-8">
      <MarqueeStrip items={items} duration={16} pauseOnHover={false} />
    </div>
  ),
}

export const WithEmoji: Story = {
  render: () => (
    <div className="p-8">
      <MarqueeStrip
        items={["🚀 New launches weekly", "✨ Curated by experts", "🔥 Limited time offers"]}
      />
    </div>
  ),
}
