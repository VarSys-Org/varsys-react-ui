import type { Meta, StoryObj } from "@storybook/react"
import { Magnet } from "../../components/effects/magnet"

const meta: Meta<typeof Magnet> = {
  title: "Effects/Magnet",
  component: Magnet,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <Magnet padding={120}>
        <div className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground">
          Magnetic Button
        </div>
      </Magnet>
    </div>
  ),
}

export const StrongPull: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <Magnet padding={200} magnetStrength={1.5}>
        <div className="rounded-xl border border-border bg-card px-8 py-4 font-semibold text-card-foreground">
          Strong pull zone
        </div>
      </Magnet>
    </div>
  ),
}