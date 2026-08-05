import type { Meta, StoryObj } from "@storybook/react"
import { CopyMarkup } from "../../components/forms/copy-markup"

const meta: Meta<typeof CopyMarkup> = {
  title: "Forms/CopyMarkup",
  component: CopyMarkup,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <CopyMarkup
        renderItem={(id) => (
          <input
            id={id}
            placeholder="Enter a name"
            className="w-full rounded-md border border-border px-3 py-2 text-sm"
          />
        )}
      />
    </div>
  ),
}
