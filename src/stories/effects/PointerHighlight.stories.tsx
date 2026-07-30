import type { Meta, StoryObj } from "@storybook/react"
import { PointerHighlight } from "../../components/effects/pointer-highlight"

const meta: Meta<typeof PointerHighlight> = {
  title: "Effects/PointerHighlight",
  component: PointerHighlight,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center">
      <PointerHighlight>
        <span className="text-2xl font-bold">Highlighted Text</span>
      </PointerHighlight>
    </div>
  ),
}

export const Inline: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center">
      <p className="text-lg">
        The best way to grow is to{" "}
        <PointerHighlight>
          <span className="font-semibold">collaborate</span>
        </PointerHighlight>
      </p>
    </div>
  ),
}
