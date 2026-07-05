import type { Meta, StoryObj } from "@storybook/react"
import { Dock, DockIcon } from "../../components/layout/dock"
import { Home, Settings, User, Mail } from "lucide-react"

const meta: Meta = {
  title: "MagicUI/Dock",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center h-[400px]">
      <Dock className="items-end pb-3">
        <DockIcon><Home className="w-5 h-5" /></DockIcon>
        <DockIcon><Settings className="w-5 h-5" /></DockIcon>
        <DockIcon><User className="w-5 h-5" /></DockIcon>
        <DockIcon><Mail className="w-5 h-5" /></DockIcon>
      </Dock>
    </div>
  ),
}
