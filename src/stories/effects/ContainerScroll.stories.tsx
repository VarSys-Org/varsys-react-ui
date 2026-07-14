import type { Meta, StoryObj } from "@storybook/react"
import { ContainerScroll } from "../../components/effects/container-scroll"

const meta: Meta<typeof ContainerScroll> = {
  title: "Effects/ContainerScroll",
  component: ContainerScroll,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContainerScroll titleComponent={<h1 className="text-4xl font-bold">Scroll Animation</h1>}>
      <div className="flex h-full items-center justify-center bg-white dark:bg-zinc-800">
        <p className="text-2xl">Content inside card</p>
      </div>
    </ContainerScroll>
  ),
}
