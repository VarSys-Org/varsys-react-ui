import type { Meta, StoryObj } from "@storybook/react"
import { MultiStepLoader } from "../../components/effects/multi-step-loader"
import { useState } from "react"

const meta: Meta<typeof MultiStepLoader> = {
  title: "Effects/MultiStepLoader",
  component: MultiStepLoader,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const loadingStates = [
  { text: "Loading assets" },
  { text: "Compiling code" },
  { text: "Running tests" },
  { text: "Deploying" },
]

export const Default: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)
    return (
      <div className="flex flex-col items-center gap-4">
        <button
          className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
          onClick={() => setLoading(!loading)}
        >
          {loading ? "Stop" : "Start"} Loading
        </button>
        <MultiStepLoader loadingStates={loadingStates} loading={loading} />
      </div>
    )
  },
}
