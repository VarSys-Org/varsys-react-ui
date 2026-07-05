import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../../components/ui/checkbox"
import { Label } from "../../components/ui/label"

const meta: Meta<typeof Checkbox> = {
  title: "shadcn/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms</Label>
    </div>
  ),
}
