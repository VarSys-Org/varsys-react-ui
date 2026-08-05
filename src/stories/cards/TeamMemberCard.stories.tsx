import type { Meta, StoryObj } from "@storybook/react"
import { TeamMemberCard } from "../../components/cards/team-member-card"

const meta: Meta<typeof TeamMemberCard> = {
  title: "Cards/TeamMemberCard",
  component: TeamMemberCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const members = [
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Chris bondi",
    email: "chridbondi@example.com",
  },
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "John lorin",
    email: "john@example.com",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "yasmine",
    email: "yasmine@example.com",
  },
]

export const Default: Story = {
  render: () => <TeamMemberCard members={members} />,
}
