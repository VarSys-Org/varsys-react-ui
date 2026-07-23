import type { Meta, StoryObj } from "@storybook/react"
import {
  Message,
  MessageContent,
  MessageHeader,
  MessageFooter,
  MessageAvatar,
  MessageGroup,
} from "../../components/display/message"
import { Bubble, BubbleContent } from "../../components/display/bubble"

const meta: Meta<typeof Message> = {
  title: "Display/Message",
  component: Message,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Message>
      <MessageContent>
        <Bubble>
          <BubbleContent>How can I help you today?</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  ),
}

export const AlignedEnd: Story = {
  render: () => (
    <Message align="end">
      <MessageContent>
        <Bubble align="end">
          <BubbleContent>Deploying to prod real quick.</BubbleContent>
        </Bubble>
      </MessageContent>
    </Message>
  ),
}

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Message>
      <MessageContent>
        <MessageHeader>Olivia</MessageHeader>
        <Bubble>
          <BubbleContent>I already checked the logs.</BubbleContent>
        </Bubble>
        <MessageFooter>Read Yesterday</MessageFooter>
      </MessageContent>
    </Message>
  ),
}

export const Group: Story = {
  render: () => (
    <MessageGroup>
      <Message>
        <MessageContent>
          <Bubble>
            <BubbleContent>I checked the registry addresses.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble>
            <BubbleContent>The component and example JSON now live under the UI registry.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}
