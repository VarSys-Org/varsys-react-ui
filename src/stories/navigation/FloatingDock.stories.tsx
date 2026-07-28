import type { Meta, StoryObj } from "@storybook/react"
import { FloatingDock } from "../../components/navigation/floating-dock"
import { IconHome, IconSettings, IconUser, IconBell } from "@tabler/icons-react"

const meta: Meta<typeof FloatingDock> = { title: "Navigation/FloatingDock", component: FloatingDock, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  { title: "Home", icon: <IconHome />, href: "#" },
  { title: "Profile", icon: <IconUser />, href: "#" },
  { title: "Notifications", icon: <IconBell />, href: "#" },
  { title: "Settings", icon: <IconSettings />, href: "#" },
]

export const Default: Story = { args: { items: defaultItems } }
