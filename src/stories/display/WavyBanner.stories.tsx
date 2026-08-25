import type { Meta, StoryObj } from "@storybook/react"
import { WavyBanner } from "../../components/display/wavy-banner"

const meta: Meta<typeof WavyBanner> = {
  title: "Display/WavyBanner",
  component: WavyBanner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const data = [
  "from-red-500 to-orange-400",
  "from-orange-400 to-amber-400",
  "from-amber-400 to-lime-400",
  "from-lime-400 to-emerald-400",
  "from-emerald-400 to-cyan-400",
  "from-cyan-400 to-blue-500",
  "from-blue-500 to-violet-500",
  "from-violet-500 to-fuchsia-500",
]

export const Default: Story = {
  render: () => (
    <div className="w-full bg-background">
      <WavyBanner data={data} dataWidth={140} text="VARSYS" />
    </div>
  ),
}

export const LargeWord: Story = {
  render: () => (
    <div className="w-full bg-background">
      <WavyBanner data={data} dataWidth={180} text="DESIGN" height={600} />
    </div>
  ),
}
