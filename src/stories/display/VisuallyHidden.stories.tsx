import type { Meta, StoryObj } from "@storybook/react"
import { VisuallyHidden } from "../../components/display/visually-hidden"

const meta: Meta<typeof VisuallyHidden> = {
  title: "Display/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-md p-8">
      <p className="text-foreground">
        This paragraph has a{" "}
        <VisuallyHidden>hidden label</VisuallyHidden>visually hidden element.
      </p>
      <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
        Sign in
        <VisuallyHidden>to your account</VisuallyHidden>
      </button>
    </div>
  ),
}
