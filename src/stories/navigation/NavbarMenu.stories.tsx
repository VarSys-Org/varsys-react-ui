import type { Meta, StoryObj } from "@storybook/react"
import { Menu, MenuItem, HoveredLink, NavbarMenu } from "../../components/navigation/navbar-menu"
import { useState } from "react"

const meta: Meta = {
  title: "Navigation/NavbarMenu",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState<string | null>(null)
    return (
      <NavbarMenu>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/product1">Product 1</HoveredLink>
              <HoveredLink href="/product2">Product 2</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Company">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="/about">About</HoveredLink>
              <HoveredLink href="/careers">Careers</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </NavbarMenu>
    )
  },
}
