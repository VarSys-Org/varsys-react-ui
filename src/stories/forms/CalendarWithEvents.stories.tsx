import type { Meta, StoryObj } from "@storybook/react"
import { CalendarWithEvents } from "../../components/forms/calendar-with-events"
import type { CalendarEvent } from "../../components/forms/calendar-with-events"

const meta: Meta<typeof CalendarWithEvents> = {
  title: "Forms/CalendarWithEvents",
  component: CalendarWithEvents,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const events: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Sync Meeting",
    start: new Date(2026, 7, 12, 9, 0),
    end: new Date(2026, 7, 12, 10, 0),
  },
  {
    id: "2",
    title: "Design Review",
    start: new Date(2026, 7, 12, 11, 30),
    end: new Date(2026, 7, 12, 12, 30),
  },
  {
    id: "3",
    title: "Client Presentation",
    start: new Date(2026, 7, 12, 14, 0),
    end: new Date(2026, 7, 12, 15, 0),
  },
  {
    id: "4",
    title: "Sprint Planning",
    start: new Date(2026, 7, 14, 10, 0),
    end: new Date(2026, 7, 14, 11, 0),
  },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <CalendarWithEvents events={events} defaultValue={new Date(2026, 7, 12)} />
    </div>
  ),
}

export const WithAddAction: Story = {
  render: () => (
    <div className="p-8">
      <CalendarWithEvents
        events={events}
        defaultValue={new Date(2026, 7, 12)}
        onAddEvent={() => window.alert("Add event")}
      />
    </div>
  ),
}

export const CustomEventRender: Story = {
  render: () => (
    <div className="p-8">
      <CalendarWithEvents
        events={events}
        defaultValue={new Date(2026, 7, 12)}
        renderEvent={(event) => (
          <div
            key={event.id}
            className="rounded-md border border-primary/30 bg-primary/10 p-2 pl-6 text-sm"
          >
            <div className="font-medium">{event.title}</div>
            <div className="text-xs text-muted-foreground">
              {event.start.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              })}
            </div>
          </div>
        )}
      />
    </div>
  ),
}