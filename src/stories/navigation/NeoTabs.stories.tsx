import type { Meta, StoryObj } from "@storybook/react"
import { NeoTabs } from "../../components/navigation/neo-tabs"

const tabs = [
  {
    value: "profile",
    label: "Profile",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos, temporibus perspiciatis!",
  },
  {
    value: "account",
    label: "Account",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
  },
  {
    value: "notifications",
    label: "Notifications",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
  },
]

const meta: Meta<typeof NeoTabs> = {
  title: "Navigation/NeoTabs",
  component: NeoTabs,
  tags: ["autodocs"],
  args: {
    tabs,
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-2xl p-8">
      <NeoTabs {...args} />
    </div>
  ),
}

export const Controlled: Story = {
  render: (args) => (
    <div className="max-w-2xl p-8">
      <NeoTabs {...args} defaultValue="account" />
    </div>
  ),
}
