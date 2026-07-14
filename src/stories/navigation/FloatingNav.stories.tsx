import type { Meta, StoryObj } from "@storybook/react"
import { FloatingNav } from "../../components/navigation/floating-nav"

const meta: Meta<typeof FloatingNav> = {
  title: "Navigation/FloatingNav",
  component: FloatingNav,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    navItems: [
      { name: "Home", link: "#" },
      { name: "About", link: "#" },
      { name: "Contact", link: "#" },
    ],
  },
}
