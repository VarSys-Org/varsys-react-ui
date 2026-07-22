import type { Meta, StoryObj } from "@storybook/react"
import { WobbleCard } from "../../components/cards/wobble-card"

const meta: Meta<typeof WobbleCard> = {
  title: "Cards/WobbleCard",
  component: WobbleCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex justify-center p-10">
      <WobbleCard containerClassName="bg-indigo-800 max-w-sm" className="">
        <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
          Wobble Card Effect
        </h2>
        <p className="mt-4 text-left text-sm text-neutral-200">
          Move your mouse over this card to see the wobble effect in action.
        </p>
      </WobbleCard>
    </div>
  ),
}
