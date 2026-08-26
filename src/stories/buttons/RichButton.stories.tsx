import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight } from "lucide-react"
import { RichButton } from "../../components/buttons/rich-button"

const meta: Meta<typeof RichButton> = {
  title: "Buttons/RichButton",
  component: RichButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <RichButton>Get Started</RichButton>
      <RichButton color="blue">
        Learn more <ArrowRight />
      </RichButton>
      <RichButton color="emerald" size="lg">
        Launch
      </RichButton>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <RichButton color="purple">Purple</RichButton>
      <RichButton color="pink">Pink</RichButton>
      <RichButton color="amber">Amber</RichButton>
      <RichButton color="teal">Teal</RichButton>
      <RichButton color="rose">Rose</RichButton>
      <RichButton color="cyan">Cyan</RichButton>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-8 bg-background p-10">
      <RichButton size="sm">Small</RichButton>
      <RichButton>Default</RichButton>
      <RichButton size="lg">Large</RichButton>
    </div>
  ),
}