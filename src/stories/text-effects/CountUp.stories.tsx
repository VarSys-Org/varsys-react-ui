import type { Meta, StoryObj } from "@storybook/react"
import { CountUp } from "../../components/text-effects/count-up"

const meta: Meta<typeof CountUp> = {
  title: "TextEffects/CountUp",
  component: CountUp,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <CountUp to={123456} separator="," className="text-5xl font-bold text-foreground" />
    </div>
  ),
}

export const WithDecimals: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <CountUp to={99.9} from={0.5} duration={3} className="text-5xl font-bold text-foreground" />
    </div>
  ),
}

export const CountDown: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <CountUp to={100} from={0} direction="down" className="text-5xl font-bold text-foreground" />
    </div>
  ),
}