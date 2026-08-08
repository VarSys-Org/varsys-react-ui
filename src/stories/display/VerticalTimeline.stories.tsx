import type { Meta, StoryObj } from "@storybook/react"
import { VerticalTimeline } from "../../components/display/vertical-timeline"
import type { TimelineEntry } from "../../components/display/vertical-timeline"

const meta: Meta<typeof VerticalTimeline> = {
  title: "Display/VerticalTimeline",
  component: VerticalTimeline,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const entries: TimelineEntry[] = [
  {
    id: "1",
    date: "12/02/2025",
    title: "Kickoff",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "2",
    date: "15/03/2025",
    title: "First Milestone",
    description: "Fuga officiis tempora ipsum adipisci tenetur sunt.",
  },
  {
    id: "3",
    date: "24/04/2025",
    title: "Launch",
    description: "Exercitationem sed pariatur porro!",
  },
]

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <VerticalTimeline entries={entries} />
    </div>
  ),
}

export const Alternating: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <VerticalTimeline alternating entries={entries} />
    </div>
  ),
}

export const WithCustomDots: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <VerticalTimeline
        entries={entries.map((entry, index) => ({
          ...entry,
          dot: (
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {index + 1}
            </span>
          ),
        }))}
      />
    </div>
  ),
}

export const WithoutDescriptions: Story = {
  render: () => (
    <div className="mx-auto max-w-md p-8">
      <VerticalTimeline
        entries={entries.map(({ id, date, title }) => ({ id, date, title }))}
      />
    </div>
  ),
}
