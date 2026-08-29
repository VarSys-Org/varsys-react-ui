import type { Meta, StoryObj } from "@storybook/react"
import { TextMarquee } from "../../components/text-effects/text-marquee"

const meta: Meta<typeof TextMarquee> = {
  title: "TextEffects/TextMarquee",
  component: TextMarquee,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  "Design",
  "Engineering",
  "Product",
  "Research",
  "Growth",
  "Operations",
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <TextMarquee>{items}</TextMarquee>
    </div>
  ),
}

export const WithPrefix: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <TextMarquee prefix={<span className="text-2xl font-bold">✦</span>}>
        {items}
      </TextMarquee>
    </div>
  ),
}

export const Fast: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <TextMarquee speed={0.5}>{items}</TextMarquee>
    </div>
  ),
}

export const Tall: Story = {
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-background p-10">
      <TextMarquee height={300}>{items}</TextMarquee>
    </div>
  ),
}