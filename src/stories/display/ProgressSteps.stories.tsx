import type { Meta, StoryObj } from "@storybook/react"
import { ProgressSteps } from "../../components/display/progress-steps"

const steps = [
  { value: 1, label: "Cart", description: "Review your items" },
  { value: 2, label: "Shipping", description: "Enter your address" },
  { value: 3, label: "Payment", description: "Choose a method" },
  { value: 4, label: "Confirm", description: "Place your order" },
]

const meta: Meta<typeof ProgressSteps> = {
  title: "Display/ProgressSteps",
  component: ProgressSteps,
  tags: ["autodocs"],
  args: { steps, current: 2 },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <ProgressSteps {...args} />,
}

export const Horizontal: Story = {
  render: (args) => (
    <div className="p-8">
      <ProgressSteps {...args} orientation="horizontal" />
    </div>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <div className="p-8">
      <ProgressSteps {...args} orientation="vertical" />
    </div>
  ),
}

export const WithoutLabels: Story = {
  render: (args) => (
    <div className="p-8">
      <ProgressSteps {...args} showLabels={false} />
    </div>
  ),
}
