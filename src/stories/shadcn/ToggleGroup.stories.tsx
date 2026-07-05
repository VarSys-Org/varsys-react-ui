import type { Meta, StoryObj } from "@storybook/react"
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group"

const meta: Meta<typeof ToggleGroup> = {
  title: "shadcn/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  render: () => (
    <ToggleGroup multiple defaultValue={["bold"]}>
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  ),
}
