import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { PinInput } from "../../components/forms/pin-input"

const meta: Meta<typeof PinInput> = {
  title: "Forms/PinInput",
  component: PinInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <PinInput length={4} />
    </div>
  ),
}

export const SixDigits: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <PinInput length={6} />
    </div>
  ),
}

export const PlaceholderDots: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <PinInput length={4} placeholder="•" />
    </div>
  ),
}

export const Alphanumeric: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <PinInput length={4} numeric={false} placeholder="A1B2" />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("42")
    const [completed, setCompleted] = useState("")
    return (
      <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-background p-10">
        <PinInput
          length={4}
          value={value}
          onChange={setValue}
          onComplete={(v) => setCompleted(v)}
        />
        <p className="text-sm text-muted-foreground">Value: {value}</p>
        {completed && (
          <p className="text-sm text-primary">Completed: {completed}</p>
        )}
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <PinInput length={4} value="1234" disabled />
    </div>
  ),
}