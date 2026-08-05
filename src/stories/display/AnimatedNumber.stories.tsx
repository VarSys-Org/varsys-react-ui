import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedNumber } from "../../components/display/animated-number"

const meta: Meta<typeof AnimatedNumber> = {
  title: "Display/AnimatedNumber",
  component: AnimatedNumber,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8 text-4xl font-bold">
      <AnimatedNumber value={1234567} />
    </div>
  ),
}
