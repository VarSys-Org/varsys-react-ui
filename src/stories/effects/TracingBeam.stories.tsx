import type { Meta, StoryObj } from "@storybook/react"
import { TracingBeam } from "../../components/effects/tracing-beam"

const meta: Meta<typeof TracingBeam> = {
  title: "Effects/TracingBeam",
  component: TracingBeam,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TracingBeam className="p-8">
      <div className="space-y-8 max-w-2xl">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl bg-white p-6 shadow-md dark:bg-neutral-800">
            <h2 className="text-xl font-bold">Section {i + 1}</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        ))}
      </div>
    </TracingBeam>
  ),
}
