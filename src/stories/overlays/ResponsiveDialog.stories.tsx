import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../../components/buttons/button"
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "../../components/overlays/responsive-dialog"

const meta: Meta<typeof ResponsiveDialog> = {
  title: "Overlays/ResponsiveDialog",
  component: ResponsiveDialog,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger render={<Button variant="outline" />}>
          Open dialog
        </ResponsiveDialogTrigger>
        <ResponsiveDialogContent>
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>Responsive dialog</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              Renders as a drawer on mobile and a dialog on larger screens.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
          <ResponsiveDialogFooter>
            <ResponsiveDialogTrigger render={<Button variant="outline" />}>
              Close
            </ResponsiveDialogTrigger>
            <Button>Save changes</Button>
          </ResponsiveDialogFooter>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  ),
}

export const WithBreakpoint: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <ResponsiveDialog breakpoint={1024}>
        <ResponsiveDialogTrigger render={<Button variant="outline" />}>
          Open (1024px breakpoint)
        </ResponsiveDialogTrigger>
        <ResponsiveDialogContent>
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>Custom breakpoint</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              Switches to a drawer below 1024px.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
          <ResponsiveDialogFooter>
            <Button>Confirm</Button>
          </ResponsiveDialogFooter>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  ),
}