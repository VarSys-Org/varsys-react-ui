import type { Meta, StoryObj } from "@storybook/react"
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from "../../components/display/message-scroller"
import {
  Message,
  MessageContent,
} from "../../components/display/message"
import { Bubble, BubbleContent } from "../../components/display/bubble"

const meta: Meta<typeof MessageScrollerProvider> = {
  title: "Display/MessageScroller",
  component: MessageScrollerProvider,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const messages = [
  { id: "1", role: "user", content: "How can I help you today?" },
  { id: "2", role: "assistant", content: "Morning! What are we working on today?" },
  { id: "3", role: "user", content: "I'm building a chat for our app and the scroll behavior is driving me nuts." },
]

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <MessageScrollerProvider autoScroll>
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent>
              {messages.map((msg) => (
                <MessageScrollerItem
                  key={msg.id}
                  messageId={msg.id}
                  scrollAnchor={msg.role === "user"}
                >
                  <Message align={msg.role === "user" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble align={msg.role === "user" ? "end" : "start"}>
                        <BubbleContent>{msg.content}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  ),
}
