import * as React from "react"
import type { DateRange } from "react-day-picker"
import type { Meta, StoryObj } from "@storybook/react"
import { RangeCalendarMin } from "../../components/forms/range-calendar-min"

const meta: Meta<typeof RangeCalendarMin> = {
  title: "Forms/RangeCalendarMin",
  component: RangeCalendarMin,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <RangeCalendarMin minDays={5} hint="A minimum of 5 days is required" />
    </div>
  ),
}

export const WithMaxDays: Story = {
  render: () => (
    <div className="p-8">
      <RangeCalendarMin
        minDays={2}
        maxDays={14}
        hint="Select between 2 and 14 days"
      />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>(undefined)
    return (
      <div className="flex flex-col items-start gap-4 p-8">
        <RangeCalendarMin value={range} onValueChange={setRange} minDays={3} />
        <p className="text-sm text-muted-foreground">
          {range?.from
            ? `${range.from.toLocaleDateString()} – ${range.to?.toLocaleDateString() ?? "…"}`
            : "Select a range"}
        </p>
      </div>
    )
  },
}