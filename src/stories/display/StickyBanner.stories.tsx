import type { Meta, StoryObj } from "@storybook/react"
import { StickyBanner } from "../../components/display/sticky-banner"

const meta: Meta<typeof StickyBanner> = {
  title: "Display/StickyBanner",
  component: StickyBanner,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <StickyBanner className="bg-primary text-primary-foreground">
      This is a sticky banner
    </StickyBanner>
  ),
}

export const HideOnScroll: Story = {
  render: () => (
    <div>
      <StickyBanner hideOnScroll className="bg-muted text-foreground border-b">
        This banner hides on scroll (scroll down to see)
      </StickyBanner>
      <div className="h-[200vh] p-4">
        <p>Scroll down to see the banner hide</p>
      </div>
    </div>
  ),
}
