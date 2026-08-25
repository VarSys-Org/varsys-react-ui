import type { Meta, StoryObj } from "@storybook/react"
import { PasswordInput } from "../../components/forms/password-input"

const meta: Meta<typeof PasswordInput> = {
  title: "Forms/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <PasswordInput label="Password" placeholder="Enter a password" className="w-full max-w-sm" />
    </div>
  ),
}

export const WithStrength: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <PasswordInput
        label="Create a strong password"
        placeholder="Type to see strength"
        defaultValue="Strongpass1!"
        className="w-full max-w-sm"
      />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <PasswordInput
        label="Current password"
        placeholder="Enter your password"
        defaultValue="wrong"
        error="The password you entered is incorrect."
        className="w-full max-w-sm"
      />
    </div>
  ),
}
