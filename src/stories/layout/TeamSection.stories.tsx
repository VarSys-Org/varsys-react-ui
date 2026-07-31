import type { Meta, StoryObj } from "@storybook/react"
import { TeamSection } from "../../components/layout/team-section"

const meta: Meta<typeof TeamSection> = {
  title: "Layout/TeamSection",
  component: TeamSection,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <TeamSection />,
}
