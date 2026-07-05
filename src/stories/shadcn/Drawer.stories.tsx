import type { Meta, StoryObj } from "@storybook/react"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../components/ui/drawer"
import { Button } from "../../components/ui/button"

const meta: Meta<typeof Drawer> = {
  title: "shadcn/Drawer",
  component: Drawer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer component.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
