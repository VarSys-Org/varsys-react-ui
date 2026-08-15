import type { Meta, StoryObj } from "@storybook/react"
import { TypingDots } from "../../components/display/typing-dots"

const meta: Meta<typeof TypingDots> = {
  title: "Display/TypingDots",
  component: TypingDots,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <TypingDots />
    </div>
  ),
}

export const InChatBubble: Story = {
  render: () => (
    <div className="p-8">
      <div className="inline-flex items-center rounded-2xl rounded-bl-sm border border-border bg-muted px-4 py-3">
        <TypingDots />
      </div>
    </div>
  ),
}

export const FiveDots: Story = {
  render: () => (
    <div className="p-8">
      <TypingDots dotCount={5} />
    </div>
  ),
}
