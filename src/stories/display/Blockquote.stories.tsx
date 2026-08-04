import type { Meta, StoryObj } from "@storybook/react"
import { Blockquote } from "../../components/display/blockquote"

const meta: Meta<typeof Blockquote> = {
  title: "Display/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const quote =
  "I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed."

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Blockquote quote={quote} author="Josh Grazioso" />
    </div>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <div className="p-8">
      <Blockquote
        quote={quote}
        author="Josh Grazioso"
        source="CEO, Acme Inc."
        avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      />
    </div>
  ),
}

export const Bordered: Story = {
  render: () => (
    <div className="p-8">
      <Blockquote
        variant="bordered"
        quote={quote}
        author="Josh Grazioso"
        source="CEO, Acme Inc."
        avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      />
    </div>
  ),
}

export const Centered: Story = {
  render: () => (
    <div className="p-8">
      <Blockquote
        variant="center"
        quote={quote}
        author="Josh Grazioso"
        source="CEO, Acme Inc."
      />
    </div>
  ),
}

export const Large: Story = {
  render: () => (
    <div className="p-8">
      <Blockquote quote={quote} author="Josh Grazioso" size="lg" />
    </div>
  ),
}
