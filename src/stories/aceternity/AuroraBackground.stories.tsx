import type { Meta, StoryObj } from "@storybook/react"
import { AuroraBackground } from "../../components/effects/aurora-background"

const meta: Meta<typeof AuroraBackground> = {
  title: "Aceternity/AuroraBackground",
  component: AuroraBackground,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AuroraBackground className="h-[400px]">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-white">Aurora Background</h1>
        <p className="mt-2 text-neutral-300">Animated aurora effect behind content</p>
      </div>
    </AuroraBackground>
  ),
}
