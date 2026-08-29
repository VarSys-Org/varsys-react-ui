import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { PhoneInput } from "../../components/forms/phone-input"

const meta: Meta<typeof PhoneInput> = {
  title: "Forms/PhoneInput",
  component: PhoneInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        <div className="w-full max-w-sm">
          <PhoneInput value={value} onChange={setValue} defaultCountry="US" />
        </div>
      </div>
    )
  },
}

export const International: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        <div className="w-full max-w-sm">
          <PhoneInput
            value={value}
            onChange={setValue}
            defaultCountry="US"
            international
          />
        </div>
      </div>
    )
  },
}

export const WithValue: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <PhoneInput value="+44 7911 123456" defaultCountry="GB" />
      </div>
    </div>
  ),
}