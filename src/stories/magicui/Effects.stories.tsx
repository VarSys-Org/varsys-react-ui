import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedList } from "../../components/effects/animated-list"
import { AnimatedBeam } from "../../components/effects/animated-beam"
import { BorderBeam } from "../../components/effects/border-beam"
import { ShineBorder } from "../../components/cards/shine-border"
import { MagicCard } from "../../components/cards/magic-card"

const meta: Meta = {
  title: "MagicUI/Effects",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const AnimatedListDemo: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-2 h-[300px] overflow-hidden">
      <AnimatedList>
        {["New user signed up", "Payment received", "Invoice generated", "Report ready", "Message sent"].map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border bg-background p-3 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </AnimatedList>
    </div>
  ),
  name: "Animated List",
}

export const BorderBeamDemo: Story = {
  render: () => (
    <div className="relative w-[300px] h-[200px] rounded-xl bg-background border overflow-hidden flex items-center justify-center">
      <BorderBeam />
      <p className="text-sm font-medium">Border Beam Effect</p>
    </div>
  ),
  name: "Border Beam",
}

export const ShineBorderDemo: Story = {
  render: () => (
    <div className="relative w-[300px] h-[200px]">
      <ShineBorder className="h-full w-full" shineColor={["#A07CFE", "#FE8FB8", "#FFDEE2"]} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm font-medium">Shine Border</p>
      </div>
    </div>
  ),
  name: "Shine Border",
}

export const MagicCardDemo: Story = {
  render: () => (
    <MagicCard className="w-[300px] h-[200px] flex items-center justify-center">
      <p className="text-sm font-medium">Magic Card with glow</p>
    </MagicCard>
  ),
  name: "Magic Card",
}
