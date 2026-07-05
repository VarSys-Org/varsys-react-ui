import type { Meta, StoryObj } from "@storybook/react"
import { BentoGrid, BentoCard } from "../../components/ui/bento-grid"
import { Sparkles, Globe, Zap, Shield, Cpu, Layers } from "lucide-react"

const meta: Meta<typeof BentoGrid> = {
  title: "MagicUI/BentoGrid",
  component: BentoGrid,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const cards = [
  { name: "Analytics", description: "Track your metrics in real-time.", background: <div className="flex h-32 w-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl" />, Icon: Sparkles, href: "#", cta: "Learn more" },
  { name: "Security", description: "Enterprise-grade protection.", background: <div className="flex h-32 w-full bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl" />, Icon: Shield, href: "#", cta: "Learn more" },
  { name: "Performance", description: "Blazing fast load times.", background: <div className="flex h-32 w-full bg-gradient-to-br from-orange-500 to-red-500 rounded-xl" />, Icon: Zap, href: "#", cta: "Learn more" },
  { name: "Global", description: "Deploy to 50+ regions.", background: <div className="flex h-32 w-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl" />, Icon: Globe, href: "#", cta: "Learn more" },
  { name: "AI Powered", description: "Built-in intelligence.", background: <div className="flex h-32 w-full bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl" />, Icon: Cpu, href: "#", cta: "Learn more" },
  { name: "Scalable", description: "Grows with your team.", background: <div className="flex h-32 w-full bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl" />, Icon: Layers, href: "#", cta: "Learn more" },
]

export const Default: Story = {
  render: () => (
    <BentoGrid className="max-w-4xl mx-auto">
      {cards.map((card, i) => (
        <BentoCard key={i} {...card} className={i === 0 || i === 3 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>
  ),
}
