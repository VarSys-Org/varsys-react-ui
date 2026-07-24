import type { Meta, StoryObj } from "@storybook/react"
import { StickyNavbar, NavBody, NavItems, MobileNav } from "../../components/navigation/resizable-navbar"

const meta: Meta = {
  title: "Navigation/ResizableNavbar",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
]

export const Default: Story = {
  render: () => (
    <StickyNavbar>
      <NavBody>
        <div className="font-bold">Logo</div>
        <NavItems items={navItems} />
        <div className="flex gap-2">
          <button className="rounded-full bg-black px-4 py-1 text-sm text-white">Sign In</button>
        </div>
      </NavBody>
      <MobileNav>
        <div className="font-bold">Logo</div>
        <button className="rounded-full bg-black px-4 py-1 text-sm text-white">Menu</button>
      </MobileNav>
    </StickyNavbar>
  ),
}
