import type { Meta, StoryObj } from "@storybook/react"
import { JobCard } from "../../components/cards/job-card"

const meta: Meta<typeof JobCard> = {
  title: "Cards/JobCard",
  component: JobCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const jobs = [
  {
    companyName: "Google",
    jobTitle: "Full stack engineer",
    jobDescription:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    jobType: "Full-time",
    location: "Remotely",
  },
  {
    companyName: "Figma",
    jobTitle: "UI/UX Designer",
    jobDescription:
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    jobType: "Full-time",
    location: "Mauritania",
  },
]

export const Default: Story = {
  render: () => <JobCard jobs={jobs} />,
}
