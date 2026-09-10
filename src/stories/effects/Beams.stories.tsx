import type { Meta, StoryObj } from "@storybook/react"
import { Beams } from "../../components/effects/beams"

const meta: Meta<typeof Beams> = {
  title: "Effects/Beams",
  component: Beams,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Beams />
    </div>
  ),
}

export const VioletLight: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Beams
        beamWidth={3}
        beamHeight={20}
        beamNumber={16}
        beamColor="#4f46e5"
        lightColor="#c7d2fe"
        backgroundColor="#0f0f23"
        lightMode
      />
    </div>
  ),
}

export const WideBeams: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Beams beamNumber={6} speed={3} scale={0.3} rotation={20} />
    </div>
  ),
}