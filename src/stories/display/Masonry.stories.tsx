import type { Meta, StoryObj } from "@storybook/react"

import { Card, CardContent } from "../../components/display/card"
import { Masonry, MasonryItem } from "../../components/display/masonry"

const meta: Meta<typeof Masonry> = {
  title: "Display/Masonry",
  component: Masonry,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: "Aurora", height: 160, color: "bg-blue-500/20" },
  { title: "Vortex", height: 220, color: "bg-purple-500/20" },
  { title: "Beams", height: 140, color: "bg-emerald-500/20" },
  { title: "Meteors", height: 260, color: "bg-amber-500/20" },
  { title: "Sparks", height: 180, color: "bg-rose-500/20" },
  { title: "Globe", height: 200, color: "bg-cyan-500/20" },
  { title: "Ripple", height: 150, color: "bg-indigo-500/20" },
  { title: "Tilt", height: 240, color: "bg-lime-500/20" },
  { title: "Lamp", height: 170, color: "bg-pink-500/20" },
]

export const Default: Story = {
  render: () => (
    <div className="h-[520px] w-full overflow-auto p-8">
      <Masonry
        columnWidth={180}
        gap={12}
        defaultHeight={520}
        className="h-full"
      >
        {items.map((item) => (
          <MasonryItem key={item.title}>
            <Card
              className={`${item.color} flex items-center justify-center`}
              style={{ height: item.height }}
            >
              <CardContent className="p-4 text-sm font-medium">
                {item.title}
              </CardContent>
            </Card>
          </MasonryItem>
        ))}
      </Masonry>
    </div>
  ),
}