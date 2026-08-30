import { useRef } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { VariableProximity } from "../../components/text-effects/variable-proximity"

const meta: Meta<typeof VariableProximity> = {
  title: "TextEffects/VariableProximity",
  component: VariableProximity,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

function DemoProximity(props: {
  falloff?: "linear" | "exponential" | "gaussian"
  radius?: number
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={containerRef}
      className="relative flex min-h-56 items-center justify-center overflow-hidden bg-background p-10"
    >
      <VariableProximity
        label="VARIABLE PROXIMITY"
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 800, 'opsz' 40"
        containerRef={containerRef}
        radius={props.radius ?? 100}
        falloff={props.falloff ?? "exponential"}
        className="text-5xl font-medium tracking-wide"
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <DemoProximity />,
}

export const TightRadius: Story = {
  render: () => <DemoProximity radius={60} />,
}

export const Gaussian: Story = {
  render: () => <DemoProximity falloff="gaussian" radius={120} />,
}