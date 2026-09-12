import type { Meta, StoryObj } from "@storybook/react"
import { ChatConversation } from "../../components/display/chat-conversation"
import type { ChatConversationMessage } from "../../components/display/chat-conversation"

const meta: Meta<typeof ChatConversation> = {
  title: "Display/ChatConversation",
  component: ChatConversation,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const messages: ChatConversationMessage[] = [
  {
    role: "user",
    name: "You",
    content: "Can you summarize today's release notes?",
  },
  {
    role: "assistant",
    name: "Assistant",
    content:
      "Sure! Today we shipped multi-select filters, a redesigned dashboard, and 14 bug fixes.",
  },
  {
    role: "user",
    name: "You",
    content: "What changed in the dashboard?",
  },
  {
    role: "assistant",
    name: "Assistant",
    content:
      "The dashboard now supports custom widgets, live refresh, and keyboard shortcuts for every action.",
  },
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-sm">
        <ChatConversation messages={messages} />
      </div>
    </div>
  ),
}

export const WithAvatars: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-sm">
        <ChatConversation
          messages={messages.map((m, i) => ({
            ...m,
            avatar: <span className="text-sm leading-none">{i % 2 === 0 ? "🧑" : "🤖"}</span>,
          }))}
          userLabel="You"
          assistantLabel="Copilot"
          interval={0.5}
        />
      </div>
    </div>
  ),
}

export const Fast: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-sm">
        <ChatConversation messages={messages.slice(0, 2)} interval={0.15} />
      </div>
    </div>
  ),
}