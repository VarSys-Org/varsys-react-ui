import type { Meta, StoryObj } from "@storybook/react"
import { ResponsiveGrid } from "../../components/layout/responsive-grid"

const meta: Meta<typeof ResponsiveGrid> = {
  title: "Layout/ResponsiveGrid",
  component: ResponsiveGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

function Tile({ label }: { label: string }) {
  return (
    <div className="flex h-32 items-center justify-center rounded-lg bg-muted text-sm font-medium text-muted-foreground">
      {label}
    </div>
  )
}

export const TwoColumns: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-3xl p-8">
      <ResponsiveGrid columns={2}>
        <Tile label="1" />
        <Tile label="2" />
      </ResponsiveGrid>
    </div>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-4xl p-8">
      <ResponsiveGrid columns={3}>
        <Tile label="1" />
        <Tile label="2" />
        <Tile label="3" />
      </ResponsiveGrid>
    </div>
  ),
}

export const FourColumns: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-4xl p-8">
      <ResponsiveGrid columns={4}>
        <Tile label="1" />
        <Tile label="2" />
        <Tile label="3" />
        <Tile label="4" />
      </ResponsiveGrid>
    </div>
  ),
}

export const AutoFit: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-4xl p-8">
      <ResponsiveGrid columns="auto">
        <Tile label="1" />
        <Tile label="2" />
        <Tile label="3" />
        <Tile label="4" />
      </ResponsiveGrid>
    </div>
  ),
}

export const WideGap: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-4xl p-8">
      <ResponsiveGrid columns={2} gap={8}>
        <Tile label="1" />
        <Tile label="2" />
      </ResponsiveGrid>
    </div>
  ),
}
