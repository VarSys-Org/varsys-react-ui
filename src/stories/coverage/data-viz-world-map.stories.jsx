import * as ComponentModule from "../../components/data-viz/world-map"

const meta = {
  title: "Coverage/Data Viz/WorldMap",
  component: ComponentModule.default,
}
export default meta

export const Default = {
  args: {
    dots: [{ start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 40.7128, lng: -74.006 } }],
    lineColor: "#0ea5e9",
  },
}
