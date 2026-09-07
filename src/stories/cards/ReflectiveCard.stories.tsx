import type { Meta, StoryObj } from "@storybook/react"
import { ReflectiveCard } from "../../components/cards/reflective-card"

const meta: Meta<typeof ReflectiveCard> = {
  title: "Cards/ReflectiveCard",
  component: ReflectiveCard,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-[600px] items-center justify-center bg-zinc-950 p-10">
      <ReflectiveCard />
    </div>
  ),
}

export const CustomIdentity: Story = {
  render: () => (
    <div className="flex min-h-[600px] items-center justify-center bg-zinc-950 p-10">
      <ReflectiveCard
        name="VARUN MEHTA"
        role="PRODUCT ENGINEER"
        idNumber="7733-9912-8845"
        blurStrength={8}
        displacementStrength={30}
      />
    </div>
  ),
}

export const Subtle: Story = {
  render: () => (
    <div className="flex min-h-[600px] items-center justify-center bg-zinc-950 p-10">
      <ReflectiveCard metalness={0.6} roughness={0.6} grayscale={0.4} glassDistortion={4} />
    </div>
  ),
}