import type { Meta, StoryObj } from "@storybook/react"
import { CTASection } from "../../components/layout/cta-section"

const meta: Meta<typeof CTASection> = {
  title: "Layout/CTASection",
  component: CTASection,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Ready to get started?",
    description: "Join thousands of teams already building with our platform.",
    primaryLabel: "Get started",
    secondaryLabel: "Learn more",
  },
}

export const Minimal: Story = {
  args: {
    title: "Ready to get started?",
    primaryLabel: "Get started",
  },
}
