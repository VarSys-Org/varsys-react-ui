import type { Meta, StoryObj } from "@storybook/react"
import { Globe } from "../../components/ui/globe"
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter } from "../../components/ui/animated-modal"
import { Button } from "../../components/ui/button"

const meta: Meta<typeof Globe> = {
  title: "MagicUI/Globe",
  component: Globe,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(255,255,255,0.7)",
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.5,
}

const sampleArcs = [
  {
    order: 1,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.1,
    color: "#ff0000",
  },
  {
    order: 2,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.2,
    color: "#00ff00",
  },
]

export const Default: Story = {
  render: () => (
    <div className="relative flex items-center justify-center overflow-hidden h-[500px]">
      <Globe globeConfig={globeConfig} data={sampleArcs} />
      <div className="absolute inset-0 bg-[radial-gradient(74.5%_42%_200px_at_50%_50%,transparent_80%,hsl(var(--background))_100%)]" />
    </div>
  ),
}

export const WithModal: Story = {
  render: () => (
    <Modal>
      <ModalTrigger>Open Modal</ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h3 className="text-lg font-bold">Animated Modal</h3>
          <p className="text-sm text-muted-foreground">Modal with spring animation.</p>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline">Close</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  ),
}
