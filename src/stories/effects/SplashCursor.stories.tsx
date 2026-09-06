import type { Meta, StoryObj } from "@storybook/react"
import { SplashCursor } from "../../components/effects/splash-cursor"

const meta: Meta<typeof SplashCursor> = {
  title: "Effects/SplashCursor",
  component: SplashCursor,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <SplashCursor />
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <p className="text-sm font-medium text-zinc-300">
          Move your cursor to paint fluid splashes
        </p>
      </div>
    </div>
  ),
}

export const SingleColor: Story = {
  render: () => (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <SplashCursor RAINBOW_MODE={false} COLOR="#8B5CF6" />
    </div>
  ),
}

export const Subtle: Story = {
  render: () => (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-zinc-950">
      <SplashCursor
        DYE_RESOLUTION={768}
        DENSITY_DISSIPATION={4.5}
        VELOCITY_DISSIPATION={2.5}
        RAINBOW_MODE={false}
        COLOR="#22D3EE"
      />
    </div>
  ),
}