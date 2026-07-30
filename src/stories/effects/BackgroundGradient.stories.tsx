import type { Meta, StoryObj } from "@storybook/react"
import { BackgroundGradient } from "../../components/effects/background-gradient"

const meta: Meta<typeof BackgroundGradient> = {
  title: "Effects/BackgroundGradient",
  component: BackgroundGradient,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center">
      <BackgroundGradient className="rounded-2xl p-6">
        <div className="h-48 w-80 rounded-xl bg-background/80 flex flex-col items-center justify-center p-6">
          <h3 className="text-xl font-bold">Card with Gradient</h3>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Animated gradient background with blur effect
          </p>
        </div>
      </BackgroundGradient>
    </div>
  ),
}

export const Static: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center">
      <BackgroundGradient animate={false} className="rounded-2xl p-6">
        <div className="h-48 w-80 rounded-xl bg-background/80 flex flex-col items-center justify-center p-6">
          <h3 className="text-xl font-bold">Static Gradient</h3>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Non-animated gradient background
          </p>
        </div>
      </BackgroundGradient>
    </div>
  ),
}
