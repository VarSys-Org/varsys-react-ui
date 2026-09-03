import type { Meta, StoryObj } from "@storybook/react"
import { Check, Copy, Moon, Sun } from "lucide-react"

import { Swap, SwapOff, SwapOn } from "../../components/display/swap"

const meta: Meta<typeof Swap> = {
  title: "Display/Swap",
  component: Swap,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-24 items-center justify-center p-8">
      <Swap>
        <SwapOn>
          <Check className="h-5 w-5" />
        </SwapOn>
        <SwapOff>
          <Copy className="h-5 w-5" />
        </SwapOff>
      </Swap>
    </div>
  ),
}

export const Rotate: Story = {
  render: () => (
    <div className="flex min-h-24 items-center justify-center p-8">
      <Swap animation="rotate">
        <SwapOn>
          <Check className="h-5 w-5" />
        </SwapOn>
        <SwapOff>
          <Copy className="h-5 w-5" />
        </SwapOff>
      </Swap>
    </div>
  ),
}

export const Hover: Story = {
  render: () => (
    <div className="flex min-h-24 items-center justify-center p-8">
      <Swap activationMode="hover" animation="flip">
        <SwapOn>
          <Moon className="h-5 w-5" />
        </SwapOn>
        <SwapOff>
          <Sun className="h-5 w-5" />
        </SwapOff>
      </Swap>
    </div>
  ),
}