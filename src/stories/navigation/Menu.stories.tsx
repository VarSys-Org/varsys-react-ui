import type { Meta, StoryObj } from "@storybook/react"
import { PopupMenu, PopupMenuTrigger, PopupMenuPopup, PopupMenuItem, PopupMenuLabel, PopupMenuSeparator, PopupMenuCheckboxItem, PopupMenuRadioGroup, PopupMenuRadioItem, PopupMenuSub, PopupMenuSubTrigger, PopupMenuSubPopup, PopupMenuLinkItem } from "../../components/navigation/menu"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof PopupMenu> = {
  title: "Navigation/PopupMenu",
  component: PopupMenu,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof PopupMenu>

export const Default: Story = {
  render: () => (
    <PopupMenu>
      <PopupMenuTrigger render={<Button variant="outline" />}>Open Menu</PopupMenuTrigger>
      <PopupMenuPopup>
        <PopupMenuLabel>Account</PopupMenuLabel>
        <PopupMenuItem>Profile</PopupMenuItem>
        <PopupMenuItem>Settings</PopupMenuItem>
        <PopupMenuSeparator />
        <PopupMenuItem variant="destructive">Logout</PopupMenuItem>
      </PopupMenuPopup>
    </PopupMenu>
  ),
}

export const WithCheckboxItems: Story = {
  render: () => (
    <PopupMenu>
      <PopupMenuTrigger render={<Button variant="outline" />}>View Options</PopupMenuTrigger>
      <PopupMenuPopup>
        <PopupMenuCheckboxItem>Show Toolbar</PopupMenuCheckboxItem>
        <PopupMenuCheckboxItem>Show Sidebar</PopupMenuCheckboxItem>
        <PopupMenuCheckboxItem variant="switch">Dark Mode</PopupMenuCheckboxItem>
      </PopupMenuPopup>
    </PopupMenu>
  ),
}

export const WithRadioGroup: Story = {
  render: () => (
    <PopupMenu>
      <PopupMenuTrigger render={<Button variant="outline" />}>Sort By</PopupMenuTrigger>
      <PopupMenuPopup>
        <PopupMenuRadioGroup>
          <PopupMenuRadioItem value="name">Name</PopupMenuRadioItem>
          <PopupMenuRadioItem value="date">Date</PopupMenuRadioItem>
          <PopupMenuRadioItem value="size">Size</PopupMenuRadioItem>
        </PopupMenuRadioGroup>
      </PopupMenuPopup>
    </PopupMenu>
  ),
}

export const WithSubmenu: Story = {
  render: () => (
    <PopupMenu>
      <PopupMenuTrigger render={<Button variant="outline" />}>Open</PopupMenuTrigger>
      <PopupMenuPopup>
        <PopupMenuItem>New File</PopupMenuItem>
        <PopupMenuItem>New Window</PopupMenuItem>
        <PopupMenuSub>
          <PopupMenuSubTrigger>Open Recent</PopupMenuSubTrigger>
          <PopupMenuSubPopup>
            <PopupMenuItem>index.tsx</PopupMenuItem>
            <PopupMenuItem>app.tsx</PopupMenuItem>
            <PopupMenuItem>styles.css</PopupMenuItem>
          </PopupMenuSubPopup>
        </PopupMenuSub>
        <PopupMenuSeparator />
        <PopupMenuItem>Save</PopupMenuItem>
      </PopupMenuPopup>
    </PopupMenu>
  ),
}

export const WithLinks: Story = {
  render: () => (
    <PopupMenu>
      <PopupMenuTrigger render={<Button variant="outline" />}>Navigate</PopupMenuTrigger>
      <PopupMenuPopup>
        <PopupMenuLinkItem href="/dashboard">Dashboard</PopupMenuLinkItem>
        <PopupMenuLinkItem href="/settings">Settings</PopupMenuLinkItem>
        <PopupMenuLinkItem href="/profile">Profile</PopupMenuLinkItem>
      </PopupMenuPopup>
    </PopupMenu>
  ),
}
