import type { Meta, StoryObj } from "@storybook/react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../components/overlays/hover-card"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof HoverCard> = {
  title: "shadcn/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>@shadcn</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div><h4 className="text-sm font-semibold">@shadcn</h4><p className="text-sm">The open-source UI component library.</p></div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
