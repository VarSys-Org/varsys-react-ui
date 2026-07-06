import type { Meta, StoryObj } from "@storybook/react"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../../components/display/resizable"

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Display/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border min-h-[200px]">
      <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6 bg-muted">Left</div></ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6 bg-muted">Right</div></ResizablePanel>
    </ResizablePanelGroup>
  ),
}
