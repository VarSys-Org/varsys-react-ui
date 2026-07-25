import type { Meta, StoryObj } from "@storybook/react"
import { Archive, MoreHorizontal, Bell } from "lucide-react"

import { ButtonGroup, ButtonGroupSeparator } from "../../components/buttons/button-group"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof ButtonGroup> = {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Archive">
        <Archive />
      </Button>
      <Button variant="outline" size="icon" aria-label="Bell">
        <Bell />
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon" aria-label="More">
        <MoreHorizontal />
      </Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  ),
}
