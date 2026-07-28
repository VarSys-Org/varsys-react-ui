import type { Meta, StoryObj } from "@storybook/react"
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "../../components/effects/text-reveal-card"

const meta: Meta<typeof TextRevealCard> = { title: "Effects/TextRevealCard", component: TextRevealCard, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { text: "You know the business", revealText: "I know the chemistry" },
  render: (args) => (
    <TextRevealCard {...args}>
      <TextRevealCardTitle>Sometimes, you just need a reveal</TextRevealCardTitle>
      <TextRevealCardDescription>Hover over the text to reveal the magic</TextRevealCardDescription>
    </TextRevealCard>
  ),
}
