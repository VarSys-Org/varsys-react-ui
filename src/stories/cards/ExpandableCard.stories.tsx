import type { Meta, StoryObj } from "@storybook/react"
import { ExpandableCard } from "../../components/cards/expandable-card"

const meta: Meta<typeof ExpandableCard> = { title: "Cards/ExpandableCard", component: ExpandableCard, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    title: "Summertime Sadness",
    description: "Lana Del Rey",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "#",
    content: <p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style.</p>,
  },
  {
    title: "For Whom The Bell Tolls",
    description: "Metallica",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "#",
    content: <p>Metallica, an iconic American heavy metal band, is renowned for their powerful sound and intense performances.</p>,
  },
]

export const Default: Story = { args: { items } }
