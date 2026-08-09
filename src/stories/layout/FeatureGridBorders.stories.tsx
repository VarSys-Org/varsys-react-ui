import type { Meta, StoryObj } from "@storybook/react"
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react"
import { FeatureGridBorders } from "../../components/layout/feature-grid-borders"

const meta: Meta<typeof FeatureGridBorders> = {
  title: "Layout/FeatureGridBorders",
  component: FeatureGridBorders,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const features = [
  {
    title: "Built for developers",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: <IconTerminal2 className="h-6 w-6" />,
  },
  {
    title: "Ease of use",
    description: "It's as easy as using an Apple, and as expensive as buying one.",
    icon: <IconEaseInOut className="h-6 w-6" />,
  },
  {
    title: "Pricing like no other",
    description:
      "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: <IconCurrencyDollar className="h-6 w-6" />,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <IconCloud className="h-6 w-6" />,
  },
  {
    title: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: <IconRouteAltLeft className="h-6 w-6" />,
  },
  {
    title: "24/7 Customer Support",
    description: "We are available a 100% of the time. Atleast our AI Agents are.",
    icon: <IconHelp className="h-6 w-6" />,
  },
  {
    title: "Money back guarantee",
    description: "If you donot like EveryAI, we will convince you to like us.",
    icon: <IconAdjustmentsBolt className="h-6 w-6" />,
  },
  {
    title: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: <IconHeart className="h-6 w-6" />,
  },
]

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <FeatureGridBorders features={features} />
    </div>
  ),
}
