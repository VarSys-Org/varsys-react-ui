import type { Meta, StoryObj } from "@storybook/react"
import { EmptyState } from "../../components/display/empty-state"

const meta: Meta<typeof EmptyState> = {
  title: "Display/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <EmptyState
        primaryAction={{ label: "Create Item" }}
        footer={
          <p>
            <a href="#" className="underline hover:text-foreground">
              Learn how
            </a>{" "}
            or{" "}
            <a href="#" className="underline hover:text-foreground">
              view examples
            </a>
          </p>
        }
      />
    </div>
  ),
}

export const ImportOrCreate: Story = {
  render: () => (
    <div className="p-8">
      <EmptyState
        variant="upload"
        title="No data to display"
        description="Get started by creating your first item. It only takes a few seconds."
        primaryAction={{ label: "Import Data" }}
        secondaryAction={{ label: "Create New" }}
        footer={<p>Supported formats: CSV, JSON</p>}
      />
    </div>
  ),
}

export const NoResults: Story = {
  render: () => (
    <div className="p-8">
      <EmptyState
        variant="search"
        title="No results found"
        description="Try adjusting your search or filters to find what you're looking for."
        primaryAction={{ label: "Clear filters", variant: "outline" }}
      />
    </div>
  ),
}

export const GetStarted: Story = {
  render: () => (
    <div className="p-8">
      <EmptyState
        variant="started"
        title="Get started in seconds"
        description="Complete these quick steps to set up your workspace."
        primaryAction={{ label: "Create Project" }}
        footer={
          <ol className="mx-auto max-w-xs space-y-2 text-left">
            {["Create your first project", "Invite team members", "Start collaborating"].map(
              (step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="grid size-6 shrink-0 place-content-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              )
            )}
          </ol>
        }
      />
    </div>
  ),
}
