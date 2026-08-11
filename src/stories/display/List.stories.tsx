import type { Meta, StoryObj } from "@storybook/react"
import { List, ListItem } from "../../components/display/list"

const meta: Meta<typeof List> = {
  title: "Display/List",
  component: List,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <List>
        <ListItem>
          <span className="text-foreground">Jane Doe</span>
          <span className="text-sm text-muted-foreground">jane@example.com</span>
        </ListItem>
        <ListItem>
          <span className="text-foreground">John Smith</span>
          <span className="text-sm text-muted-foreground">john@example.com</span>
        </ListItem>
        <ListItem>
          <span className="text-foreground">Alex Kim</span>
          <span className="text-sm text-muted-foreground">alex@example.com</span>
        </ListItem>
      </List>
    </div>
  ),
}

export const WithValues: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <List>
        <ListItem>
          <span className="text-foreground">Revenue</span>
          <span className="font-medium tabular-nums text-foreground">$54,230</span>
        </ListItem>
        <ListItem>
          <span className="text-foreground">Expenses</span>
          <span className="font-medium tabular-nums text-foreground">$32,150</span>
        </ListItem>
        <ListItem>
          <span className="text-foreground">Profit</span>
          <span className="font-medium tabular-nums text-emerald-600">$22,080</span>
        </ListItem>
      </List>
    </div>
  ),
}

export const WithBadges: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <List>
        <ListItem>
          <span className="text-foreground">Development</span>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            Active
          </span>
        </ListItem>
        <ListItem>
          <span className="text-foreground">Design</span>
          <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400">
            Review
          </span>
        </ListItem>
        <ListItem>
          <span className="text-foreground">Marketing</span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
            Draft
          </span>
        </ListItem>
      </List>
    </div>
  ),
}
