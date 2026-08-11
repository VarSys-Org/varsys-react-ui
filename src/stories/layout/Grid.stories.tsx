import type { Meta, StoryObj } from "@storybook/react"
import { Grid } from "../../components/layout/grid"

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

function Tile({ label }: { label: string }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-lg bg-muted text-sm font-medium text-muted-foreground">
      {label}
    </div>
  )
}

export const OneColumn: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-2xl p-8">
      <Grid numItems={1} className="gap-3">
        <Tile label="1" />
        <Tile label="2" />
      </Grid>
    </div>
  ),
}

export const TwoColumns: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-3xl p-8">
      <Grid numItems={2} className="gap-3">
        <Tile label="1" />
        <Tile label="2" />
        <Tile label="3" />
        <Tile label="4" />
      </Grid>
    </div>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-4xl p-8">
      <Grid numItems={3} className="gap-3">
        <Tile label="1" />
        <Tile label="2" />
        <Tile label="3" />
        <Tile label="4" />
        <Tile label="5" />
        <Tile label="6" />
      </Grid>
    </div>
  ),
}

export const Responsive: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-4xl p-8">
      <Grid numItems={1} numItemsSm={2} numItemsMd={3} numItemsLg={4} className="gap-3">
        <Tile label="1" />
        <Tile label="2" />
        <Tile label="3" />
        <Tile label="4" />
        <Tile label="5" />
        <Tile label="6" />
        <Tile label="7" />
        <Tile label="8" />
      </Grid>
    </div>
  ),
}
