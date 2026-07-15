import type { Meta, StoryObj } from "@storybook/react"
import { Field, FieldLabel, FieldContent, FieldDescription, FieldError } from "../../components/forms/field"
import { Input } from "../../components/forms/input"

const meta: Meta<typeof Field> = {
  title: "Forms/Field",
  component: Field,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="name">Name</FieldLabel>
      <FieldContent>
        <Input id="name" placeholder="Enter your name" />
        <FieldDescription>Your full name as it appears on your ID.</FieldDescription>
      </FieldContent>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldContent>
        <Input id="email" placeholder="Enter your email" defaultValue="invalid" aria-invalid="true" />
        <FieldError>Please enter a valid email address.</FieldError>
      </FieldContent>
    </Field>
  ),
}
