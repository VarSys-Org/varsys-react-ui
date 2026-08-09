import type { Meta, StoryObj } from "@storybook/react"
import { GridBackground } from "../../components/effects/grid-background"

const meta: Meta<typeof GridBackground> = {
  title: "Effects/GridBackground",
  component: GridBackground,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <GridBackground className="h-[30rem]">
      <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40 py-8 sm:text-7xl">
        Grid Background
      </p>
    </GridBackground>
  ),
}

export const WithoutMask: Story = {
  render: () => (
    <GridBackground mask={false} className="h-[30rem]">
      <p className="text-4xl font-bold text-foreground sm:text-7xl">
        Full Grid
      </p>
    </GridBackground>
  ),
}

export const CustomColor: Story = {
  render: () => (
    <GridBackground
      gridColor="hsl(var(--primary) / 0.15)"
      className="h-[30rem]"
    >
      <p className="text-4xl font-bold text-foreground sm:text-7xl">
        Brand Grid
      </p>
    </GridBackground>
  ),
}
