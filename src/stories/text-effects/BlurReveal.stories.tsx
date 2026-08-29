import type { Meta, StoryObj } from "@storybook/react"
import { BlurReveal } from "../../components/text-effects/blur-reveal"

const meta: Meta<typeof BlurReveal> = {
  title: "TextEffects/BlurReveal",
  component: BlurReveal,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <BlurReveal className="text-4xl font-bold max-w-2xl">
        Words materialize out of a blur, one character at a time.
      </BlurReveal>
    </div>
  ),
}

export const SlowReveal: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <BlurReveal speedReveal={0.8} speedSegment={0.25} className="text-3xl font-semibold max-w-2xl">
        A slower, more deliberate reveal.
      </BlurReveal>
    </div>
  ),
}

export const InView: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <BlurReveal inView className="text-3xl font-semibold max-w-2xl">
        Triggers when scrolled into view.
      </BlurReveal>
    </div>
  ),
}

export const AsHeading: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <BlurReveal as="h1" className="text-5xl font-bold max-w-2xl">
        Rendered as a heading element.
      </BlurReveal>
    </div>
  ),
}