import type { Meta, StoryObj } from "@storybook/react"
import { ClientTweetCard } from "../../components/device-mocks/client-tweet-card"

const meta: Meta<typeof ClientTweetCard> = {
  title: "DeviceMocks/ClientTweetCard",
  component: ClientTweetCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "1681722946902589441",
  },
  render: (args) => (
    <div className="flex min-h-96 items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <ClientTweetCard {...args} />
      </div>
    </div>
  ),
}
