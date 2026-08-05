import type { Meta, StoryObj } from "@storybook/react"
import { LoginForm } from "../../components/forms/login-form"

const meta: Meta<typeof LoginForm> = {
  title: "Forms/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <LoginForm variant="basic" />,
}

export const Providers: Story = {
  render: () => <LoginForm variant="providers" />,
}
