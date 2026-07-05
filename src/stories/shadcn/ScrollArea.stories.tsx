import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area"
import { Separator } from "../../components/ui/separator"

const meta: Meta<typeof ScrollArea> = {
  title: "shadcn/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`)

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      {tags.map((tag) => (<><div key={tag} className="text-sm">{tag}</div><Separator className="my-2" /></>))}
    </ScrollArea>
  ),
}
