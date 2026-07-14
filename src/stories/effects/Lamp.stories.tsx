import type { Meta, StoryObj } from "@storybook/react"
import { LampContainer } from "../../components/effects/lamp"

const meta: Meta<typeof LampContainer> = {
  title: "Effects/Lamp",
  component: LampContainer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <LampContainer>
      <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Lamps <br /> the right way
      </h1>
    </LampContainer>
  ),
}
