import type { Meta, StoryObj } from "@storybook/react"
import { GooeyNav } from "../../components/navigation/gooey-nav"

const meta: Meta<typeof GooeyNav> = {
  title: "Navigation/GooeyNav",
  component: GooeyNav,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
]

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <GooeyNav items={defaultItems} />
    </div>
  ),
}

export const ManyParticles: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <GooeyNav items={defaultItems} particleCount={22} particleDistances={[110, 20]} />
    </div>
  ),
}

export const Colored: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <GooeyNav
        items={defaultItems}
        colors={[2, 2, 3, 3, 4, 4]}
        particleR={120}
      />
    </div>
  ),
}