import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { CurrencyInput } from "../../components/forms/currency-input"

const meta: Meta<typeof CurrencyInput> = {
  title: "Forms/CurrencyInput",
  component: CurrencyInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: 99 },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(1250)
    return (
      <div className="w-72 space-y-2 p-8">
        <CurrencyInput
          value={value}
          onValueChange={setValue}
          aria-label="Budget"
        />
        <p className="text-sm text-muted-foreground">Parsed value: {String(value)}</p>
      </div>
    )
  },
}

export const Currencies: Story = {
  render: () => (
    <div className="grid w-72 gap-6 p-8">
      <CurrencyInput aria-label="USD" defaultValue={1234.56} currency="USD" />
      <CurrencyInput aria-label="EUR" defaultValue={1234.56} currency="EUR" locale="de-DE" />
      <CurrencyInput aria-label="JPY" defaultValue={12345} currency="JPY" locale="ja-JP" />
    </div>
  ),
}

export const Steppers: Story = {
  args: {
    defaultValue: 5,
    min: 0,
    max: 10,
    step: 1,
  },
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 42,
    readOnly: true,
    className: "w-72",
  },
}