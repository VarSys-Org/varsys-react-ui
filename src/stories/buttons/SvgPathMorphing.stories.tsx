import type { Meta, StoryObj } from "@storybook/react"
import { SvgPathMorphing } from "../../components/buttons/svg-path-morphing"

const meta: Meta<typeof SvgPathMorphing> = {
  title: "Buttons/SvgPathMorphing",
  component: SvgPathMorphing,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <SvgPathMorphing />
    </div>
  ),
}

export const Playing: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <SvgPathMorphing startPlaying />
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="flex items-center justify-center p-8">
      <SvgPathMorphing size={48} strokeWidth={2} />
    </div>
  ),
}
