import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { RangeSlider } from "../../components/forms/range-slider"

const meta: Meta<typeof RangeSlider> = {
  title: "Forms/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md bg-background p-8">
      <RangeSlider
        label="Price range"
        showValues
        formatValue={(value) => `$${value}`}
      />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState({ min: 20, max: 80 })
    return (
      <div className="mx-auto w-full max-w-md space-y-6 bg-background p-8">
        <RangeSlider
          label="Controlled"
          min={0}
          max={100}
          minValue={value.min}
          maxValue={value.max}
          showValues
          onChange={setValue}
        />
        <p className="text-sm text-muted-foreground">
          min: {value.min} — max: {value.max}
        </p>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md bg-background p-8">
      <RangeSlider
        label="Disabled"
        defaultMinValue={30}
        defaultMaxValue={60}
        showValues
        disabled
      />
    </div>
  ),
}
