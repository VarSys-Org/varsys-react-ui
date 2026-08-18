import type { Meta, StoryObj } from "@storybook/react"
import { ChromaticImage } from "../../components/effects/chromatic-image"

const meta: Meta<typeof ChromaticImage> = {
  title: "Effects/ChromaticImage",
  component: ChromaticImage,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const IMAGE =
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=926&auto=format&fit=crop"

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-2xl gap-8 p-8">
      <ChromaticImage src={IMAGE} alt="Pacific tides" className="aspect-[4/3] w-full rounded-2xl" />
    </div>
  ),
}

export const WithChildren: Story = {
  render: () => (
    <div className="w-full max-w-2xl p-8">
      <ChromaticImage src={IMAGE} alt="Pacific tides" className="aspect-[4/3] w-full rounded-2xl">
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
          <div>
            <p className="text-sm uppercase tracking-wide text-white/70">Editorial</p>
            <h2 className="text-2xl font-semibold">Pacific Tides</h2>
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            Oahu, US
          </span>
        </div>
      </ChromaticImage>
    </div>
  ),
}

export const CustomTuning: Story = {
  render: () => (
    <div className="w-full max-w-2xl p-8">
      <ChromaticImage
        src={IMAGE}
        alt="Pacific tides"
        zoom={0.35}
        displacement={0.09}
        chromaticShift={0.02}
        tilt={0.5}
        className="aspect-[4/3] w-full rounded-2xl"
      />
    </div>
  ),
}