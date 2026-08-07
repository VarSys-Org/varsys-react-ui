import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedTabs } from "../../components/navigation/animated-tabs"

const meta: Meta<typeof AnimatedTabs> = {
  title: "Navigation/AnimatedTabs",
  component: AnimatedTabs,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="flex h-full w-full flex-col justify-center rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Product Tab</p>
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="flex h-full w-full flex-col justify-center rounded-2xl bg-gradient-to-br from-sky-700 to-blue-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Services Tab</p>
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="flex h-full w-full flex-col justify-center rounded-2xl bg-gradient-to-br from-emerald-700 to-green-900 p-10 text-xl font-bold text-white md:text-4xl">
        <p>Playground Tab</p>
      </div>
    ),
  },
]

export const Default: Story = {
  render: () => (
    <div className="min-h-screen p-8">
      <AnimatedTabs tabs={tabs} />
    </div>
  ),
}

export const Compact: Story = {
  render: () => (
    <div className="min-h-screen p-8">
      <AnimatedTabs
        tabs={tabs}
        containerClassName="justify-center"
        contentClassName="mt-8"
      />
    </div>
  ),
}
