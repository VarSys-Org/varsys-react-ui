import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { CalendarWithPresets } from "../../components/forms/calendar-with-presets"

const meta: Meta<typeof CalendarWithPresets> = {
  title: "Forms/CalendarWithPresets",
  component: CalendarWithPresets,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <CalendarWithPresets />
    </div>
  ),
}

export const CustomPresets: Story = {
  render: () => {
    const presets = [
      { label: "Now", offsetDays: 0 },
      { label: "+2 days", offsetDays: 2 },
      { label: "+1 week", offsetDays: 7 },
      { label: "+1 month", offsetDays: 30 },
    ].map(({ label, offsetDays }) => {
      const date = new Date()
      date.setDate(date.getDate() + offsetDays)
      return { label, date }
    })
    return (
      <div className="p-8">
        <CalendarWithPresets presets={presets} />
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <div className="flex flex-col items-start gap-4 p-8">
        <CalendarWithPresets value={date} onValueChange={setDate} />
        <p className="text-sm text-muted-foreground">
          {date ? date.toLocaleDateString() : "Nothing selected"}
        </p>
      </div>
    )
  },
}