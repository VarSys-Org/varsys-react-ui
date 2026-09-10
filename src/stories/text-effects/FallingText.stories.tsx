import type { Meta, StoryObj } from "@storybook/react"
import { FallingText } from "../../components/text-effects/falling-text"

const meta: Meta<typeof FallingText> = {
  title: "TextEffects/FallingText",
  component: FallingText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full bg-background">
      <FallingText text="The words tumble away with physics" highlightWords={["tumble"]} />
    </div>
  ),
}

export const ClickToStart: Story = {
  render: () => (
    <div className="h-[400px] w-full bg-background">
      <FallingText text="Click anywhere to release" trigger="click" gravity={0.8} />
    </div>
  ),
}

export const HoverToStart: Story = {
  render: () => (
    <div className="h-[400px] w-full bg-background">
      <FallingText text="Hover over me" trigger="hover" highlightWords={["over"]} />
    </div>
  ),
}