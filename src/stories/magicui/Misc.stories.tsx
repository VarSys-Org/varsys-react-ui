import type { Meta, StoryObj } from "@storybook/react"
import { SparklesText } from "../../components/ui/sparkles-text"
import { ShimmerButton } from "../../components/ui/shimmer-button"

const meta: Meta = {
  title: "MagicUI/Misc",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const SparklesTextDemo: Story = {
  render: () => <div className="flex items-center justify-center py-20"><SparklesText>Sparkles</SparklesText></div>
}

export const ShimmerButtonDemo: Story = {
  render: () => (
    <div className="flex items-center justify-center py-20">
      <ShimmerButton><span className="whitespace-pre-wrap text-center text-sm font-medium leading-none text-white">Shimmer Button</span></ShimmerButton>
    </div>
  ),
}
