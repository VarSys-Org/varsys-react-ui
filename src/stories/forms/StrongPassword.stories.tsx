import type { Meta, StoryObj } from "@storybook/react"
import { StrongPassword } from "../../components/forms/strong-password"

const meta: Meta<typeof StrongPassword> = {
  title: "Forms/StrongPassword",
  component: StrongPassword,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <StrongPassword />
    </div>
  ),
}
