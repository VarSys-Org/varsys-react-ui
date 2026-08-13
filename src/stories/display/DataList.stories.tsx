import type { Meta, StoryObj } from "@storybook/react"
import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "../../components/display/data-list"

const meta: Meta<typeof DataList> = {
  title: "Display/DataList",
  component: DataList,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Stacked: Story = {
  render: (args) => (
    <div className="mx-auto max-w-lg p-8">
      <DataList {...args}>
        <DataListItem>
          <DataListLabel>Full name</DataListLabel>
          <DataListValue>Margot Foster</DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListLabel>Email</DataListLabel>
          <DataListValue>margotfoster@example.com</DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListLabel>Salary</DataListLabel>
          <DataListValue>$95,000</DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListLabel>About</DataListLabel>
          <DataListValue>
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim.
          </DataListValue>
        </DataListItem>
      </DataList>
    </div>
  ),
}

export const BorderedCard: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <div className="overflow-hidden rounded-lg border border-border">
        <DataList>
          <DataListItem>
            <DataListLabel>Full name</DataListLabel>
            <DataListValue>Margot Foster</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListLabel>Email</DataListLabel>
            <DataListValue>margotfoster@example.com</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListLabel>Salary</DataListLabel>
            <DataListValue>$95,000</DataListValue>
          </DataListItem>
        </DataList>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="mx-auto max-w-lg p-8">
      <DataList>
        <DataListItem orientation="vertical">
          <DataListLabel>Status</DataListLabel>
          <DataListValue className="text-foreground">Active</DataListValue>
        </DataListItem>
        <DataListItem orientation="vertical">
          <DataListLabel>Role</DataListLabel>
          <DataListValue className="text-foreground">Administrator</DataListValue>
        </DataListItem>
      </DataList>
    </div>
  ),
}
