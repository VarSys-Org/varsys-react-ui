import type { Meta, StoryObj } from "@storybook/react"
import { DynamicIsland } from "../../components/device-mocks/dynamic-island"
import type { DynamicIslandState } from "../../components/device-mocks/dynamic-island"
import { Check, LoaderCircle, Music2, Mic } from "lucide-react"

const meta: Meta<typeof DynamicIsland> = {
  title: "DeviceMocks/DynamicIsland",
  component: DynamicIsland,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-start justify-center bg-background p-10">
      <DynamicIsland />
    </div>
  ),
}

export const NowPlaying: Story = {
  render: () => {
    const states: DynamicIslandState[] = [
      { label: "Now Playing", icon: <Music2 className="size-4" /> },
      { label: "Processing…", icon: <LoaderCircle className="size-4 animate-spin" /> },
      { label: "Added to Queue", icon: <Check className="size-4" /> },
    ]
    return (
      <div className="flex min-h-80 items-start justify-center bg-background p-10">
        <DynamicIsland states={states} interval={1800} />
      </div>
    )
  },
}

export const Recording: Story = {
  render: () => (
    <div className="flex min-h-80 items-start justify-center bg-background p-10">
      <DynamicIsland
        states={[
          { label: "Listening…", icon: <Mic className="size-4" />, duration: 1500 },
          { label: "Transcribing", icon: <LoaderCircle className="size-4 animate-spin" />, duration: 2200 },
          { label: "Reply ready", icon: <Check className="size-4" /> },
        ]}
      />
    </div>
  ),
}