import * as React from "react"
import type { DateRange } from "react-day-picker"
import type { Meta, StoryObj } from "@storybook/react"
import { DateRangePicker } from "../../components/forms/date-range-picker"

const meta: Meta<typeof DateRangePicker> = {
  title: "Forms/DateRangePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <DateRangePicker />
    </div>
  ),
}

export const WithPresets: Story = {
  render: () => {
    const presets = [
      {
        label: "Today",
        dateRange: { from: new Date(), to: new Date() },
      },
      {
        label: "Last 7 days",
        dateRange: {
          from: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
          to: new Date(),
        },
      },
      {
        label: "Last 30 days",
        dateRange: {
          from: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000),
          to: new Date(),
        },
      },
    ]
    return (
      <div className="p-8">
        <DateRangePicker presets={presets} />
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<DateRange | undefined>(undefined)
    return (
      <div className="p-8 flex flex-col items-start gap-4">
        <DateRangePicker value={value} onChange={setValue} />
        <p className="text-sm text-muted-foreground">
          {value
            ? `${value.from?.toLocaleDateString()} – ${value.to?.toLocaleDateString() ?? ""}`
            : "Nothing selected"}
        </p>
      </div>
    )
  },
}
