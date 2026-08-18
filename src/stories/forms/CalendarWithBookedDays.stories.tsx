import type { Meta, StoryObj } from "@storybook/react"
import { CalendarWithBookedDays } from "../../components/forms/calendar-with-booked-days"

const meta: Meta<typeof CalendarWithBookedDays> = {
  title: "Forms/CalendarWithBookedDays",
  component: CalendarWithBookedDays,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const bookedDates = Array.from(
  { length: 12 },
  (_, i) => new Date(2026, 7, 15 + i),
)

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <CalendarWithBookedDays
        bookedDates={bookedDates}
        defaultValue={new Date(2026, 7, 12)}
      />
    </div>
  ),
}

export const DifferentMonth: Story = {
  render: () => (
    <div className="p-8">
      <CalendarWithBookedDays
        bookedDates={[2, 3, 4, 9, 10, 22, 23].map((day) => new Date(2026, 8, day))}
        defaultValue={new Date(2026, 8, 1)}
      />
    </div>
  ),
}