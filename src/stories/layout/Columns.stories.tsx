import type { Meta, StoryObj } from "@storybook/react"
import { Columns } from "../../components/layout/columns"

const meta: Meta<typeof Columns> = {
  title: "Layout/Columns",
  component: Columns,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const cards = Array.from({ length: 9 }, (_, i) => ({
  title: `Card ${i + 1}`,
  height: [160, 240, 200, 180, 260, 220, 150, 210, 190][i],
}))

function Cards({
  columns = 3,
  responsive,
}: {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12
  responsive?: [
    1 | 2 | 3 | 4 | 5 | 6 | 8 | 12,
    (1 | 2 | 3 | 4 | 5 | 6 | 8 | 12)?,
    (1 | 2 | 3 | 4 | 5 | 6 | 8 | 12)?,
    (1 | 2 | 3 | 4 | 5 | 6 | 8 | 12)?,
    (1 | 2 | 3 | 4 | 5 | 6 | 8 | 12)?
  ]
}) {
  return (
    <Columns columns={columns} responsive={responsive}>
      {cards.map((card) => (
        <div
          key={card.title}
          style={{ height: card.height }}
          className="mb-4 break-inside-avoid rounded-lg bg-card border border-border p-4"
        >
          <h3 className="font-medium text-foreground">{card.title}</h3>
          <p className="text-sm text-muted-foreground">
            Masonry card with variable height.
          </p>
        </div>
      ))}
    </Columns>
  )
}

export const ThreeColumns: Story = {
  render: () => (
    <div className="min-h-48 bg-background p-10">
      <Cards />
    </div>
  ),
}

export const FourColumns: Story = {
  render: () => (
    <div className="min-h-48 bg-background p-10">
      <Cards columns={4} />
    </div>
  ),
}

export const Responsive: Story = {
  render: () => (
    <div className="min-h-48 bg-background p-10">
      <Cards columns={1} responsive={[1, 2, 3, 4, 4]} />
    </div>
  ),
}