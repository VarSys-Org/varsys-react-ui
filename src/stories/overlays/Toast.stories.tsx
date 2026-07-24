import type { Meta, StoryObj } from "@storybook/react"
import { Toaster } from "../../components/overlays/toaster"
import { toast } from "../../hooks/use-toast"
import { Button } from "../../components/buttons/button"

const meta: Meta = {
  title: "Overlays/Toast",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div>
      <Button onClick={() => toast({ title: "Hello", description: "This is a toast message" })}>
        Show Toast
      </Button>
      <Toaster />
    </div>
  ),
}

export const Destructive: Story = {
  render: () => (
    <div>
      <Button variant="destructive" onClick={() => toast({ title: "Error", description: "Something went wrong", variant: "destructive" })}>
        Show Error Toast
      </Button>
      <Toaster />
    </div>
  ),
}
