import type { Meta, StoryObj } from "@storybook/react"
import { SliderWithInput } from "../../components/forms/slider-with-input"

const meta: Meta<typeof SliderWithInput> = {
  title: "Forms/SliderWithInput",
  component: SliderWithInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <SliderWithInput label="Temperature" minValue={0} maxValue={100} defaultValue={22} />
      </div>
    </div>
  ),
}

export const Fractional: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <SliderWithInput
          label="Brightness"
          minValue={0}
          maxValue={2}
          defaultValue={1}
          initialValue={1.25}
          step={0.01}
        />
      </div>
    </div>
  ),
}