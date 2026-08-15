import type { Meta, StoryObj } from "@storybook/react"
import { ScrollFade } from "../../components/effects/scroll-fade"

const meta: Meta<typeof ScrollFade> = {
  title: "Effects/ScrollFade",
  component: ScrollFade,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const longList = Array.from({ length: 14 }, (_, i) => `Item ${i + 1}`)

export const Vertical: Story = {
  render: () => (
    <div className="p-8">
      <div className="mx-auto w-full max-w-xs rounded-xl border border-border bg-card">
        <ScrollFade className="h-64 rounded-xl">
          <ul className="divide-y divide-border">
            {longList.map((item) => (
              <li key={item} className="px-4 py-3 text-sm text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </ScrollFade>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="p-8">
      <div className="mx-auto w-full max-w-md rounded-xl border border-border bg-card">
        <ScrollFade direction="horizontal" className="rounded-xl">
          <div className="flex w-max gap-3 p-4">
            {longList.map((item) => (
              <span
                key={item}
                className="whitespace-nowrap rounded-full bg-muted px-4 py-1.5 text-sm text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </ScrollFade>
      </div>
    </div>
  ),
}

export const BottomOnly: Story = {
  render: () => (
    <div className="p-8">
      <div className="mx-auto w-full max-w-xs rounded-xl border border-border bg-card">
        <ScrollFade className="h-64 rounded-xl" edges="end" fadeSize={48}>
          <ul className="divide-y divide-border">
            {longList.map((item) => (
              <li key={item} className="px-4 py-3 text-sm text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </ScrollFade>
      </div>
    </div>
  ),
}
