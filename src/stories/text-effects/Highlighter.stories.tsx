import type { Meta, StoryObj } from "@storybook/react"
import { Highlighter } from "../../components/text-effects/highlighter"

const meta: Meta<typeof Highlighter> = {
  title: "TextEffects/Highlighter",
  component: Highlighter,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Highlighter>

export const Highlight: Story = {
  render: () => (
    <div className="flex items-center justify-center py-20 text-lg">
      <p className="leading-relaxed">
        The{" "}
        <Highlighter action="highlight" color="#87CEFA">
          Magic UI Highlighter
        </Highlighter>{" "}
        makes important{" "}
        <Highlighter action="underline" color="#FF9800">
          text stand out
        </Highlighter>{" "}
        effortlessly.
      </p>
    </div>
  ),
}

export const Circle: Story = {
  render: () => (
    <div className="flex items-center justify-center py-20 text-lg">
      <p className="leading-relaxed">
        <Highlighter action="circle" color="#4CAF50">
          Circle this important text
        </Highlighter>
      </p>
    </div>
  ),
}

export const Box: Story = {
  render: () => (
    <div className="flex items-center justify-center py-20 text-lg">
      <p className="leading-relaxed">
        <Highlighter action="box" color="#E91E63">
          Box this content
        </Highlighter>
      </p>
    </div>
  ),
}

export const CrossedOff: Story = {
  render: () => (
    <div className="flex items-center justify-center py-20 text-lg">
      <p className="leading-relaxed">
        <Highlighter action="crossed-off" color="#F44336">
          Cross this out
        </Highlighter>
      </p>
    </div>
  ),
}
