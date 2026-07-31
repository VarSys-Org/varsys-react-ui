import type { Meta, StoryObj } from "@storybook/react"
import { QuantityInput } from "../../components/forms/quantity-input"

const meta: Meta<typeof QuantityInput> = {
  title: "Forms/QuantityInput",
  component: QuantityInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center">
      <QuantityInput />
    </div>
  ),
}

export const WithLimits: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center">
      <QuantityInput defaultValue={3} min={1} max={10} />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex h-32 items-center justify-center">
      <QuantityInput defaultValue={2} disabled />
    </div>
  ),
}
