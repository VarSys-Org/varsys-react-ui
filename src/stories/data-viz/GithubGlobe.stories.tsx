import type { Meta, StoryObj } from "@storybook/react"
import { GithubGlobe } from "../../components/data-viz/globe-github"

const meta: Meta<typeof GithubGlobe> = {
  title: "Data Viz/GithubGlobe",
  component: GithubGlobe,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-8">
      <div className="h-[500px] w-full max-w-3xl">
        <GithubGlobe />
      </div>
    </div>
  ),
}

export const CustomPointsAndArcs: Story = {
  render: () => (
    <div className="grid place-items-center bg-background p-8">
      <div className="h-[500px] w-full max-w-3xl">
        <GithubGlobe
          points={[
            { lat: 40.7128, lng: -74.006, color: "#f59e0b" },
            { lat: 51.5074, lng: -0.1278, color: "#f59e0b" },
            { lat: 35.6762, lng: 139.6503, color: "#f59e0b" },
          ]}
          arcs={[
            { startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.5, color: "#f97316" },
          ]}
          config={{ radius: 1.2, globeColor: "#0f172a", arcTime: 2.5 }}
        />
      </div>
    </div>
  ),
}
