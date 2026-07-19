import type { Meta, StoryObj } from "@storybook/react"
import { CheckboxGroup } from "../../components/forms/checkbox-group"
import { Checkbox } from "../../components/forms/checkbox"
import { Label } from "../../components/forms/label"

const meta: Meta<typeof CheckboxGroup> = {
  title: "Forms/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <CheckboxGroup defaultValue={["newsletter"]}>
      <div className="flex items-center gap-2">
        <Checkbox id="c1" value="newsletter" />
        <Label htmlFor="c1">Newsletter</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="c2" value="updates" />
        <Label htmlFor="c2">Product updates</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="c3" value="events" />
        <Label htmlFor="c3">Events</Label>
      </div>
    </CheckboxGroup>
  ),
}
