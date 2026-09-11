import type { Meta, StoryObj } from "@storybook/react"
import { Orb } from "../../components/effects/orb"

const meta: Meta<typeof Orb> = {
  title: "Effects/Orb",
  component: Orb,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-[400px] w-full items-center justify-center bg-background p-10">
      <div className="h-80 w-80">
        <Orb />
      </div>
    </div>
  ),
}

export const WarmHue: Story = {
  render: () => (
    <div className="flex h-[400px] w-full items-center justify-center bg-background p-10">
      <div className="h-80 w-80">
        <Orb hue={40} hoverIntensity={0.35} />
      </div>
    </div>
  ),
}

export const Static: Story = {
  render: () => (
    <div className="flex h-[400px] w-full items-center justify-center bg-background p-10">
      <div className="h-80 w-80">
        <Orb forceHoverState rotateOnHover={false} hue={260} />
      </div>
    </div>
  ),
}