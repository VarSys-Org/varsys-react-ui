import type { Meta, StoryObj } from "@storybook/react"
import { Timeline } from "../../components/ui/timeline"

const meta: Meta = {
  title: "Aceternity/Timeline",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const data = [
      { title: "2024 Q1", content: <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm">Started building the platform with React.</p> },
      { title: "2024 Q2", content: <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm">Launched beta with 100 users.</p> },
      { title: "2024 Q3", content: <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm">Reached 1,000 active users.</p> },
    ]
    return <div className="max-w-2xl mx-auto"><Timeline data={data} /></div>
  },
}
