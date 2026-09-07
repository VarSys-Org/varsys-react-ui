import type { Meta, StoryObj } from "@storybook/react"
import { SpotifyCard } from "../../components/cards/spotify-card"

const meta: Meta<typeof SpotifyCard> = {
  title: "Cards/SpotifyCard",
  component: SpotifyCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const track = {
  title: "Midnight City",
  artist: "M83",
  image:
    "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=300&h=300&fit=crop&auto=format",
  link: "https://open.spotify.com",
}

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <div className="w-full max-w-lg">
        <SpotifyCard track={track} />
      </div>
    </div>
  ),
}

export const WithAudio: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <div className="w-full max-w-lg">
        <SpotifyCard
          track={{
            ...track,
            title: "Intro",
            artist: "The xx",
            audio:
              "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
          }}
        />
      </div>
    </div>
  ),
}