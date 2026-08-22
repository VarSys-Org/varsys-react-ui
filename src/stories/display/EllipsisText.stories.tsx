import type { Meta, StoryObj } from "@storybook/react"

import { EllipsisText } from "../../components/display/ellipsis-text"

const meta: Meta<typeof EllipsisText> = {
  title: "Display/EllipsisText",
  component: EllipsisText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const LONG_TEXT =
  "A single line of text that is far too long to fit inside the narrow container, so the component truncates it and reveals the full sentence when you hover over it."

const LONG_MULTILINE =
  "A paragraph that wraps across several lines until it runs out of vertical space inside its container. Once it does, the component clips it and lets you peek at the remainder by hovering. This is the second sentence to make the paragraph long enough to overflow the clamped height."

export const SingleLine: Story = {
  render: () => (
    <div className="w-72 p-8">
      <EllipsisText text={LONG_TEXT} />
    </div>
  ),
}

export const MultiLine: Story = {
  render: () => (
    <div className="w-96 p-8">
      <EllipsisText text={LONG_MULTILINE} rows={2} />
    </div>
  ),
}

export const Expandable: Story = {
  render: () => (
    <div className="w-96 p-8">
      <EllipsisText text={LONG_MULTILINE} rows={2} expandable />
    </div>
  ),
}

export const ShortText: Story = {
  render: () => (
    <div className="w-72 p-8">
      <EllipsisText text="This short sentence fits without truncation." />
    </div>
  ),
}