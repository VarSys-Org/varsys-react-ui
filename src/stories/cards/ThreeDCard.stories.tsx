import type { Meta, StoryObj } from "@storybook/react"
import { CardContainer, CardBody, CardItem } from "../../components/cards/3d-card"

const meta: Meta<typeof CardContainer> = {
  title: "Cards/ThreeDCard",
  component: CardContainer,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black dark:bg-black border-white/[0.2] w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          3D Card Effect
        </CardItem>
        <CardItem translateZ="100" className="mt-2 text-sm text-neutral-400">
          Hover over this card to see the 3D effect. Built with Framer Motion.
        </CardItem>
      </CardBody>
    </CardContainer>
  ),
}
