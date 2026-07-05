import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "../../components/display/aspect-ratio"

const meta: Meta<typeof AspectRatio> = {
  title: "shadcn/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
      <div className="flex h-full items-center justify-center text-muted-foreground">16:9</div>
    </AspectRatio>
  ),
}
