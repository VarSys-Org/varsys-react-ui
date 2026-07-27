import type { Meta, StoryObj } from "@storybook/react"
import { BackgroundLines } from "../../components/effects/background-lines"

const meta: Meta<typeof BackgroundLines> = {
  title: "Effects/BackgroundLines",
  component: BackgroundLines,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <BackgroundLines className="flex items-center justify-center">
      <div className="relative z-20 px-4">
        <h2 className="text-center text-4xl font-bold text-black dark:text-white md:text-7xl">
          Background Lines
        </h2>
        <p className="mt-4 text-center text-neutral-600 dark:text-neutral-400">
          Animated SVG line background effect
        </p>
      </div>
    </BackgroundLines>
  ),
}
