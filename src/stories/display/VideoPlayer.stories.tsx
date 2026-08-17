import type { Meta, StoryObj } from "@storybook/react"
import { VideoPlayer } from "../../components/display/video-player"

const meta: Meta<typeof VideoPlayer> = {
  title: "Display/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const SAMPLE_SRC =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
const POSTER = "https://picsum.photos/seed/video-poster/1280/720"

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-3xl p-8">
      <VideoPlayer src={SAMPLE_SRC} poster={POSTER} />
    </div>
  ),
}

export const AutoplayMutedLoop: Story = {
  render: () => (
    <div className="w-full max-w-3xl p-8">
      <VideoPlayer src={SAMPLE_SRC} autoPlay muted loop />
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <div className="w-full max-w-3xl p-8">
      <VideoPlayer
        src={SAMPLE_SRC}
        poster={POSTER}
        showTime={false}
        showVolume={false}
        showSpeed={false}
        showFullscreen={false}
      />
    </div>
  ),
}

export const NoControls: Story = {
  render: () => (
    <div className="w-full max-w-3xl p-8">
      <VideoPlayer src={SAMPLE_SRC} poster={POSTER} controls={false} />
    </div>
  ),
}