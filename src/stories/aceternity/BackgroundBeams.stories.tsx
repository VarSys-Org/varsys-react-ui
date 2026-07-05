import type { Meta, StoryObj } from "@storybook/react"
import { BackgroundBeams } from "../../components/effects/background-beams"

const meta: Meta<typeof BackgroundBeams> = {
  title: "Aceternity/BackgroundBeams",
  component: BackgroundBeams,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-neutral-900">
      <BackgroundBeams />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Background Beams</h1>
      </div>
    </div>
  ),
}
