import type { Meta, StoryObj } from "@storybook/react"
import { ButtonsCard } from "../../components/buttons/buttons-card"

const meta: Meta<typeof ButtonsCard> = {
  title: "Buttons/ButtonsCard",
  component: ButtonsCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3">
      <ButtonsCard>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Border Gradient
          </span>
        </button>
      </ButtonsCard>
      <ButtonsCard>
        <button className="group/btn relative overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black">
          <span className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover/btn:w-full dark:bg-black" />
          <span className="relative z-10">Shimmer Reveal</span>
        </button>
      </ButtonsCard>
      <ButtonsCard>
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
          Primary
        </button>
      </ButtonsCard>
    </div>
  ),
}

export const WithoutDots: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm p-8">
      <ButtonsCard dotBackground={false}>
        <button className="rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground">
          No Dots
        </button>
      </ButtonsCard>
    </div>
  ),
}
