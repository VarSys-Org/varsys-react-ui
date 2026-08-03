import type { Meta, StoryObj } from "@storybook/react"
import { MarqueeTicker } from "../../components/effects/marquee-ticker"

const meta: Meta<typeof MarqueeTicker> = {
  title: "Effects/MarqueeTicker",
  component: MarqueeTicker,
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
    <div className="flex h-32 items-center justify-center p-8">
      <MarqueeTicker className="w-full" items={items} />
    </div>
  ),
}
