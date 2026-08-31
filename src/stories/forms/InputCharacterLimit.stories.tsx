import type { Meta, StoryObj } from "@storybook/react"
import { InputCharacterLimit } from "../../components/forms/input-character-limit"

const meta: Meta<typeof InputCharacterLimit> = {
  title: "Forms/InputCharacterLimit",
  component: InputCharacterLimit,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Inside: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <InputCharacterLimit
          label="Product name"
          variant="inside"
          maxLength={50}
          placeholder="Enter a product name"
        />
      </div>
    </div>
  ),
}

export const Below: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <InputCharacterLimit
          label="Coupon code"
          variant="below"
          maxLength={8}
          defaultValue="Hello"
          placeholder="Enter a code"
        />
      </div>
    </div>
  ),
}