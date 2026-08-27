import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Offcanvas } from "../../components/overlays/offcanvas"

const meta: Meta<typeof Offcanvas> = {
  title: "Overlays/Offcanvas",
  component: Offcanvas,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

function Demo({
  side,
  withBackdrop = true,
}: {
  side: "left" | "right" | "top" | "bottom"
  withBackdrop?: boolean
}) {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-x-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring/30"
      >
        Open offcanvas ({side})
      </button>
      <Offcanvas
        open={open}
        onOpenChange={setOpen}
        side={side}
        withBackdrop={withBackdrop}
        title="Offcanvas title"
      >
        <p className="text-foreground">
          Some text as placeholder. In real life you can have the elements you
          have chosen, like text, images, lists, etc.
        </p>
      </Offcanvas>
    </div>
  )
}

export const Right: Story = {
  render: () => <Demo side="right" />,
}

export const Left: Story = {
  render: () => <Demo side="left" />,
}

export const Top: Story = {
  render: () => <Demo side="top" />,
}

export const Bottom: Story = {
  render: () => <Demo side="bottom" />,
}

export const NoBackdrop: Story = {
  render: () => <Demo side="right" withBackdrop={false} />,
}