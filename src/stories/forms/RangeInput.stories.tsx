import type { Meta, StoryObj } from "@storybook/react"
import { RangeInput } from "../../components/forms/range-input"

const meta: Meta<typeof RangeInput> = {
  title: "Forms/RangeInput",
  component: RangeInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm p-8">
      <RangeInput label="Max Volume" min={0} max={100} value={20} />
    </div>
  ),
}

export const WithValue: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm p-8">
      <RangeInput label="Brightness" min={0} max={100} value={65} showValue />
    </div>
  ),
}

export const Filled: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm p-8">
      <RangeInput
        label="Price range"
        min={0}
        max={1000}
        step={10}
        value={350}
        filled
        showValue
      />
    </div>
  ),
}

export const Underline: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm p-8">
      <RangeInput
        label="Zoom level"
        min={1}
        max={10}
        step={1}
        value={5}
        underline
        showValue
      />
    </div>
  ),
}

export const NoLabel: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm p-8">
      <RangeInput min={0} max={100} defaultValue={50} />
    </div>
  ),
}
