import type { Meta, StoryObj } from "@storybook/react"
import { Group } from "../../components/layout/group"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Group> = {
  title: "Layout/Group",
  component: Group,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <Group>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </Group>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Group orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </Group>
  ),
}
