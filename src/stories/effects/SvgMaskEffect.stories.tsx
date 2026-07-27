import type { Meta, StoryObj } from "@storybook/react"
import { MaskContainer } from "../../components/effects/svg-mask-effect"

const meta: Meta<typeof MaskContainer> = {
  title: "Effects/SvgMaskEffect",
  component: MaskContainer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <MaskContainer
      revealText={
        <div className="mx-auto max-w-4xl text-center text-4xl font-bold text-black dark:text-white">
          The hidden content
        </div>
      }
      className="h-[60vh]"
    >
      Hover to reveal
    </MaskContainer>
  ),
}
