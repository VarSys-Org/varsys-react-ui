import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "../../components/ui/label"

const meta: Meta<typeof Label> = {
  title: "shadcn/Label",
  component: Label,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  ),
}
