import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon, MailIcon } from "lucide-react"

import { InputGroup, InputGroupAddon, InputGroupText } from "../../components/forms/input-group"
import { Button } from "../../components/buttons/button"
import { Input } from "../../components/forms/input"

const meta: Meta<typeof InputGroup> = {
  title: "Forms/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputGroup>
      <Input aria-label="Search" placeholder="Search" type="search" className="border-0 shadow-none focus-visible:ring-0" />
      <InputGroupAddon align="end">
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithStartText: Story = {
  render: () => (
    <InputGroup>
      <Input aria-label="URL" placeholder="username" type="text" className="border-0 shadow-none focus-visible:ring-0" />
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithEndText: Story = {
  render: () => (
    <InputGroup>
      <Input aria-label="Username" placeholder="Username" type="text" className="border-0 shadow-none focus-visible:ring-0" />
      <InputGroupAddon align="end">
        <InputGroupText>@example.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithEndIcon: Story = {
  render: () => (
    <InputGroup>
      <Input aria-label="Email" placeholder="Email" type="email" className="border-0 shadow-none focus-visible:ring-0" />
      <InputGroupAddon align="end">
        <MailIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup>
      <Input aria-label="Search" placeholder="Search..." type="search" className="border-0 shadow-none focus-visible:ring-0" />
      <InputGroupAddon align="end">
        <Button size="sm">Search</Button>
      </InputGroupAddon>
    </InputGroup>
  ),
}
