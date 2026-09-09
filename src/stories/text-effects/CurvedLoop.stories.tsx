import type { Meta, StoryObj } from "@storybook/react"
import { CurvedLoop } from "../../components/text-effects/curved-loop"

const meta: Meta<typeof CurvedLoop> = {
  title: "TextEffects/CurvedLoop",
  component: CurvedLoop,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <CurvedLoop marqueeText="VARSYS • INDUSTRIAL UI •" speed={2} />
    </div>
  ),
}

export const GentleCurve: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <CurvedLoop marqueeText="PRECISION • CONTROL •" curveAmount={150} speed={1.2} />
    </div>
  ),
}

export const RightDirection: Story = {
  render: () => (
    <div className="flex min-h-72 items-center justify-center bg-background p-10">
      <CurvedLoop marqueeText="HANDCRAFTED • COMPONENTS •" direction="right" speed={3} />
    </div>
  ),
}