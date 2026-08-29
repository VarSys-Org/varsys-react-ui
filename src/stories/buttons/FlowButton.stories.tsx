import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight } from "lucide-react"
import { FlowButton } from "../../components/buttons/flow-button"

const meta: Meta<typeof FlowButton> = {
  title: "Buttons/FlowButton",
  component: FlowButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <FlowButton>Get Started</FlowButton>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <FlowButton>
        Explore
        <ArrowRight />
      </FlowButton>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-background p-10">
      <FlowButton size="sm">Small</FlowButton>
      <FlowButton>Default</FlowButton>
      <FlowButton size="lg">Large</FlowButton>
    </div>
  ),
}

export const ColoredBorder: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <FlowButton borderColor="var(--primary)">Primary Border</FlowButton>
    </div>
  ),
}