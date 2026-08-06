import type { Meta, StoryObj } from "@storybook/react"
import { MovingLine } from "../../components/effects/moving-line"

const meta: Meta<typeof MovingLine> = {
  title: "Effects/MovingLine",
  component: MovingLine,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    title: "The path follows the scroll",
    description: "If you look closely, you can see the path is being animated.",
  },
  {
    title: "Scroll to reveal",
    description: "The line draws as you scroll through the content.",
  },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <MovingLine items={items} />
    </div>
  ),
}

export const CustomContent: Story = {
  render: () => (
    <div className="p-8">
      <MovingLine>
        <p className="text-lg font-semibold">Custom children rendered below the line.</p>
      </MovingLine>
    </div>
  ),
}
