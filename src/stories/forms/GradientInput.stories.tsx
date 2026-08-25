import type { Meta, StoryObj } from "@storybook/react"
import { GradientInput } from "../../components/forms/gradient-input"

const meta: Meta<typeof GradientInput> = {
  title: "Forms/GradientInput",
  component: GradientInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <GradientInput placeholder="Enter your email" className="w-full max-w-sm" />
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <GradientInput
        placeholder="Search..."
        className="w-full max-w-sm"
        style={{ paddingLeft: "2.5rem" }}
      />
    </div>
  ),
}

export const CustomGradient: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <GradientInput
        placeholder="Custom gradient"
        className="w-full max-w-sm"
        gradient="linear-gradient(120deg, #34d399, #06b6d4, #3b82f6, #8b5cf6, #34d399)"
        alwaysAnimate
      />
    </div>
  ),
}
