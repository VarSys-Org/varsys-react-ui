import type { Meta, StoryObj } from "@storybook/react"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/overlays/popover"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Popover> = {
  title: "shadcn/Popover",
  component: Popover,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open Popover</PopoverTrigger>
      <PopoverContent className="w-80"><p className="text-sm">This is popover content.</p></PopoverContent>
    </Popover>
  ),
}
