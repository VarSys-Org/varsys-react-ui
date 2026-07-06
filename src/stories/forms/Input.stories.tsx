import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "../../components/forms/input"

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search", "file"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter value...",
  },
}

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "email@example.com",
  },
}

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
}

export const File: Story = {
  args: {
    type: "file",
  },
}

export const Invalid: Story = {
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
  },
}
