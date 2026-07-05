import type { Meta, StoryObj } from "@storybook/react"
import { CardContainer, CardBody, CardItem } from "../../components/cards/3d-card"
import { TextGenerateEffect } from "../../components/text-effects/text-generate-effect"

const meta: Meta = {
  title: "Aceternity/Cards",
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const ThreeDCard: Story = {
  render: () => (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          Make things floating in space
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
          Hover over this card to unleash the power of CSS perspective transforms and 3D translations.
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            Try now →
          </CardItem>
          <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  ),
}

export const TextGenerate: Story = {
  render: () => (
    <div className="flex justify-center my-20">
      <TextGenerateEffect words="We build digital products that are fast, beautiful, and scalable." />
    </div>
  ),
}
