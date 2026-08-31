import type { Meta, StoryObj } from "@storybook/react"
import { SectionHeaderActions } from "../../components/layout/section-header-actions"

const meta: Meta<typeof SectionHeaderActions> = {
  title: "Layout/SectionHeaderActions",
  component: SectionHeaderActions,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <SectionHeaderActions
        title="Analytics"
        description="Track engagement and revenue across your workspace."
        actions={
          <>
            <button className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium hover:bg-muted">
              Engagement
            </button>
            <button className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/80">
              Browse reports
            </button>
          </>
        }
      />
    </div>
  ),
}

export const NoDivider: Story = {
  render: () => (
    <div className="min-h-56 bg-background p-10">
      <SectionHeaderActions
        title="Projects"
        description="All your workspaces in one place."
        divider={false}
        actions={<span className="text-sm text-muted-foreground">Updated 2h ago</span>}
      />
    </div>
  ),
}