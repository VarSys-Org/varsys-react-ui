import type { Meta, StoryObj } from "@storybook/react"

import { Gallery } from "../../components/display/gallery"
import accessibilityImg from "../assets/accessibility.png"
import addonLibraryImg from "../assets/addon-library.png"
import contextImg from "../assets/context.png"
import docsImg from "../assets/docs.png"
import shareImg from "../assets/share.png"
import stylingImg from "../assets/styling.png"

const meta: Meta<typeof Gallery> = {
  title: "Display/Gallery",
  component: Gallery,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const ITEMS = [
  { src: accessibilityImg, title: "Accessibility" },
  { src: addonLibraryImg, title: "Addon library" },
  { src: contextImg, title: "Context" },
  { src: docsImg, title: "Documentation" },
  { src: shareImg, title: "Sharing" },
  { src: stylingImg, title: "Styling" },
]

export const Default: Story = {
  args: { items: ITEMS, columns: 3 },
}

export const TwoColumns: Story = {
  args: { items: ITEMS, columns: 2 },
}

export const VideoAspect: Story = {
  args: { items: ITEMS, aspect: "video" },
}

export const WithoutLightbox: Story = {
  args: { items: ITEMS, lightbox: false },
}