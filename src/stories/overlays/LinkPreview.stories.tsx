import type { Meta, StoryObj } from "@storybook/react"
import { LinkPreview } from "../../components/overlays/link-preview"

const meta: Meta<typeof LinkPreview> = { title: "Overlays/LinkPreview", component: LinkPreview, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => (
    <LinkPreview url="https://ui.aceternity.com">
      <span className="underline cursor-pointer">Hover me to preview Aceternity UI</span>
    </LinkPreview>
  ),
}
