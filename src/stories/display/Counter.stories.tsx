import type { Meta, StoryObj } from "@storybook/react"
import { Counter } from "../../components/display/counter"

const meta: Meta<typeof Counter> = {
  title: "Display/Counter",
  component: Counter,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <Counter value={123456} fontSize={72} />
    </div>
  ),
}

export const Decimal: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <Counter value={1234.56} fontSize={60} />
    </div>
  ),
}

export const Gradient: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-zinc-950 p-10">
      <Counter value={98765} fontSize={72} textColor="#fafafa" gradientFrom="#fafafa" gradientTo="transparent" />
    </div>
  ),
}