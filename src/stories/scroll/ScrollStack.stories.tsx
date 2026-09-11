import type { Meta, StoryObj } from "@storybook/react"
import { ScrollStack, ScrollStackItem } from "../../components/scroll/scroll-stack"

const meta: Meta<typeof ScrollStack> = {
  title: "Scroll/ScrollStack",
  component: ScrollStack,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

const cards = [
  { title: "Operations", body: "Monitor live production lines across every facility.", color: "bg-primary/10" },
  { title: "Maintenance", body: "Schedule predictive maintenance before failures occur.", color: "bg-chart-1/10" },
  { title: "Quality", body: "Track quality metrics with real-time tolerance alerts.", color: "bg-chart-2/10" },
  { title: "Analytics", body: "Uncover trends with drillable, interactive dashboards.", color: "bg-chart-3/10" },
]

export const Default: Story = {
  render: () => (
    <div className="h-[520px] w-full bg-background">
      <ScrollStack>
        {cards.map(card => (
          <ScrollStackItem key={card.title}>
            <div className={`flex h-full flex-col justify-between rounded-[24px] p-8 ${card.color}`}>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {card.title}
                </p>
                <p className="mt-4 text-2xl font-semibold text-card-foreground">{card.body}</p>
              </div>
              <p className="text-xs text-muted-foreground">VarSys Industrial Suite</p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  ),
}

export const WithRotation: Story = {
  render: () => (
    <div className="h-[520px] w-full bg-background">
      <ScrollStack rotationAmount={2} itemScale={0.05}>
        {cards.slice(0, 3).map(card => (
          <ScrollStackItem key={card.title}>
            <div className={`flex h-full items-center justify-center rounded-[24px] p-8 ${card.color}`}>
              <p className="text-3xl font-bold text-card-foreground">{card.title}</p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  ),
}