import type { Meta, StoryObj } from "@storybook/react"
import { Item, ItemContent, ItemTitle, ItemDescription, ItemMedia, ItemGroup, ItemSeparator, ItemActions, ItemHeader, ItemFooter } from "../../components/display/item"
import { Button } from "../../components/buttons/button"
import { Badge } from "../../components/display/badge"
import { MailIcon, StarIcon } from "lucide-react"

const meta: Meta<typeof Item> = {
  title: "Display/Item",
  component: Item,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ItemGroup>
      <Item>
        <ItemMedia variant="icon">
          <MailIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>New message from John</ItemTitle>
          <ItemDescription>Hey, I wanted to follow up on our meeting yesterday...</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Reply</Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <StarIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Feature request approved</ItemTitle>
          <ItemDescription>Your suggestion for dark mode has been added to the roadmap.</ItemDescription>
        </ItemContent>
        <Badge>New</Badge>
      </Item>
    </ItemGroup>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <ItemGroup>
      <ItemHeader>
        <span className="text-sm font-medium">Notifications</span>
        <Button variant="ghost" size="sm">Mark all read</Button>
      </ItemHeader>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>System update completed</ItemTitle>
          <ItemDescription>All services are running normally.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>New user registered</ItemTitle>
          <ItemDescription>Jane Smith has created an account.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemFooter>
        <span className="text-xs text-muted-foreground">3 unread notifications</span>
      </ItemFooter>
    </ItemGroup>
  ),
}
