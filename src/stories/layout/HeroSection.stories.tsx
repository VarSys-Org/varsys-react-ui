import type { Meta, StoryObj } from "@storybook/react"
import { HeroSection } from "../../components/layout/hero-section"

const meta: Meta<typeof HeroSection> = {
  title: "Layout/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <HeroSection
        title="Optimize your website for"
        highlight="Search engine"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
    </div>
  ),
}
