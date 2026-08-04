import type { Meta, StoryObj } from "@storybook/react"
import { WisprFlowText } from "../../components/text-effects/wispr-flow-text-animation"

const meta: Meta<typeof WisprFlowText> = {
  title: "TextEffects/WisprFlowText",
  component: WisprFlowText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[30rem] overflow-hidden">
      <WisprFlowText />
    </div>
  ),
}
