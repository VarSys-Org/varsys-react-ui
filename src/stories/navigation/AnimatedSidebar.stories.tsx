import type { Meta, StoryObj } from "@storybook/react"
import { IconHome, IconSettings, IconUser } from "@tabler/icons-react"
import {
  AnimatedSidebar,
  AnimatedSidebarBody,
  AnimatedSidebarLink,
} from "../../components/navigation/animated-sidebar"

const meta: Meta<typeof AnimatedSidebar> = {
  title: "Navigation/AnimatedSidebar",
  component: AnimatedSidebar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const links = [
  { label: "Home", href: "#", icon: <IconHome className="h-5 w-5 shrink-0" /> },
  {
    label: "Account",
    href: "#",
    icon: <IconUser className="h-5 w-5 shrink-0" />,
  },
  {
    label: "Settings",
    href: "#",
    icon: <IconSettings className="h-5 w-5 shrink-0" />,
  },
]

export const Default: Story = {
  render: () => (
    <div className="flex h-[500px] gap-4 p-8">
      <AnimatedSidebar animate={true}>
        <AnimatedSidebarBody>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <AnimatedSidebarLink link={links[0]} />
              <AnimatedSidebarLink link={links[1]} />
              <AnimatedSidebarLink link={links[2]} />
            </div>
          </div>
        </AnimatedSidebarBody>
      </AnimatedSidebar>
    </div>
  ),
}

export const Static: Story = {
  render: () => (
    <div className="flex h-[500px] gap-4 p-8">
      <AnimatedSidebar animate={false}>
        <AnimatedSidebarBody>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <AnimatedSidebarLink key={link.label} link={link} />
            ))}
          </div>
        </AnimatedSidebarBody>
      </AnimatedSidebar>
    </div>
  ),
}
