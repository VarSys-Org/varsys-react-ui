import type { Meta, StoryObj } from "@storybook/react"
import { VideoText } from "../../components/text-effects/video-text"

const meta: Meta<typeof VideoText> = {
  title: "TextEffects/VideoText",
  component: VideoText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-[300px] w-full items-center justify-center bg-black">
      <VideoText
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        className="h-full w-full"
        fontSize={12}
      >
        VARSYS
      </VideoText>
    </div>
  ),
}
