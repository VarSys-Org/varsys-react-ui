import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "../../components/forms/switch"
import { Label } from "../../components/forms/label"

const meta: Meta<typeof Switch> = {
  title: "shadcn/Switch",
  component: Switch,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" /><Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}
