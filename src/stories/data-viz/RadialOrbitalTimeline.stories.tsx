import type { Meta, StoryObj } from "@storybook/react"
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "../../components/data-viz/radial-orbital-timeline"

const meta: Meta<typeof RadialOrbitalTimeline> = {
  title: "DataViz/RadialOrbitalTimeline",
  component: RadialOrbitalTimeline,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Kickoff",
    date: "Jan 2026",
    content:
      "Project kickoff meeting with stakeholders to align on goals and timeline.",
    category: "Planning",
    icon: () => <span>🚀</span>,
    relatedIds: [2, 3],
    status: "completed",
    energy: 90,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2026",
    content:
      "Wireframes and high-fidelity designs delivered for the core screens.",
    category: "Design",
    icon: () => <span>🎨</span>,
    relatedIds: [1, 3],
    status: "in-progress",
    energy: 70,
  },
  {
    id: 3,
    title: "Build",
    date: "Mar 2026",
    content: "Frontend and backend implementation across the main feature set.",
    category: "Engineering",
    icon: () => <span>⚙️</span>,
    relatedIds: [2, 4],
    status: "pending",
    energy: 45,
  },
  {
    id: 4,
    title: "Launch",
    date: "Apr 2026",
    content: "Public launch, marketing push, and ongoing support rotation.",
    category: "Release",
    icon: () => <span>🎉</span>,
    relatedIds: [3],
    status: "pending",
    energy: 20,
  },
]

export const Default: Story = {
  render: () => (
    <div className="h-[30rem] overflow-hidden rounded-lg">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  ),
}
