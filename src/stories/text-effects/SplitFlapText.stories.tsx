import type { Meta, StoryObj } from "@storybook/react"
import { SplitFlapText } from "../../components/text-effects/split-flap-text"

const meta: Meta<typeof SplitFlapText> = {
  title: "TextEffects/SplitFlapText",
  component: SplitFlapText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SplitFlapText words={["LAUNCH READY", "SYNC ONLINE", "SIGNAL LIVE"]} />
    </div>
  ),
}

export const SingleText: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SplitFlapText text="REACTBITS" />
    </div>
  ),
}

export const Numeric: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SplitFlapText
        text="12 34 56"
        charset="numeric"
        tileColor="#0f172a"
        textColor="#f8fafc"
        fontSize={44}
      />
    </div>
  ),
}

export const NoLoop: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <SplitFlapText
        words={["FIRST FRAME", "SECOND FRAME"]}
        loop={false}
        cycleDelay={600}
        fontSize={40}
      />
    </div>
  ),
}