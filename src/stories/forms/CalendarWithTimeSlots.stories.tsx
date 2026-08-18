import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { CalendarWithTimeSlots } from "../../components/forms/calendar-with-time-slots"

const meta: Meta<typeof CalendarWithTimeSlots> = {
  title: "Forms/CalendarWithTimeSlots",
  component: CalendarWithTimeSlots,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
].map((value) => ({ value }))

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <CalendarWithTimeSlots />
    </div>
  ),
}

export const WithSummary: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [time, setTime] = React.useState<string | undefined>("10:00")
    return (
      <div className="p-8">
        <CalendarWithTimeSlots
          value={date}
          onValueChange={setDate}
          selectedTime={time}
          onTimeChange={setTime}
          timeSlots={timeSlots}
          summary={(selectedDate, selectedTime) => (
            <>
              {selectedDate && selectedTime ? (
                <div className="flex w-full flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
                  <span>
                    Meeting booked for{" "}
                    <span className="font-medium">
                      {selectedDate.toLocaleDateString(undefined, {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}
                    </span>{" "}
                    at <span className="font-medium">{selectedTime}</span>.
                  </span>
                  <button
                    type="button"
                    className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <span>Select a date and time to continue.</span>
              )}
            </>
          )}
        />
      </div>
    )
  },
}

export const WithBookedDates: Story = {
  render: () => {
    const booked = [17, 18, 19, 20].map((day) => new Date(2026, 7, day))
    return (
      <div className="p-8">
        <CalendarWithTimeSlots bookedDates={booked} />
      </div>
    )
  },
}