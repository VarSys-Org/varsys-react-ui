import type { Meta, StoryObj } from "@storybook/react"
import { Fieldset, FieldsetLegend } from "../../components/forms/fieldset"
import { Input } from "../../components/forms/input"
import { Label } from "../../components/forms/label"

const meta: Meta<typeof Fieldset> = {
  title: "Forms/Fieldset",
  component: Fieldset,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>Personal Information</FieldsetLegend>
      <div className="grid gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fieldset-name">Name</Label>
          <Input id="fieldset-name" placeholder="John Doe" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="fieldset-email">Email</Label>
          <Input id="fieldset-email" type="email" placeholder="john@example.com" />
        </div>
      </div>
    </Fieldset>
  ),
}
