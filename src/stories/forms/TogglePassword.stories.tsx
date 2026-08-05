import type { Meta, StoryObj } from "@storybook/react"
import { TogglePassword } from "../../components/forms/toggle-password"

const meta: Meta<typeof TogglePassword> = {
  title: "Forms/TogglePassword",
  component: TogglePassword,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <TogglePassword />
    </div>
  ),
}

export const Checkbox: Story = {
  render: () => (
    <div className="p-8">
      <TogglePassword asCheckbox />
    </div>
  ),
}
