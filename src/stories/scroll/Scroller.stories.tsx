import type { Meta, StoryObj } from "@storybook/react"
import { Scroller } from "../../components/scroll/scroller"

const meta: Meta<typeof Scroller> = {
  title: "Scroll/Scroller",
  component: Scroller,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const cards = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)

export const Vertical: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <Scroller className="h-64 w-full max-w-sm rounded-lg border p-4">
        <div className="flex flex-col gap-3">
          {cards.map((card) => (
            <div
              key={card}
              className="flex h-16 items-center justify-center rounded-md border bg-card text-sm text-card-foreground"
            >
              {card}
            </div>
          ))}
        </div>
      </Scroller>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <Scroller orientation="horizontal" className="w-full max-w-md rounded-lg border p-4">
        <div className="flex gap-3">
          {cards.map((card) => (
            <div
              key={card}
              className="flex h-24 w-40 shrink-0 items-center justify-center rounded-md border bg-card text-sm text-card-foreground"
            >
              {card}
            </div>
          ))}
        </div>
      </Scroller>
    </div>
  ),
}

export const WithNavigation: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <Scroller
        withNavigation
        className="h-64 w-full max-w-sm rounded-lg border p-4"
      >
        <div className="flex flex-col gap-3">
          {cards.map((card) => (
            <div
              key={card}
              className="flex h-16 items-center justify-center rounded-md border bg-card text-sm text-card-foreground"
            >
              {card}
            </div>
          ))}
        </div>
      </Scroller>
    </div>
  ),
}

export const HideScrollbar: Story = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center bg-background p-10">
      <Scroller hideScrollbar className="h-64 w-full max-w-sm rounded-lg border p-4">
        <div className="flex flex-col gap-3">
          {cards.map((card) => (
            <div
              key={card}
              className="flex h-16 items-center justify-center rounded-md border bg-card text-sm text-card-foreground"
            >
              {card}
            </div>
          ))}
        </div>
      </Scroller>
    </div>
  ),
}