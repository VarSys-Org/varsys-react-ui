import type { Meta, StoryObj } from "@storybook/react"
import { ShareLinkModal } from "../../components/overlays/share-link-modal"

const meta: Meta<typeof ShareLinkModal> = {
  title: "Overlays/ShareLinkModal",
  component: ShareLinkModal,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => <ShareLinkModal />,
}

export const CustomLink: Story = {
  render: () => (
    <ShareLinkModal
      url="https://varsys.app/boards/5f2b9c1e"
      title="Share this board"
      description="Anyone with the link can view this board without signing in."
    />
  ),
}
