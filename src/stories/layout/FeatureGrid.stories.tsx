import type { Meta, StoryObj } from "@storybook/react"
import { FeatureGrid } from "../../components/layout/feature-grid"
import { Rocket, Shield, Settings } from "lucide-react"

const meta: Meta<typeof FeatureGrid> = {
  title: "Layout/FeatureGrid",
  component: FeatureGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <FeatureGrid
        title="Features for growth"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tenetur, nemo quam voluptas sunt impedit dolorem asperiores aliquid doloribus fugit."
        items={[
          {
            icon: <Rocket className="size-6" />,
            title: "High performance",
            description: "Lightning-quick load times optimized for every device",
          },
          {
            icon: <Shield className="size-6" />,
            title: "Enterprise security",
            description: "Enterprise-grade security built into every layer",
          },
          {
            icon: <Settings className="size-6" />,
            title: "Highly configurable",
            description: "Adapt every aspect to match your brand and needs",
          },
        ]}
      />
    </div>
  ),
}
