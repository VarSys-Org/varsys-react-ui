import type { Meta, StoryObj } from "@storybook/react"
import { LoadingOverlay } from "../../components/overlays/loading-overlay"

const meta: Meta<typeof LoadingOverlay> = {
  title: "Overlays/LoadingOverlay",
  component: LoadingOverlay,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <LoadingOverlay loading label="Loading data…">
        <div className="h-40 rounded-lg border bg-card" />
      </LoadingOverlay>
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="p-8">
      <LoadingOverlay loading label="Syncing workspace">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 rounded-lg border bg-card" />
          <div className="h-24 rounded-lg border bg-card" />
          <div className="h-24 rounded-lg border bg-card" />
        </div>
      </LoadingOverlay>
    </div>
  ),
}

export const Hidden: Story = {
  render: () => (
    <div className="p-8">
      <LoadingOverlay loading={false}>
        <div className="flex h-24 items-center justify-center rounded-lg border bg-card text-sm text-muted-foreground">
          Content loaded
        </div>
      </LoadingOverlay>
    </div>
  ),
}
