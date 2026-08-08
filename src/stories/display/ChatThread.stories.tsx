import type { Meta, StoryObj } from "@storybook/react"
import { ChatThread } from "../../components/display/chat-thread"
import type { ChatMessage } from "../../components/display/chat-thread"

const meta: Meta<typeof ChatThread> = {
  title: "Display/ChatThread",
  component: ChatThread,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const messages: ChatMessage[] = [
  {
    id: "1",
    sender: "other",
    name: "Mia",
    text: "Hey! Are you joining the demo this afternoon?",
    time: "10:24",
    status: "read",
  },
  {
    id: "2",
    sender: "me",
    text: "Absolutely. Send me the link when you get a chance.",
    time: "10:26",
    status: "read",
  },
  {
    id: "3",
    sender: "other",
    name: "Mia",
    text: "Here you go. See you there!",
    time: "10:28",
    status: "read",
  },
  {
    id: "4",
    sender: "me",
    text: "Perfect, thanks!",
    time: "10:29",
    status: "sent",
  },
]

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md rounded-xl border border-border bg-background p-4">
      <ChatThread messages={messages} />
    </div>
  ),
}

export const Dense: Story = {
  render: () => (
    <div className="mx-auto max-w-md rounded-xl border border-border bg-background p-4">
      <ChatThread dense messages={messages.slice(0, 3)} />
    </div>
  ),
}

export const WithFailedStatus: Story = {
  render: () => (
    <div className="mx-auto max-w-md rounded-xl border border-border bg-background p-4">
      <ChatThread
        messages={[
          ...messages,
          {
            id: "5",
            sender: "me",
            text: "Did you also get the updated deck?",
            time: "10:31",
            status: "failed",
          },
        ]}
      />
    </div>
  ),
}

export const NoMetadata: Story = {
  render: () => (
    <div className="mx-auto max-w-md rounded-xl border border-border bg-background p-4">
      <ChatThread
        messages={messages.map(({ id, sender, text }) => ({ id, sender, text }))}
      />
    </div>
  ),
}
