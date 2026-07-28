import type { Meta, StoryObj } from "@storybook/react"
import { Globe3D } from "../../components/data-viz/globe-3d"

const meta: Meta<typeof Globe3D> = { title: "DataViz/Globe3D", component: Globe3D, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

const markers = [
  { lat: 40.7128, lng: -74.006, src: "https://ui.aceternity.com/logo.png", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "https://ui.aceternity.com/logo.png", label: "London" },
]

export const Default: Story = { args: { markers, config: { autoRotateSpeed: 0.5, enableZoom: true } } }
