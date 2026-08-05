import type { Meta, StoryObj } from "@storybook/react"
import { MorphingPopover, MorphingPopoverTrigger, MorphingPopoverContent } from "../../components/overlays/morphing-popover"

const meta: Meta<typeof MorphingPopover> = {
  title: "Overlays/MorphingPopover",
  component: MorphingPopover,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-72 items-center justify-center p-8">
      <MorphingPopover>
        <MorphingPopoverTrigger className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white">
          Open popover
        </MorphingPopoverTrigger>
        <MorphingPopoverContent className="w-[260px]">
          <p className="text-sm font-medium">Notifications</p>
          <p className="mt-1 text-xs text-zinc-500">
            Click outside to close this morphing popover.
          </p>
        </MorphingPopoverContent>
      </MorphingPopover>
    </div>
  ),
}
