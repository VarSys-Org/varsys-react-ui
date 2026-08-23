import type { Meta, StoryObj } from "@storybook/react"
import { CloudDownload } from "lucide-react"
import { SpotlightButton } from "../../components/buttons/spotlight-button"

const meta: Meta<typeof SpotlightButton> = {
  title: "Buttons/SpotlightButton",
  component: SpotlightButton,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 flex-wrap items-center justify-center gap-4 bg-background p-10">
      <SpotlightButton>Get Started</SpotlightButton>
      <SpotlightButton variant="outline">Outline</SpotlightButton>
      <SpotlightButton variant="secondary">Secondary</SpotlightButton>
      <SpotlightButton variant="destructive">Destructive</SpotlightButton>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <SpotlightButton>
        <CloudDownload />
        Sync now
      </SpotlightButton>
    </div>
  ),
}

export const CustomSpotlight: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <SpotlightButton spotlightColor="rgba(250, 204, 21, 0.4)">
        Golden spotlight
      </SpotlightButton>
    </div>
  ),
}