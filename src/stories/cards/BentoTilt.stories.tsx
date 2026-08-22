import type { Meta, StoryObj } from "@storybook/react"
import { ChartArea, Database, Gauge, Layers } from "lucide-react"

import { BentoTilt, BentoTiltCard } from "../../components/cards/bento-tilt"

const meta: Meta<typeof BentoTilt> = {
  title: "Cards/BentoTilt",
  component: BentoTilt,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3">
      <BentoTilt>
        <BentoTiltCard
          icon={<Gauge className="size-5 text-primary" />}
          title="Realtime metrics"
          description="Live KPIs streamed straight from your data pipeline with sub-second latency."
        />
      </BentoTilt>
      <BentoTilt strength={8}>
        <BentoTiltCard
          icon={<Database className="size-5 text-primary" />}
          title="Warehouse sync"
          description="Synchronize every table into a single source of truth overnight."
        />
      </BentoTilt>
      <BentoTilt>
        <BentoTiltCard
          icon={<ChartArea className="size-5 text-primary" />}
          title="Forecasting"
          description="Machine-learning forecasts that adapt to seasonality automatically."
        />
      </BentoTilt>
    </div>
  ),
}

export const ComingSoon: Story = {
  render: () => (
    <div className="grid gap-6 p-8 sm:grid-cols-2">
      <BentoTilt>
        <BentoTiltCard
          icon={<Layers className="size-5 text-primary" />}
          title="Audit logs"
          description="Full traceability for every action taken across your workspace."
          comingSoon
        />
      </BentoTilt>
      <BentoTilt>
        <BentoTiltCard
          icon={<Gauge className="size-5 text-primary" />}
          title="SLOs"
          description="Service-level objectives with burn-rate alerts."
          comingSoon
        />
      </BentoTilt>
    </div>
  ),
}

export const StrongTilt: Story = {
  render: () => (
    <div className="p-8">
      <BentoTilt strength={12} scale={1} className="mx-auto max-w-md">
        <BentoTiltCard
          title="Strong tilt"
          description="A higher strength value produces a more dramatic 3D tilt as the pointer moves across the card."
        />
      </BentoTilt>
    </div>
  ),
}