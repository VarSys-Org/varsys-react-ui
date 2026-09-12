import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { PodcastCard } from "../../components/cards/podcast-card"

const meta: Meta<typeof PodcastCard> = {
  title: "Cards/PodcastCard",
  component: PodcastCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-3xl">
        <PodcastCard />
      </div>
    </div>
  ),
}

export const Playing: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <div className="w-full max-w-3xl">
        <PodcastCard
          playing
          episode="Episode #204"
          title="Designing for Motion"
          duration="62:10 minutes"
          featuring={["Ana", "Marcus"]}
          authorName="Design Studio"
        />
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [playing, setPlaying] = useState(false)
    return (
      <div className="flex min-h-80 items-center justify-center bg-background p-10">
        <div className="w-full max-w-3xl">
          <PodcastCard
            playing={playing}
            onTogglePlay={() => setPlaying((value) => !value)}
          />
        </div>
      </div>
    )
  },
}