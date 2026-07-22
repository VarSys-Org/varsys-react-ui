import type { Meta, StoryObj } from "@storybook/react"
import { InfiniteMovingCards } from "../../components/cards/infinite-moving-cards"

const meta: Meta<typeof InfiniteMovingCards> = {
  title: "Cards/InfiniteMovingCards",
  component: InfiniteMovingCards,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-[20rem] w-full items-center justify-center rounded-md">
      <InfiniteMovingCards
        items={[
          { quote: "The best code is the code that never has to be written.", name: "John Doe", title: "Engineer" },
          { quote: "Simplicity is the soul of efficiency.", name: "Jane Smith", title: "Designer" },
          { quote: "First, solve the problem. Then, write the code.", name: "Bob Johnson", title: "Developer" },
          { quote: "Code is like humor. When you have to explain it, it's bad.", name: "Alice Brown", title: "Architect" },
        ]}
        direction="left"
        speed="slow"
      />
    </div>
  ),
}
