import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { DateInputPicker } from "../../components/forms/date-input-picker"

const meta: Meta<typeof DateInputPicker> = {
  title: "Forms/DateInputPicker",
  component: DateInputPicker,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm p-8">
      <DateInputPicker label="Subscription Date" placeholder="June 01, 2025" />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <div className="flex w-full max-w-sm flex-col items-start gap-4 p-8">
        <DateInputPicker label="Event Date" value={date} onValueChange={setDate} />
        <p className="text-sm text-muted-foreground">
          {date ? date.toLocaleDateString() : "Nothing selected"}
        </p>
      </div>
    )
  },
}

export const CustomFormat: Story = {
  render: () => (
    <div className="w-full max-w-sm p-8">
      <DateInputPicker
        label="Start Date"
        placeholder="dd/mm/yyyy"
        format={(date) =>
          date
            ? date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : ""
        }
      />
    </div>
  ),
}