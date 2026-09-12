import type { Meta, StoryObj } from "@storybook/react"
import { Chunk } from "../../components/effects/chunk"

const meta: Meta<typeof Chunk> = {
  title: "Effects/Chunk",
  component: Chunk,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <Chunk />
    </div>
  ),
}

export const Easy: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <Chunk difficulty="easy" />
    </div>
  ),
}

export const CustomPhrases: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <Chunk
        difficulty="hard"
        phrases={["Compiling", "Linting", "Bundling", "Optimizing"]}
        completedMessage="Build complete"
      />
    </div>
  ),
}