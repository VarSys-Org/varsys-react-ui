import type { Meta, StoryObj } from "@storybook/react"
import { AmountInput } from "../../components/forms/amount-input"

const meta: Meta<typeof AmountInput> = {
  title: "Forms/AmountInput",
  component: AmountInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <AmountInput />,
}
