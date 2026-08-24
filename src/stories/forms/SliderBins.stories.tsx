import type { Meta, StoryObj } from "@storybook/react"
import { SliderBins } from "../../components/forms/slider-bins"

const meta: Meta<typeof SliderBins> = {
  title: "Forms/SliderBins",
  component: SliderBins,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const bins = Array.from({ length: 20 }, (_, index) => ({
  start: index * 5,
  end: (index + 1) * 5,
  count: Math.round(Math.abs(Math.sin(index / 3)) * 100) + 10,
}))

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md bg-background p-8">
      <SliderBins bins={bins} label="Distribution" showValue />
    </div>
  ),
}

export const WithFormatter: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md bg-background p-8">
      <SliderBins
        bins={bins}
        label="Revenue"
        min={0}
        max={100}
        showValue
        formatValue={(value) => `$${value}k`}
      />
    </div>
  ),
}
