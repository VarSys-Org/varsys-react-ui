import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { TimezoneSelect } from "../../components/forms/timezone-select"

const meta: Meta<typeof TimezoneSelect> = {
  title: "Forms/TimezoneSelect",
  component: TimezoneSelect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <TimezoneSelect />
      </div>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("Europe/London")
    return (
      <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-background p-10">
        <div className="w-full max-w-sm">
          <TimezoneSelect value={value} onValueChange={setValue} />
        </div>
        <p className="text-sm text-muted-foreground">Selected: {value}</p>
      </div>
    )
  },
}

export const CustomLabel: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <div className="w-full max-w-sm">
        <TimezoneSelect label="Workspace timezone" defaultValue="America/New_York" />
      </div>
    </div>
  ),
}