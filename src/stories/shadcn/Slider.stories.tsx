import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "../../components/forms/slider"

const meta: Meta<typeof Slider> = {
  title: "shadcn/Slider",
  component: Slider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { defaultValue: [50], max: 100, step: 1 }, render: (args) => <Slider {...args} className="w-[60%]" /> }
