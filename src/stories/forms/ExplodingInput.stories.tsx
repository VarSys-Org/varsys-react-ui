import type { Meta, StoryObj } from "@storybook/react"
import { Star } from "lucide-react"
import { ExplodingInput } from "../../components/forms/exploding-input"

const meta: Meta<typeof ExplodingInput> = {
  title: "Forms/ExplodingInput",
  component: ExplodingInput,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-foreground">
          Type to trigger particles
        </span>
        <input
          type="text"
          placeholder="Start typing..."
          className="h-10 w-72 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <ExplodingInput />
      </label>
    </div>
  ),
}

export const CustomParticles: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-foreground">
          Sparkle particles
        </span>
        <input
          type="text"
          placeholder="Start typing..."
          className="h-10 w-72 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <ExplodingInput
          content={[<Star key="s" className="size-5 fill-yellow-400 text-yellow-400" />]}
          count={3}
          duration={2}
          gravity={0.9}
          direction={{ horizontal: "center", vertical: "top" }}
          scale={{ value: 1, randomize: true, randomVariation: 30 }}
          rotation={{ value: 0, animate: true }}
        />
      </label>
    </div>
  ),
}

export const Upward: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center bg-background p-10">
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-foreground">
          Upward particles
        </span>
        <input
          type="text"
          placeholder="Start typing..."
          className="h-10 w-72 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <ExplodingInput
          count={2}
          direction={{ horizontal: "center", vertical: "bottom" }}
          gravity={-0.6}
        />
      </label>
    </div>
  ),
}