import type { Meta, StoryObj } from "@storybook/react"
import { GoogleGeminiEffect } from "../../components/effects/google-gemini-effect"
import { useScroll, useTransform } from "motion/react"

const meta: Meta<typeof GoogleGeminiEffect> = {
  title: "Effects/GoogleGeminiEffect",
  component: GoogleGeminiEffect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const { scrollYProgress } = useScroll()
    const pathLengths = [0, 1, 2, 3, 4].map((i) =>
      useTransform(scrollYProgress, [i * 0.15, (i + 0.5) * 0.2], [0, 1])
    )
    return (
      <div className="h-[200vh]">
        <GoogleGeminiEffect pathLengths={pathLengths} />
      </div>
    )
  },
}
