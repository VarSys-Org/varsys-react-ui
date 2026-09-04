import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { CopyIcon, ShareIcon, TrashIcon } from "lucide-react"
import {
  ActionBar,
  ActionBarClose,
  ActionBarGroup,
  ActionBarItem,
  ActionBarSelection,
  ActionBarSeparator,
} from "../../components/overlays/action-bar"

const meta: Meta<typeof ActionBar> = {
  title: "Overlays/ActionBar",
  component: ActionBar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(true)
      return (
        <div className="flex min-h-64 flex-col items-center justify-center gap-4 bg-background p-10">
          <p className="max-w-sm text-center text-sm text-muted-foreground">
            Select some text or rows to reveal the action bar. Press Esc to
            dismiss.
          </p>
          <ActionBar open={open} onOpenChange={setOpen}>
            <ActionBarSelection>3 selected</ActionBarSelection>
            <ActionBarGroup>
              <ActionBarItem onSelect={() => console.log("copy")}>
                <CopyIcon />
                Copy
              </ActionBarItem>
              <ActionBarItem>
                <ShareIcon />
                Share
              </ActionBarItem>
              <ActionBarSeparator />
              <ActionBarItem onSelect={() => console.log("delete")}>
                <TrashIcon />
                Delete
              </ActionBarItem>
            </ActionBarGroup>
            <ActionBarClose />
          </ActionBar>
        </div>
      )
    }
    return <Demo />
  },
}

export const Vertical: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(true)
      return (
        <div className="flex min-h-64 flex-col items-center justify-center gap-4 bg-background p-10">
          <ActionBar open={open} onOpenChange={setOpen} side="top" orientation="vertical">
            <ActionBarGroup>
              <ActionBarItem>
                <CopyIcon />
                Copy
              </ActionBarItem>
              <ActionBarItem>
                <ShareIcon />
                Share
              </ActionBarItem>
              <ActionBarItem>
                <TrashIcon />
                Delete
              </ActionBarItem>
            </ActionBarGroup>
            <ActionBarClose />
          </ActionBar>
        </div>
      )
    }
    return <Demo />
  },
}