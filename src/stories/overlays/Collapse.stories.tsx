import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Collapse } from "../../components/overlays/collapse"

const meta: Meta<typeof Collapse> = {
  title: "Overlays/Collapse",
  component: Collapse,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const Body = () => (
  <p className="text-muted-foreground">
    This is a collapse body. It is hidden by default, until the trigger expands
    it with a smooth height transition. It can contain any content you need.
  </p>
)

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-start justify-center bg-background p-10">
      <Collapse title="Collapse">
        <Body />
      </Collapse>
    </div>
  ),
}

export const OpenByDefault: Story = {
  render: () => (
    <div className="flex min-h-48 items-start justify-center bg-background p-10">
      <Collapse title="Collapse" defaultOpen>
        <Body />
      </Collapse>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div className="flex min-h-48 flex-col items-center justify-center gap-4 bg-background p-10">
        <Collapse
          title="Controlled Collapse"
          open={open}
          onOpenChange={setOpen}
        >
          <Body />
        </Collapse>
        <p className="text-sm text-muted-foreground">
          Open: {open ? "true" : "false"}
        </p>
      </div>
    )
  },
}

export const CustomTrigger: Story = {
  render: () => (
    <div className="flex min-h-48 items-start justify-center bg-background p-10">
      <Collapse
        renderTrigger={({ open, toggle, ...props }) => (
          <button
            type="button"
            onClick={toggle}
            {...props}
            className="inline-flex items-center gap-x-2 text-sm font-medium text-primary hover:underline focus:outline-none"
          >
            {open ? "Hide details" : "Show details"}
          </button>
        )}
      >
        <Body />
      </Collapse>
    </div>
  ),
}