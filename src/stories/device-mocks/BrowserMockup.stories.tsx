import type { Meta, StoryObj } from "@storybook/react"
import { ChromeMockup, SafariMockup, FirefoxMockup } from "../../components/device-mocks/browser-mockup"

const meta: Meta<typeof ChromeMockup> = {
  title: "DeviceMocks/BrowserMockup",
  component: ChromeMockup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Chrome: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <ChromeMockup url="varsys.app/dashboard" className="w-full max-w-2xl" />
    </div>
  ),
}

export const Safari: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <SafariMockup url="varsys.app/projects" className="w-full max-w-2xl" />
    </div>
  ),
}

export const Firefox: Story = {
  render: () => (
    <div className="flex min-h-80 items-center justify-center bg-background p-10">
      <FirefoxMockup url="varsys.app/settings" className="w-full max-w-2xl" />
    </div>
  ),
}

export const Row: Story = {
  render: () => (
    <div className="flex min-h-80 flex-col items-center justify-center gap-6 bg-background p-10">
      <ChromeMockup url="varsys.app" className="w-full max-w-md" />
      <SafariMockup url="varsys.app" className="w-full max-w-md" />
      <FirefoxMockup url="varsys.app" className="w-full max-w-md" />
    </div>
  ),
}