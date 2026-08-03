import type { Meta, StoryObj } from "@storybook/react"
import { ScratchToReveal } from "../../components/effects/scratch-to-reveal"

const meta: Meta<typeof ScratchToReveal> = {
  title: "Effects/ScratchToReveal",
  component: ScratchToReveal,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-80 items-center justify-center p-8">
      <ScratchToReveal width={300} height={200} minScratchPercentage={60}>
        <div className="flex h-full w-full items-center justify-center bg-card">
          <p className="text-2xl font-bold text-foreground">You won a prize!</p>
        </div>
      </ScratchToReveal>
    </div>
  ),
}
