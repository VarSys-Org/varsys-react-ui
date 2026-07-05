import type { Meta, StoryObj } from "@storybook/react"
import { NumberTicker } from "../../components/ui/number-ticker"
import { Meteors } from "../../components/ui/meteors"

const meta: Meta = {
  title: "Aceternity/Effects",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const NumberTickerDemo: Story = {
  render: () => <div className="flex items-center justify-center py-10"><NumberTicker value={1234567} /></div>
}

export const MeteorsDemo: Story = {
  render: () => (
    <div className="relative h-[400px] w-full max-w-2xl overflow-hidden bg-slate-900 rounded-lg flex items-center justify-center">
      <Meteors number={20} />
      <p className="text-white text-xl font-bold relative z-10">Meteors Effect</p>
    </div>
  ),
}
