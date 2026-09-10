import type { Meta, StoryObj } from "@storybook/react"
import { FadeContent } from "../../components/effects/fade-content"

const meta: Meta<typeof FadeContent> = {
  title: "Effects/FadeContent",
  component: FadeContent,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-80 flex-col items-center justify-center gap-6 bg-background p-10">
      {Array.from({ length: 3 }).map((_, i) => (
        <FadeContent key={i} blur className="w-full max-w-xl rounded-xl border border-border bg-card p-8 text-card-foreground">
          Fade in block {i + 1}
        </FadeContent>
      ))}
    </div>
  ),
}

export const FadeInOut: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <FadeContent disappearAfter={3} disappearDuration={0.8} className="rounded-xl bg-primary px-8 py-4 text-primary-foreground">
        I fade away after 3 seconds
      </FadeContent>
    </div>
  ),
}