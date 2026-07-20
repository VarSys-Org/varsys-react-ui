import type { Meta, StoryObj } from "@storybook/react"
import { Form } from "../../components/forms/form"
import { Input } from "../../components/forms/input"
import { Label } from "../../components/forms/label"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Form> = {
  title: "Forms/Form",
  component: Form,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        console.log("Form submitted")
      }}
      className="w-80"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="form-name">Name</Label>
        <Input id="form-name" name="name" placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="form-email">Email</Label>
        <Input id="form-email" name="email" type="email" placeholder="john@example.com" />
      </div>
      <Button type="submit">Submit</Button>
    </Form>
  ),
}
