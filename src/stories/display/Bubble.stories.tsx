import type { Meta, StoryObj } from "@storybook/react"
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "../../components/display/bubble"

const meta: Meta<typeof Bubble> = {
  title: "Display/Bubble",
  component: Bubble,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Bubble>
      <BubbleContent>Hey there! What's up?</BubbleContent>
    </Bubble>
  ),
}

export const AlignedEnd: Story = {
  render: () => (
    <Bubble align="end">
      <BubbleContent>This is aligned to the end.</BubbleContent>
    </Bubble>
  ),
}

export const Group: Story = {
  render: () => (
    <BubbleGroup>
      <Bubble>
        <BubbleContent>First message from the same sender.</BubbleContent>
      </Bubble>
      <Bubble>
        <BubbleContent>Second message grouped together.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
}

export const WithReactions: Story = {
  render: () => (
    <Bubble>
      <BubbleContent>I don't need tests, I know my code works.</BubbleContent>
      <BubbleReactions role="img" aria-label="Reactions: thumbs up, fire">
        <span>👍</span>
        <span>🔥</span>
      </BubbleReactions>
    </Bubble>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Bubble variant="default">
        <BubbleContent>Default variant</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Secondary variant</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Muted variant</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Outline variant</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Destructive variant</BubbleContent>
      </Bubble>
    </div>
  ),
}
