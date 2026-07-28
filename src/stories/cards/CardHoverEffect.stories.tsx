import type { Meta, StoryObj } from "@storybook/react"
import { HoverEffect } from "../../components/cards/card-hover-effect"

const meta: Meta<typeof HoverEffect> = { title: "Cards/HoverEffect", component: HoverEffect, tags: ["autodocs"] }
export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: "Technology", description: "Access cutting-edge tools and frameworks.", link: "#" },
  { title: "Design", description: "Beautiful, responsive designs for every screen.", link: "#" },
  { title: "Performance", description: "Lightning-fast load times and smooth interactions.", link: "#" },
]

export const Default: Story = { args: { items } }
