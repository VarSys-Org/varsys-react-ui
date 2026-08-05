import type { Meta, StoryObj } from "@storybook/react"
import { InView } from "../../components/effects/in-view"

const meta: Meta<typeof InView> = {
  title: "Effects/InView",
  component: InView,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <InView
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-2xl font-semibold">
          This content fades in when scrolled into view.
        </p>
      </InView>
    </div>
  ),
}
