import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/overlays/tooltip"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Tooltip> = {
  title: "shadcn/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}
