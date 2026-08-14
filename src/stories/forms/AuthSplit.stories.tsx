import type { Meta, StoryObj } from "@storybook/react"
import { AuthSplit } from "../../components/forms/auth-split"

const meta: Meta<typeof AuthSplit> = {
  title: "Forms/AuthSplit",
  component: AuthSplit,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <AuthSplit />,
}

export const Compact: Story = {
  render: () => (
    <AuthSplit
      height={560}
      signUpTitle="Create your account"
      panelTitle="Ship faster with VarSys"
      submitLabel="Get started"
    />
  ),
}
