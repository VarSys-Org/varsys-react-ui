import type { Meta, StoryObj } from "@storybook/react"
import { Backlight } from "../../components/effects/backlight"

const meta: Meta<typeof Backlight> = {
  title: "Effects/Backlight",
  component: Backlight,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-12">
      <Backlight className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-8">
        <div className="rounded-lg bg-background p-6">
          <h2 className="text-xl font-bold">Glowing Card</h2>
          <p className="text-muted-foreground">This card has a backlight glow effect.</p>
        </div>
      </Backlight>
    </div>
  ),
}
