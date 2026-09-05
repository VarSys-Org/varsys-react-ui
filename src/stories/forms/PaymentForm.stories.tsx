import type { Meta, StoryObj } from "@storybook/react"
import { PaymentForm } from "../../components/forms/payment-form"

const meta: Meta<typeof PaymentForm> = {
  title: "Forms/PaymentForm",
  component: PaymentForm,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <PaymentForm />
    </div>
  ),
}

export const NoCoupon: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <PaymentForm couponEnabled={false} triggerLabel="Checkout" />
    </div>
  ),
}