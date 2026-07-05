import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "../../components/display/separator"

const meta: Meta<typeof Separator> = {
  title: "shadcn/Separator",
  component: Separator,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div><h4 className="text-sm font-medium">Radix Primitives</h4><p className="text-sm text-muted-foreground">An open-source UI component library.</p><Separator className="my-4" /><div className="flex h-5 items-center space-x-4 text-sm"><div>Blog</div><Separator orientation="vertical" /><div>Docs</div><Separator orientation="vertical" /><div>Source</div></div></div>
  ),
}
