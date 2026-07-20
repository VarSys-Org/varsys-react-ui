import type { Meta, StoryObj } from "@storybook/react"
import {
  Frame,
  FramePanel,
  FrameHeader,
  FrameTitle,
  FrameDescription,
  FrameFooter,
} from "../../components/layout/frame"
import { Button } from "../../components/buttons/button"

const meta: Meta<typeof Frame> = {
  title: "Layout/Frame",
  component: Frame,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Frame className="w-80">
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Account Settings</FrameTitle>
          <FrameDescription>Manage your account preferences</FrameDescription>
        </FrameHeader>
        <div className="px-5 py-2 text-sm text-muted-foreground">
          Your account settings and preferences go here.
        </div>
        <FrameFooter className="flex justify-end gap-2">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Save</Button>
        </FrameFooter>
      </FramePanel>
    </Frame>
  ),
}
