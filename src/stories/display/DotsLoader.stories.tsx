import type { Meta, StoryObj } from "@storybook/react"
import { DotsLoader } from "../../components/display/dots-loader"

const meta: Meta<typeof DotsLoader> = {
  title: "Display/DotsLoader",
  component: DotsLoader,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Pulse: Story = {
  args: {
    variant: "pulse",
  },
}

export const Ping: Story = {
  args: {
    variant: "ping",
  },
}

export const Bounce: Story = {
  args: {
    variant: "bounce",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Loading...",
  },
}

export const Inline: Story = {
  args: {
    label: "Uploading",
    inline: true,
  },
}

export const Muted: Story = {
  args: {
    color: "muted",
    label: "Syncing",
  },
}
