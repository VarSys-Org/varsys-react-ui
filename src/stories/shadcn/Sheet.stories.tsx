import type { Meta, StoryObj } from "@storybook/react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../../components/ui/sheet"
import { Button } from "../../components/ui/button"

const meta: Meta<typeof Sheet> = {
  title: "shadcn/Sheet",
  component: Sheet,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader><SheetTitle>Edit profile</SheetTitle><SheetDescription>Make changes here.</SheetDescription></SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
