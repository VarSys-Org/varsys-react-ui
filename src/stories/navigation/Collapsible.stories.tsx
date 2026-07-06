import type { Meta, StoryObj } from "@storybook/react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../components/navigation/collapsible"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Collapsible> = {
  title: "Navigation/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger render={<Button variant="outline" />}>Toggle</CollapsibleTrigger>
      <CollapsibleContent><p className="text-sm text-muted-foreground">Collapsible content goes here.</p></CollapsibleContent>
    </Collapsible>
  ),
}
