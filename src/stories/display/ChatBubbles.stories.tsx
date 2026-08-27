import type { Meta, StoryObj } from "@storybook/react"
import { ChatBubbles } from "../../components/display/chat-bubbles"

const meta: Meta<typeof ChatBubbles> = {
  title: "Display/ChatBubbles",
  component: ChatBubbles,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ChatBubbles
        items={[
          {
            align: "start",
            name: "Support",
            content:
              "How can we help? You can ask questions about the product.",
          },
          {
            align: "end",
            name: "You",
            variant: "primary",
            content: "what's preline ui?",
          },
          {
            align: "start",
            name: "Support",
            content:
              "Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.",
            timestamp: "10:32 AM",
          },
        ]}
      />
    </div>
  ),
}

export const WithLinks: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ChatBubbles
        items={[
          {
            align: "start",
            name: "Support",
            content: (
              <div className="space-y-1.5">
                <p className="mb-1.5 text-sm">Here are some links to start:</p>
                <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                  <li>
                    <a
                      href="#"
                      className="text-primary decoration-2 hover:underline font-medium"
                    >
                      Installation Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary decoration-2 hover:underline font-medium"
                    >
                      Framework Guides
                    </a>
                  </li>
                </ul>
              </div>
            ),
          },
        ]}
      />
    </div>
  ),
}

export const SingleBubble: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ChatBubbles
        items={[
          {
            align: "end",
            variant: "primary",
            content: "Just a single quick message!",
          },
        ]}
      />
    </div>
  ),
}