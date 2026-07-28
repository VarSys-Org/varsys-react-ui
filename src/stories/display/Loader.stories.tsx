import type { Meta, StoryObj } from "@storybook/react"
import { LoaderOne, LoaderTwo, LoaderThree, LoaderFour, LoaderFive } from "../../components/display/loader"

const meta: Meta = { title: "Display/Loaders", tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

export const BouncingDots: Story = { render: () => <LoaderOne /> }
export const SlidingDots: Story = { render: () => <LoaderTwo /> }
export const SVGLoader: Story = { render: () => <LoaderThree /> }
export const GlitchText: Story = { render: () => <LoaderFour text="Loading..." /> }
export const ShimmerText: Story = { render: () => <LoaderFive text="Loading..." /> }
