import type { Meta, StoryObj } from "@storybook/react"
import DisplayCards from "../../components/cards/display-cards"

const meta: Meta<typeof DisplayCards> = {
  title: "Cards/DisplayCards",
  component: DisplayCards,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <DisplayCards />
    </div>
  ),
}

export const CustomCards: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <DisplayCards
        cards={[
          {
            title: "Revenue",
            description: "Total revenue this quarter",
            date: "Q3 2026",
          },
          {
            title: "Users",
            description: "Active users this month",
            date: "August 2026",
          },
          {
            title: "Growth",
            description: "Month over month growth",
            date: "Updated today",
          },
        ]}
      />
    </div>
  ),
}
