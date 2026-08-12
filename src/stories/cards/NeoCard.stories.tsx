import type { Meta, StoryObj } from "@storybook/react"
import {
  NeoCard,
  NeoCardWindow,
} from "../../components/cards/neo-card"

const meta: Meta<typeof NeoCard> = {
  title: "Cards/NeoCard",
  component: NeoCard,
  tags: ["autodocs"],
  args: {
    title: "How I built my first website with Nuxt, Tailwind CSS and Vercel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
    date: "April 1, 2025",
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="grid max-w-lg gap-10 p-8">
      <NeoCard {...args} shadow="single" />
      <NeoCard {...args} shadow="stacked" />
      <NeoCard {...args} shadow="flat" />
    </div>
  ),
}

export const AsLink: Story = {
  render: (args) => (
    <div className="max-w-lg p-8">
      <NeoCard {...args} href="#" />
    </div>
  ),
}

export const RetroWindow: Story = {
  render: (args) => (
    <div className="max-w-lg p-8">
      <NeoCardWindow
        windowTitle="System Message"
        title="Retro Window"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, sit quod quos quibusdam quam ducimus dolore necessitatibus delectus perspiciatis."
      />
    </div>
  ),
}

export const RetroWindowPrimary: Story = {
  render: (args) => (
    <div className="max-w-lg p-8">
      <NeoCardWindow
        header="primary"
        windowTitle="Notice"
        title="Primary Window"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, sit quod quos quibusdam quam ducimus dolore necessitatibus delectus perspiciatis."
      />
    </div>
  ),
}
