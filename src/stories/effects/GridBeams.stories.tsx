import type { Meta, StoryObj } from "@storybook/react"
import { GridBeams } from "../../components/effects/grid-beams"

const meta: Meta<typeof GridBeams> = {
  title: "Effects/GridBeams",
  component: GridBeams,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
      <GridBeams
        gridSize={40}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={15}
        rayOpacity={0.55}
        raySpeed={1.5}
        rayLength="40vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="h-full w-full"
      >
        <div className="flex h-full items-center justify-center">
          <div className="mt-50 space-y-6 px-4 text-center">
            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Grid <span className="text-blue-400">BEAMS</span>
            </h1>
            <p className="mx-auto max-w-md text-sm text-white/60">
              A dynamic grid background with animated light beams, rays and grid
              patterns.
            </p>
          </div>
        </div>
      </GridBeams>
    </div>
  ),
}

export const Subtle: Story = {
  render: () => (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
      <GridBeams
        gridSize={60}
        gridColor="rgba(200, 220, 255, 0.15)"
        rayCount={8}
        rayOpacity={0.25}
        raySpeed={1}
        rayLength="30vh"
        className="h-full w-full"
      >
        <div className="flex h-full items-center justify-center">
          <p className="text-lg font-medium text-white/80">Subtle grid beams</p>
        </div>
      </GridBeams>
    </div>
  ),
}

export const CustomBackground: Story = {
  render: () => (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
      <GridBeams
        backgroundColor="#0f172a"
        gridColor="rgba(148, 163, 184, 0.15)"
        rayCount={12}
        rayOpacity={0.4}
        className="h-full w-full"
      >
        <div className="flex h-full items-center justify-center">
          <p className="text-lg font-medium text-white/80">Slate backdrop</p>
        </div>
      </GridBeams>
    </div>
  ),
}