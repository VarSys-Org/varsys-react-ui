import type { Meta, StoryObj } from "@storybook/react"
import { FuzzyText } from "../../components/text-effects/fuzzy-text"

const meta: Meta<typeof FuzzyText> = {
  title: "TextEffects/FuzzyText",
  component: FuzzyText,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <FuzzyText>FUZZY TEXT</FuzzyText>
    </div>
  ),
}

export const Colored: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <FuzzyText color="#a855f7" hoverIntensity={0.8} baseIntensity={0.3}>
        PURPLE HAZE
      </FuzzyText>
    </div>
  ),
}

export const GlitchMode: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <FuzzyText
        glitchMode
        glitchInterval={1500}
        glitchDuration={250}
        fontSize="clamp(2rem, 6vw, 6rem)"
      >
        GLITCHY
      </FuzzyText>
    </div>
  ),
}

export const Gradient: Story = {
  render: () => (
    <div className="flex min-h-56 items-center justify-center bg-background p-10">
      <FuzzyText gradient={["#f59e0b", "#ef4444", "#ec4899"]} baseIntensity={0.25}>
        GRADIENT
      </FuzzyText>
    </div>
  ),
}