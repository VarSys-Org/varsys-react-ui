import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "../../components/forms/label"
import { MaskInput } from "../../components/forms/mask-input"

const meta: Meta<typeof MaskInput> = {
  title: "Forms/MaskInput",
  component: MaskInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Phone: Story = {
  render: () => (
    <div className="grid max-w-sm gap-4 p-8">
      <Label htmlFor="phone">Phone</Label>
      <MaskInput id="phone" mask="phone" placeholder="(555) 123-4567" />
    </div>
  ),
}

export const CreditCard: Story = {
  render: () => (
    <div className="grid max-w-sm gap-4 p-8">
      <Label htmlFor="cc">Credit Card</Label>
      <MaskInput
        id="cc"
        mask="creditCard"
        placeholder="1234 5678 9012 3456"
      />
    </div>
  ),
}

export const Currency: Story = {
  render: () => (
    <div className="grid max-w-sm gap-4 p-8">
      <Label htmlFor="price">Price</Label>
      <MaskInput id="price" mask="currency" currency="USD" defaultValue="42.50" />
    </div>
  ),
}

export const Date: Story = {
  render: () => (
    <div className="grid max-w-sm gap-4 p-8">
      <Label htmlFor="date">Date</Label>
      <MaskInput id="date" mask="date" placeholder="MM/DD/YYYY" />
    </div>
  ),
}

export const CustomMask: Story = {
  render: () => (
    <div className="grid max-w-sm gap-4 p-8">
      <Label htmlFor="custom">Custom (AAA-999)</Label>
      <MaskInput
        id="custom"
        mask={{ pattern: "AAA-999" }}
        placeholder="ABC-123"
      />
    </div>
  ),
}