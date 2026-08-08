import type { Meta, StoryObj } from "@storybook/react"
import { LayoutSplitter } from "../../components/layout/layout-splitter"

const meta: Meta<typeof LayoutSplitter> = {
  title: "Layout/LayoutSplitter",
  component: LayoutSplitter,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="mx-auto h-80 w-full max-w-3xl p-8">
      <LayoutSplitter
        direction="horizontal"
        panels={[
          <div key="a" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Left panel
          </div>,
          <div key="b" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Right panel
          </div>,
        ]}
      />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="mx-auto h-96 w-full max-w-3xl p-8">
      <LayoutSplitter
        direction="vertical"
        panels={[
          <div key="a" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Top panel
          </div>,
          <div key="b" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Bottom panel
          </div>,
        ]}
      />
    </div>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <div className="mx-auto h-80 w-full max-w-3xl p-8">
      <LayoutSplitter
        panels={[
          <div key="a" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Sidebar
          </div>,
          <div key="b" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Main content
          </div>,
          <div key="c" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Details
          </div>,
        ]}
      />
    </div>
  ),
}

export const NoHandle: Story = {
  render: () => (
    <div className="mx-auto h-80 w-full max-w-3xl p-8">
      <LayoutSplitter
        withHandle={false}
        panels={[
          <div key="a" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Left
          </div>,
          <div key="b" className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Right
          </div>,
        ]}
      />
    </div>
  ),
}
