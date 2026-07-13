import type { Meta, StoryObj } from "@storybook/react"

import { OTPField, OTPFieldInput, OTPFieldSeparator } from "../../components/forms/otp-field"

const meta: Meta<typeof OTPField> = {
  title: "Forms/OTPField",
  component: OTPField,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <OTPField length={6} defaultValue="">
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldSeparator />
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
    </OTPField>
  ),
}

export const FourDigits: Story = {
  render: () => (
    <OTPField length={4} defaultValue="">
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
    </OTPField>
  ),
}

export const Large: Story = {
  render: () => (
    <OTPField length={6} defaultValue="" size="lg">
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldSeparator />
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
    </OTPField>
  ),
}

export const Disabled: Story = {
  render: () => (
    <OTPField length={4} defaultValue="" disabled>
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
      <OTPFieldInput />
    </OTPField>
  ),
}
