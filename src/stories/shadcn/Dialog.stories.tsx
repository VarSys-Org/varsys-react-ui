import type { Meta, StoryObj } from "@storybook/react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/overlays/dialog"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Dialog> = {
  title: "shadcn/Dialog",
  component: Dialog,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <p className="text-sm">This is the dialog content area.</p>
      </DialogContent>
    </Dialog>
  ),
}
