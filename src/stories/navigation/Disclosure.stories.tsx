import type { Meta, StoryObj } from "@storybook/react"
import { Disclosure, DisclosureTrigger, DisclosureContent } from "../../components/navigation/disclosure"

const meta: Meta<typeof Disclosure> = {
  title: "Navigation/Disclosure",
  component: Disclosure,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Disclosure>
        <DisclosureTrigger>
          <button className="rounded-md border px-4 py-2 text-sm font-medium">
            Toggle disclosure
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className="mt-4 rounded-lg bg-muted p-4 text-sm">
            This content animates open and closed.
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  ),
}
