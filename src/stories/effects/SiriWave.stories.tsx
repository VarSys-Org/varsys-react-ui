import type { Meta, StoryObj } from "@storybook/react"
import { SiriWave } from "../../components/effects/siri-wave"

const meta: Meta<typeof SiriWave> = {
  title: "Effects/SiriWave",
  component: SiriWave,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Wave: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SiriWave variant="wave" size={360} />
    </div>
  ),
}

export const ListeningPill: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <button className="flex items-center gap-3 rounded-full border border-border px-4 py-3">
        <SiriWave variant="wave" size={40} />
        <span className="text-sm text-muted-foreground">Listening...</span>
      </button>
    </div>
  ),
}

export const Orb: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SiriWave variant="orb" size={280} />
    </div>
  ),
}